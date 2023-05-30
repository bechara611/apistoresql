import { Router } from "express";
import { UserGet } from "../Controllers/User.js";

export const RouterUser = Router();

RouterUser.get('/',UserGet)