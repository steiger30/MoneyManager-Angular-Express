import { Router } from "express"
import { userRoutes } from "./user.routes";
import { authenticate } from "../middlewares/authenticate";


const routes = Router()

routes.use("/users", userRoutes)


export { routes };