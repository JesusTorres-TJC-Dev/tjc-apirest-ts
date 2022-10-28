import { Request, Response } from "express"
import { RequestExt } from "../interfaces/req-ext.interface"
import { handleHttp } from "../utils/error.handle"

const getOrder = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ORDER')
    }
}

const getOrders = (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: "Si tiene acceso",
            user: req.user
        })
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ORDERS')
    }
}

const updateOrder = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ORDER')
    }
}

const postOrder = (req: Request, res: Response) => {
    try {
        res.send(req.body)
    } catch (error) {
        handleHttp(res, 'ERROR_POST_ORDER')
    }
}

const deleteOrder = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ORDER')
    }
}

export { getOrder, getOrders, updateOrder, postOrder, deleteOrder }