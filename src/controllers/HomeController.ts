import { Request, Response } from "express";
import { home } from "../models/HomeModel";
import sendResponse from "../utils/SendResponse";

async function saudacao(req: Request, res: Response) {
    let message;
    try {
        const saudacao = await home();
        message = "Bem vindo ao Modelo de API Node Com TypeScript";
        sendResponse({
            res,
            success: true,
            statusCode: 200,
            message: message,
            data: saudacao
        });
    } catch (err) {
        let errorMessage = 'Um error ocorreu!';
        if(err instanceof Error){
            errorMessage = err.message;
        }

        message = 'Error ao iniciar a saudação!';
        sendResponse({
            res,
            success: true,
            statusCode: 500,
            message: message,
            error: errorMessage
        })
    }
}

export { saudacao }