import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/auth";
import { handleHttp } from "../utils/error.handle";

const registerCtrl = async (req: Request, res: Response) => {
    try {
        const { body } = req
        const responseUser = await registerUser(body)
        res.send(responseUser)
    } catch (error) {
        handleHttp(res, 'ERROR_REGISTER_USER', error)
    }
}

const loginCtrl = async (req: Request, res: Response) => {
    try {
        const { body } = req
        const responseLogUser = await loginUser(body)

        if (responseLogUser === "PASSWORD_INCORRECT"){
            res.status(401)
            res.send(responseLogUser)
        } else {
            res.send(responseLogUser)
        }
    } catch (error) {
        handleHttp(res, 'ERROR_AUTH_USER', error)
    }
}

export { loginCtrl, registerCtrl }