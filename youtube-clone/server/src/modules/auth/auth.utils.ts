import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'JWT_SECRET';
const EXPIRES_IN = process.env.EXPIRES_IN || "7d";

export function signJwt(payload: string | Buffer | object) {
  return jwt.sign(payload, JWT_SECRET, {expiresIn: EXPIRES_IN})
}

export function verifyJwt(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (e: any) {
    return null
  }
}