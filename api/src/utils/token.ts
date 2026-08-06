import jwt, { SignOptions } from 'jsonwebtoken'
interface TokenInput {
  id: number
  email: string
}
interface TokenPayload {
  id: number
  email: string
  iat: number
  exp: number
}

export function verifyToken(token: string): TokenPayload {
  // jwt.verify lança uma exceção se o token for inválido ou expirado
  const decoded = jwt.verify(token, process.env.JWT_SECRET) as TokenPayload
  return decoded
}
export function generateToken(payload: TokenInput): string {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN as SignOptions['expiresIn'],
  })}