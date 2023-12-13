import { Request, Response } from "express";

const register = (req:Request, res:Response) =>{
    
    res.status(200).json({})
}

const login = (req:Request, res:Response) =>{
    res.status(200).json({})
}

export { login, register }