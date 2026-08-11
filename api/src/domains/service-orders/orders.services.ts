import { prisma } from "../../config/prismaClient";
import { AppError } from "../../utils/AppError";
import { OrderStatus } from "../../../generated/prisma/client";
export interface Order {
    id: number;
    clientId: number;
    client: string;
    device: string;
    issue: string;
    status: OrderStatus;
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
            include: {
                client: true,
             },
        });
        return newOrder;
    }
    async getAllOrders(status?: string) {
    if (status) {
        const orders = await prisma.serviceOrder.findMany({
            where: { status: status as OrderStatus },
            include: { client: true },
        });
        return orders;
    }
    const orders = await prisma.serviceOrder.findMany({
        include: { client: true },
    });
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
   async editOrder({ orderId, clientId, device, issue, status }: { orderId: number; clientId?: number; device?: string; issue?: string; status?: OrderStatus }) {
    const order = await prisma.serviceOrder.findUnique({ where: { id: orderId } });
    if (!order) {
        throw new AppError("Ordem de serviço não encontrada", 404);
    }
    if (clientId) {
        const clientExists = await prisma.client.findUnique({ where: { id: clientId } });
        if (!clientExists) {
            throw new AppError("Cliente não encontrado", 404);
        }
    }
    const updatedOrder = await prisma.serviceOrder.update({
        where: { id: orderId },
        data: {
            ...(clientId !== undefined && { clientId }),
            ...(device !== undefined && { device }),
            ...(issue !== undefined && { issue }),
            ...(status !== undefined && { status }),
        },
        include: { client: true },
    });
    return updatedOrder;
}
    async toggleOrderCompletion(orderId: number) {
    const order = await prisma.serviceOrder.findUnique({ where: { id: orderId } });
    if (!order) {
        throw new AppError("Ordem de serviço não encontrada", 404);
    }
    const nextStatus: Record<OrderStatus, OrderStatus> = {
        open: "in_progress",
        in_progress: "done",
        done: "open",
    };
    const updatedOrder = await prisma.serviceOrder.update({
        where: { id: orderId },
        data: { status: nextStatus[order.status] },
        include: { client: true },
    });
    return updatedOrder;
}
}