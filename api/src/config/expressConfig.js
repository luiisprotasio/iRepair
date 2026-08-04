import express from 'express';
import { tasksApp } from '../domains/temp/routes/TarefaRoutes';
const app = express();
app.use(express.json());
app.use('/tasks', tasksApp);
export { app };
