import { database } from "../database"

const checkCategoryExistsMiddleware = async (req, res, next) => {
    const queryResponse = await database.query(
        `
        SELECT
            *
        FROM
            categories
        WHERE
            name = $1
        `,
        [req.body]
    )

    if(queryResponse.rowCount > 0) {
        return res.status(404).json({ message: "category already exists"})
    }

    return next()
}

export default checkCategoryExistsMiddleware