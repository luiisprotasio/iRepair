import { Request, Response } from 'express'
import { AuthService } from './auth.services'

const authService = new AuthService()

export class AuthController {

  async register(req: Request, res: Response) {
    const { email, senha } = req.body
    const usuario = await authService.register(email, senha)
    return res.status(201).json(usuario)
  }

  async login(req: Request, res: Response) {
    const { email, senha } = req.body
    const { token, refreshToken, usuario } = await authService.login(email, senha)
    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 3600000
    })
    res.cookie('refreshToken',refreshToken,{
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 60*60*24*7*1000
    })
    return res.status(200).json({ usuario })
  }

  async logout(req: Request, res: Response) {
    const refreshToken = req.cookies?.refreshToken
    if (refreshToken){
      await authService.revokeRefreshToken(refreshToken)
    }
    res.clearCookie('token')
    res.clearCookie('refreshToken')
    return res.status(200).json({ message: 'Logout realizado com sucesso' })
  }
 
  async me(req: Request, res: Response) {
    return res.status(200).json({ usuario: req.user })
}
  async refresh(req: Request, res: Response){
   const refreshToken = req.cookies?.refreshToken

   if(!refreshToken){
    return res.status(401).json({error: 'Refresh token não fornecido'})
   }
   try {
    const { newAccessToken } = await authService.refreshAccessToken
    (refreshToken)
    const token = newAccessToken
    res.cookie('token',token,{
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 3600000
    })
    return res.status(200).json({message: 'Token atualizado'})
   } catch (err){
    return res.status(401).json({error:'Token de atualização expirado ou inválido'})
   }
  }
}