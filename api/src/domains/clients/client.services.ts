import { prisma } from "../../config/prismaClient";
import { AppError } from "../../utils/AppError";

export interface Client {
    id: number;
    name: string;
    email: string;
    phone: string;
    createdAt: string;
}

interface CreateClient {
    name: string;
    email: string;
    phone: string;
}

export class ClientService {
    async createClient(clientData: CreateClient) {
        const { name, email, phone } = clientData;
        
        if (!name || !email || !phone) {
            throw new AppError("Dados inválidos", 400);
        }
        const emailExists = await prisma.client.findUnique({
            where: { email },
        });
        if (emailExists) {
            throw new AppError("Email já cadastrado", 409);
        }
        const phoneExists = await prisma.client.findUnique({
            where: { phone },
        });
        if (phoneExists) {
            throw new AppError("Telefone já cadastrado", 409);
        }
        const newClient = await prisma.client.create({
            data: {
                name,
                email,
                phone,
            },
        });
        return newClient;
    }
    
    async getAllClients() {
        const clients = await prisma.client.findMany();
        return clients;
    }
    async deleteClient(idDelete: number) {
        const deletedClient = await prisma.client.findUnique({
            where: {
                id: idDelete,
            },
        });
        if (!deletedClient) {
            throw new AppError("Cliente não encontrado", 404);
        }
        await prisma.client.delete({
            where: {
                id: idDelete,
            },
        });
    }
    async getClientById(idSearch: number) {
        const client = await prisma.client.findUnique({
            where: {
                id: idSearch,
            },
        });
        if (!client) {
            throw new AppError("Cliente não encontrado", 404);
        }
        return client;
    }
    async editClient({ clientId, name, email, phone }: { clientId: number; name?: string; email?: string; phone?: string }) {
        const clientExists = await prisma.client.findUnique({
            where: { id: clientId },
        });
        if (!clientExists) {
            throw new AppError("Cliente não encontrado", 404);
        }
        if (email) {
            const emailExists = await prisma.client.findUnique({
                where: { email },
            });
            if (emailExists && emailExists.id !== clientId) {
                throw new AppError("Email já cadastrado", 409);
            }
        }
        if (phone) {
            const phoneExists = await prisma.client.findUnique({
                where: { phone },
            });
            if (phoneExists && phoneExists.id !== clientId) {
                throw new AppError("Telefone já cadastrado", 409);
            }
        }
        const updatedClient = await prisma.client.update({
            where: { id: clientId },
            data: {
                name,
                email,
                phone,
            },
        });
        return updatedClient;
    }
}