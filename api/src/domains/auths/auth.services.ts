import bcrypt from 'bcrypt'
import { prisma } from '../../config/prismaClient'
import { generateRefreshToken, generateToken, verifyRefreshToken } from '../../utils/token'
import { AppError } from '../../utils/AppError'  

const SALT_ROUNDS = 10

export class AuthService {

  async register(email: string, senha: string) {
    const usuarioExistente = await prisma.user.findUnique({
      where: { email },
    })

    if (usuarioExistente) {
      throw new AppError('Email já cadastrado', 409)
    }

    const senhaHash = await bcrypt.hash(senha, SALT_ROUNDS)

    const usuario = await prisma.user.create({
      data: { email, password: senhaHash },
      select: { id: true, email: true }, 
    })

    return usuario
  }

  async login(email: string, senha: string) {
    const usuario = await prisma.user.findUnique({
      where: { email },
    })

    if (!usuario) {
      throw new AppError('Credenciais inválidas', 401)
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.password)

    if (!senhaCorreta) {
      throw new AppError('Credenciais inválidas', 401)
    }

    const token = generateToken({ id: usuario.id, email: usuario.email })
    const refreshExists = await prisma.refreshToken.findUnique({
      where: { userId: usuario.id },
    })
    const refreshToken = await this.getRefreshToken(usuario.email) as string
    const returnedToken = await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: usuario.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      },})
    return { token, refreshToken, usuario: { id: usuario.id, email: usuario.email } }
  }
  async getRefreshToken(email:string){
    const usuario = await prisma.user.findUnique({
      where: { email },
    })
    
    if (!usuario) {
      throw new AppError('Usuário não encontrado', 404)
    }

    const refreshToken = generateRefreshToken({ id: usuario.id, email: usuario.email })

    return refreshToken
  }
  async refreshAccessToken(refreshTokenValue: string) {
    const payload = verifyRefreshToken(refreshTokenValue)
    const storedToken = await prisma.refreshToken.findUnique({
        where: { token: refreshTokenValue },
    })

    if (!storedToken) {
        throw new AppError('Refresh token inválido', 401)
    }

    if (storedToken.expiresAt < new Date()) {
        throw new AppError('Refresh token expirado', 401)
    }
    const newAccessToken = generateToken({ id: payload.id, email: payload.email })

    return { newAccessToken, usuario: {id: payload.id, email: payload.email} }
  } 
  async revokeRefreshToken(refreshTokenValue: string) {
    await prisma.refreshToken.deleteMany({
        where: { token: refreshTokenValue },
    })
}
}