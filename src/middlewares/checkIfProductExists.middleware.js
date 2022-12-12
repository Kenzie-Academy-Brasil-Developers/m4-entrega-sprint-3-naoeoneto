import { database } from "../database"
import { AppError } from "../errors"

const checkIfProductExistsMiddleware = async (req, res, next) => {
    try {
        const queryResponse = await database.query(
            `
            SELECT
                *
            FROM 
                products
            `
        )

        const check = queryResponse.rows
        const findProduct = check.find(elem => elem.id === req.params.id)
           
        if (!findProduct){
            throw new AppError("Product doesn't exists", 400)
        }
    
        return next()
        
    } catch (error) {
        return res.status(404).json(error.message)    
    }
}

export default checkIfProductExistsMiddleware