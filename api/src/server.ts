import 'dotenv/config'
if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET não definido nas variáveis de ambiente')
}
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL não definido nas variáveis de ambiente')
}
import { app } from './config/expressConfig';

app.listen(1412, () => {
  console.log('🚀 Servidor rodando na porta 1412');
});