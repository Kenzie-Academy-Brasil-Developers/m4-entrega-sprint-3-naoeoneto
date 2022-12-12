import { database } from "../database"
import { AppError } from "../errors"

const checkCategoryIdMiddleware = async (req, res, next) => {
    try {
        const queryResponse = await database.query(
            `
            SELECT
                *
            FROM 
                categories
            WHERE
                id = $1
            `,
            [req.params.id]
        )
        
        if(!queryResponse.rows[0]){
            throw new AppError("Category doesn't exists", 409)
        }    
        
        return next()

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export default checkCategoryIdMiddleware