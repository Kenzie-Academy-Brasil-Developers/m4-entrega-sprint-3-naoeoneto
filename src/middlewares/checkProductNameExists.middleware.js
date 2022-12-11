import { database } from "../database"

const checkProductNameExistsMiddleware = async (req, res, next) => {
    const queryResponse = await database.query(
        `
        SELECT
            *
        FROM
            products
        WHERE
            
        `
    )
}

export default checkProductNameExistsMiddleware