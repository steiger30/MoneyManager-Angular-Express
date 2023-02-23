import { Router } from "express";
import { userRoutes } from "./user.routes";
import { authenticate } from "../middlewares/authenticate";
import { financeRoutes } from "./finance.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/finance", financeRoutes);

export { routes };
