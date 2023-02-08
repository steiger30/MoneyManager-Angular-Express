import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/CreateUser/CreateUserController";
import { GetAllUsersController } from '../modules/users/useCases/getAllUsers/GetAllUsersController';
import { AuthUserController } from "../modules/users/useCases/AuthUser/AuthController";
import { authenticate } from "../middlewares/authenticate";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const authUserController = new AuthUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", authenticate, getAllUsersController.handle);
userRoutes.post("/auth", authUserController.handle);



export { userRoutes };