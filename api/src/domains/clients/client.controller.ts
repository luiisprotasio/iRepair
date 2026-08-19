import { Request, Response } from "express";
import { ClientService } from "./client.services";

const clientService = new ClientService();

export class ClientController {
    async createClient(req: Request, res: Response) {
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({ error: "Usuário não autenticado" });
        }
        const clientData = req.body;
        const newClient = await clientService.createClient(clientData);
        return res.status(201).json(newClient);
    }
    
    async getAllClients(req: Request, res: Response) {
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({ error: "Usuário não autenticado" });
        }
        const clients = await clientService.getAllClients();
        return res.status(200).json(clients);
    }
    
    async deleteClient(req: Request, res: Response) {
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({ error: "Usuário não autenticado" });
        }
        const { id } = req.params;
        await clientService.deleteClient(Number(id));
        return res.status(204).send();
    }
    
    async getClientById(req: Request, res: Response) {
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({ error: "Usuário não autenticado" });
        }
        const { id } = req.params;
        const client = await clientService.getClientById(Number(id));
        return res.status(200).json(client);
    }
    
    async editClient(req: Request, res: Response) {
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({ error: "Usuário não autenticado" });
        }
        const { clientId, name, email, phone } = req.body;
        const updatedClient = await clientService.editClient({
            clientId,
            name,
            email,
            phone,
        });
        return res.status(200).json(updatedClient);
    }
}   