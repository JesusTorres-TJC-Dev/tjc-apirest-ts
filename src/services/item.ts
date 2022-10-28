import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const insertCar = async (item: Car) => {
    const responseInsert = await ItemModel.create(item)
    return responseInsert
}

const getCars = async () => {
    const responseCars = await ItemModel.find({})
    return responseCars
}

const getCar = async (_id: string) => {
    const responseCar = await ItemModel.findOne({_id})
    return responseCar
}

const updateCar = async (_id: string, data: Car) => {
    const responseUpdateCar = await ItemModel.findOneAndUpdate({_id}, data, {new: true})
    return responseUpdateCar
}

const deleteCar = async (_id: string) => {
    const respondeDeleteCar = await ItemModel.findByIdAndDelete({_id})
    return respondeDeleteCar
}

export { insertCar, getCars, getCar, updateCar, deleteCar }