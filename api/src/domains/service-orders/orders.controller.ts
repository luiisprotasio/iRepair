import { Request, Response } from "express";
import { ServiceOrderService } from "./orders.services";

const serviceOrderService = new ServiceOrderService();

export class ServiceOrderController {
    async createOrder(req: Request, res: Response) {
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({ error: "Usuário não autenticado" });
        }
        const orderData = req.body;
        const newOrder = await serviceOrderService.createOrder(orderData);
        return res.status(201).json(newOrder);
    }
    async getAllOrders(req: Request, res: Response) {
    const userId = req.user?.id;
    if (!userId) {
        return res.status(401).json({ error: "Usuário não autenticado" });
    }
    const { status } = req.query;
    const orders = await serviceOrderService.getAllOrders(status as string);
    return res.status(200).json(orders);
}
    async deleteOrder(req: Request, res: Response) {
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({ error: "Usuário não autenticado" });
        }
        const { id } = req.params;
        await serviceOrderService.deleteOrder(Number(id));
        return res.status(204).send();
    }
    async getOrderById(req: Request, res: Response) {
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({ error: "Usuário não autenticado" });
        }
        const { id } = req.params;
        const order = await serviceOrderService.getOrderById(Number(id));
        return res.status(200).json(order);
    }
    async editOrder(req: Request, res: Response) {
    const userId = req.user?.id;
    if (!userId) {
        return res.status(401).json({ error: "Usuário não autenticado" });
    }
    const { orderId, clientId, device, issue, status } = req.body;
    const updatedOrder = await serviceOrderService.editOrder({
        orderId,
        clientId,
        device,
        issue,
        status,
    });
    return res.status(200).json(updatedOrder);
}
    async toggleOrderCompletion(req: Request, res: Response) {
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({ error: "Usuário não autenticado" });
        }
        const { orderId } = req.body;
        const updatedOrder = await serviceOrderService.toggleOrderCompletion(orderId);
        return res.status(200).json(updatedOrder);
    }
}