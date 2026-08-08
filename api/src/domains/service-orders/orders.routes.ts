import { Router } from "express";
import { ServiceOrderController } from "./orders.controller";
import { authMiddleware } from "../../middleware/authMiddleware";

const serviceOrderController = new ServiceOrderController();

const ordersRouter = Router();

ordersRouter.use(authMiddleware);

ordersRouter.post("/", serviceOrderController.createOrder.bind(serviceOrderController));
ordersRouter.get("/", serviceOrderController.getAllOrders.bind(serviceOrderController));
ordersRouter.delete("/:id", serviceOrderController.deleteOrder.bind(serviceOrderController));
ordersRouter.get("/:id", serviceOrderController.getOrderById.bind(serviceOrderController));
ordersRouter.put("/", serviceOrderController.editOrder.bind(serviceOrderController));
ordersRouter.patch("/:id/toggle-completion", serviceOrderController.toggleOrderCompletion.bind(serviceOrderController));

export { ordersRouter };