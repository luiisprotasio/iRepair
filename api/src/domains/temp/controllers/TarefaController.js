import { TarefaService } from "../services/TarefaService.js";
const tarefaService = new TarefaService();
export class TarefaController {
    async listTasks(req, res) {
        const { done } = req.query;
        const tarefas = await tarefaService.getAll(done);
        return res.status(200).json(tarefas);
    }
    async searchTask(req, res) {
        try {
            const { id } = req.params;
            const task = await tarefaService.getById(Number(id));
            return res.status(200).json(task);
        }
        catch (error) {
            return res.status(404).json({ erro: error.message });
        }
    }
    async createTask(req, res) {
        try {
            const { name, desc } = req.body;
            const newTask = await tarefaService.create({ name, desc });
            return res.status(201).json(newTask);
        }
        catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }
    async deleteTask(req, res) {
        try {
            const { id } = req.params;
            await tarefaService.delete(Number(id));
            return res.status(204).send();
        }
        catch (error) {
            return res.status(404).json({ erro: error.message });
        }
    }
    async editTask(req, res) {
        try {
            const { id } = req.params;
            const taskId = Number(id);
            const { name, desc, done } = req.body;
            const editedTask = await tarefaService.edit({ name, desc, taskId, done });
            return res.status(200).json(editedTask);
        }
        catch (error) {
            return res.status(404).json({ erro: error.message });
        }
    }
}
