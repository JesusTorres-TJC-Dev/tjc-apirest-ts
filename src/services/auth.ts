import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/bcryptHandle"
import { generateToken } from "../utils/jwt.handle"

const registerUser = async ({ email, password, name }: User) => {
    const checkIs = await UserModel.findOne({ email })
    if (checkIs) return "ALREADY_USER";

    const passHash = await encrypt(password)

    const registerNewUser = await UserModel.create({ email, password: passHash, name })

    return registerNewUser
}

const loginUser = async (authUser: Auth) => {
    const { email, password } = authUser

    const checkIs = await UserModel.findOne({ email })
    if (!checkIs) return "NOT_FOUND_USER";

    const passwordHash = checkIs.password
    const isCorrect = await verified(password, passwordHash)

    if (!isCorrect) return "PASSWORD_INCORRECT"
    const _id = checkIs._id.toString()

    const token = generateToken(_id)
    
    const data = {
        token: token,
        user: checkIs
    }

    return data
}

export { registerUser, loginUser }