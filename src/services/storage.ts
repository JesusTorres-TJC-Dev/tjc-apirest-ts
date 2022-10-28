import { Storage } from "../interfaces/storage"
import StorageModel from "../models/storage"

const registerUpload = async ({ fileName, idUser, path }: Storage) => {
    const responseRegisterFile = await StorageModel.create({ fileName, idUser, path })
    return responseRegisterFile
}

export { registerUpload }