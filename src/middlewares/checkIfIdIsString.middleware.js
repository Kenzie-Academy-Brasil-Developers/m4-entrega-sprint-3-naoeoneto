import { AppError } from "../errors"

const checkIfIdIsStringMiddleware = async (req, res, next) => {
    try {
        const { id } = req.params

        if(isNaN(id)){
            throw new AppError("Id is not valid", 409)
        }

        return next()

    } catch (error) {
        console.error(error.message)
    }
}

export default checkIfIdIsStringMiddleware