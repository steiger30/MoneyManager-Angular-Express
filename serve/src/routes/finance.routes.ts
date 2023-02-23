import { Router } from "express";
import { authenticate } from "../middlewares/authenticate";
import { CreateFinanceController } from "../modules/finance/useCases/createFinance/CreateFinanceController";
import { DeleteFinanceController } from "../modules/finance/useCases/deleteFinance/DeleteFinanceController";
import { GetallFinanceController } from "../modules/finance/useCases/getAllFinances/GetAllFinanceController";

const createFinanceController = new CreateFinanceController();
const getallFinanceController = new GetallFinanceController();
const deleteFinanceController = new DeleteFinanceController();
const financeRoutes = Router();

financeRoutes.post("/", authenticate, createFinanceController.handle);
financeRoutes.get("/", authenticate, getallFinanceController.handle);
financeRoutes.delete("/", authenticate, deleteFinanceController.handle);

export { financeRoutes };
