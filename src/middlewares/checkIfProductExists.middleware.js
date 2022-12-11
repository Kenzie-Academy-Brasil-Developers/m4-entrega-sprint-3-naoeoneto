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
            WHERE
                "name" = $1
            `,
            [req.body.name]
        )
            
        if (!queryResponse.rowCount > 0){
            throw new AppError("Product doesn't exists", 404)
        }
    
        return next()
        
    } catch (error) {
        console.error(error.message)    
    }
}

export default checkIfProductExistsMiddleware