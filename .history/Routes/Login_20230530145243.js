import { Router } from "express";
import { UserGet, UserLogin } from "../Controllers/User.js";

export const RouterUser = Router();

RouterUser.get('/',UserGet)
RouterUser.post('/login',UserLogin)