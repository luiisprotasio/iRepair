import express from 'express';
import { clientRouter } from '../domains/clients/client.routes';
import { ordersRouter } from '../domains/service-orders/orders.routes';
import { authRoutes } from '../domains/auths/auth.routes';
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,    
}));    
app.use(cookieParser());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/clients', clientRouter);
app.use('/orders', ordersRouter);


        
export { app };
