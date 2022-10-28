import { NextFunction, Request, Response } from "express";
import { RequestExt } from "../interfaces/req-ext.interface";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization?.split(" ").pop() || ''
        console.log(jwtByUser)
        const isUser = verifyToken(jwtByUser) as { id: string }
        console.log(isUser)

        if (!isUser) return res.status(401).send("NO_TIENES_UN_JWT_VALIDO")
        
        req.user = isUser
        next()
    } catch (error) {
        res.status(400)
        res.send({
            message: 'SESSION_NO_VALIDA',
            err: error
        })
    }
}

export { checkJwt }