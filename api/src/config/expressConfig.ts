import express from 'express';
import { tasksApp } from '../domains/temp/routes/TarefaRoutes';
import { authRoutes } from '../domains/auths/auth.routes';
import cookieParser from 'cookie-parser'
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use('/tasks', tasksApp);
app.use('/auth', authRoutes);
export { app };