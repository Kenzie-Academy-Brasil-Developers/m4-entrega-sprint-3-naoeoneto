import { database } from "../database"
import { AppError } from "../errors"

const checkProductIdMiddleware = async (req, res, next) => {
    try {
        const queryResponse = await database.query(
            `
            SELECT
                products.id
            FROM
                products
            WHERE
                id = $1;
            `,
            [req.params.id]
        )
                
        if(!queryResponse.rows[0]){
            throw new AppError("Product doesn't exists", 409)
        }    

        return next()
        
    } catch (error) {
        return res.status(400).json(error.message)
    }

}

export default checkProductIdMiddleware