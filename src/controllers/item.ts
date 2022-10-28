import { Request, Response } from "express"
import { deleteCar, getCar, getCars, insertCar, updateCar } from "../services/item"
import { handleHttp } from "../utils/error.handle"

const getItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const responseCar = await getCar(id)
        const data = responseCar ? responseCar : "NOT_FOUND"
        res.send(data)
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM', error)
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const responseCars = await getCars()
        res.send(responseCars)
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS', error)
    }
}

const updateItem = async (req: Request, res: Response) => {
    const { id } = req.params
    const { body } = req
    try {
        const responseUpdateCar = await updateCar(id, body)
        res.send(responseUpdateCar)
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ITEM', error)
    }
}

const postItem = async (req: Request, res: Response) => {
    try {
        const responseCar = await insertCar(req.body)
        res.send(responseCar)
    } catch (error) {
        handleHttp(res, 'ERROR_POST_ITEM', error)
    }
}

const deleteItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const responseDeleteCar = await deleteCar(id)
        res.send(responseDeleteCar)
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ITEM', error)
    }
}

export { getItem, getItems, updateItem, postItem, deleteItem }