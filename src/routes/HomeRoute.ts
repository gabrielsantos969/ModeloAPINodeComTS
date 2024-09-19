import { Router } from "express";
import { saudacao } from "../controllers/HomeController";

const route = Router();

route.get('/', saudacao);

export default route;