import ItemModel from "../models/item"

const getOrders = async () => {
    const responseOrders = await ItemModel.find({})
    return responseOrders
}

export { getOrders }