import { Router } from "express";
import { UserGet, UserLogin,UserRegister } from "../Controllers/User.js";
import { check } from "express-validator";
import { CheckErrors } from "../helpers/CheckErrors.js";

export const RouterUser = Router();

RouterUser.get('/',UserGet)

//?Login
RouterUser.post('/login',
check('email','PLEASE INSERT A EMAIL').not().isEmpty(),
check('email','PLEASE INSERT A VALID EMAIL').isEmail(),
check('password','PLEASE INSERT A PASSWORD').not().isEmpty(),
CheckErrors,
UserLogin)

//?REGISTER USER
RouterUser.post('/register',
check('email','PLEASE INSERT A EMAIL').not().isEmpty(),
check('email','PLEASE INSERT A VALID EMAIL').isEmail(),
check('password','PLEASE INSERT A PASSWORD').not().isEmpty(),
CheckErrors,
UserRegister)