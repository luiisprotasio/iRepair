import { prisma } from "../../config/prismaClient";
import { AppError } from "../../utils/AppError";
export interface Order {
    id: number;
    clientId: number;
    client: string;
    device: string;
    issue: string;
    completed: boolean;
    createdAt: string;
}
interface CreateOrder {
    clientId: number;
    device: string;
    issue: string;
}

export class ServiceOrderService {
    async createOrder( orderData: CreateOrder) {
        const { clientId, device, issue } = orderData;
        if (!clientId || !device || !issue) {
            throw new AppError("Dados inválidos", 400);
        }
        const clientExists = await prisma.client.findUnique({
            where: { id: clientId },
        });
        if (!clientExists) {
            throw new AppError("Cliente não encontrado", 404);
        }
        const newOrder = await prisma.serviceOrder.create({
            data: {
                clientId,
                device,
                issue,
            },
        });
        return newOrder;
    }
    async getAllOrders(done?:string) {
        if (done === "true") {
            const orders = await prisma.serviceOrder.findMany({
                where: {
                    completed: true,
                },
            });
            return orders;
        } else if (done === "false") {
            const orders = await prisma.serviceOrder.findMany({
                where: {
                    completed: false,
                },
            });
            return orders;
        }
        const orders = await prisma.serviceOrder.findMany();
        return orders;
    }
    async deleteOrder(idDelete: number) {
        const deletedOrder = await prisma.serviceOrder.findUnique({
            where: {
                id: idDelete,
            },
        });
        if (!deletedOrder) {
            throw new AppError("Ordem de serviço não encontrada", 404);
        }
        await prisma.serviceOrder.delete({
            where: {
                id: idDelete,
            },
        });
    }
    async getOrderById(idSearch: number) {
        const searchedOrder = await prisma.serviceOrder.findUnique({
            where: {
                id: idSearch,
            },
        });
        if (!searchedOrder) {
            throw new AppError("Ordem de serviço não encontrada", 404);
        }
        return searchedOrder;
    }
    async editOrder({ orderId, clientId, device, issue, completed }: { orderId: number; clientId?: number; device?: string; issue?: string; completed?: boolean }) {
        const order = await prisma.serviceOrder.findUnique({ where: { id: orderId } });
        if (!order) {
            throw new AppError("Ordem de serviço não encontrada", 404);
        }
        if (clientId) {
            const clientExists = await prisma.client.findUnique({
                where: { id: clientId },
            });
            if (!clientExists) {
                throw new AppError("Cliente não encontrado", 404);
            }
        }
        const updatedOrder = await prisma.serviceOrder.update({
            where: { id: orderId },
            data: {
            ...(clientId !== undefined && { clientId: clientId }),
            ...(device !== undefined && { device: device }),
            ...(issue !== undefined && { issue: issue }),
            ...(completed !== undefined && { completed: completed }),
        }});
        return updatedOrder;
    }
    async toggleOrderCompletion(orderId: number) {
        const order = await prisma.serviceOrder.findUnique({ where: { id: orderId } });
        if (!order) {
            throw new AppError("Ordem de serviço não encontrada", 404);
        }
        const updatedOrder = await prisma.serviceOrder.update({
            where: { id: orderId },
            data: {
                completed: !order.completed,
            },
        });
        return updatedOrder;
    }
}