import { database } from "../database"

const checkCategoryExistsMiddleware = async (req, res, next) => {
    const queryResponse = await database.query(
        `
        SELECT
            *
        FROM
            categories;
        `
    )
    
    const check = queryResponse.rows
    const findCategory = check.find(elem => elem.name === req.body.name)

    if(findCategory) {
        return res.status(400).json({ message: "category already exists"})
    }

    return next()
}

export default checkCategoryExistsMiddleware