import { authMiddleware } from "../../middleware/authMiddleware";
import { ClientController } from "./client.controller";
import { Router } from "express";

const clientController = new ClientController();

const clientRouter = Router();

clientRouter.use(authMiddleware);

clientRouter.post("/", clientController.createClient.bind(clientController));
clientRouter.get("/", clientController.getAllClients.bind(clientController));
clientRouter.delete("/:id", clientController.deleteClient.bind(clientController));
clientRouter.get("/:id", clientController.getClientById.bind(clientController));
clientRouter.put("/", clientController.editClient.bind(clientController));

export { clientRouter };