import { Router, request, response } from "express";
import { DefaultController } from "../Controllers/Default.js";

const RouterDefault = Router();

RouterDefault.all('/',DefaultController)

export {RouterDefault}