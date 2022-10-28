import { Request, Response } from "express";
import { RequestExt } from "../interfaces/req-ext.interface";
import { Storage } from "../interfaces/storage";
import { registerUpload } from "../services/storage";
import { handleHttp } from "../utils/error.handle";

const getFile = async (req: RequestExt, res: Response) => {
    try {
        const { user, file } = req;
        console.log(file)
        const dataToRegister: Storage = {
            fileName: `${file?.filename}`,
            path: `${file?.path}`,
            idUser: `${user?.id}`
        }
        const responseFile = await registerUpload(dataToRegister)
        res.send(responseFile)
    } catch (error) {
        handleHttp(res, "ERROR_GET_BLOG", error)
    }
}

export { getFile }