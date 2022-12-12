import { database } from "../database"

const checkCategoryDoesntExistsMiddleware = async (req, res, next) => {
    const queryResponse = await database.query(
        `
        SELECT
            *
        FROM
            categories;
        `
    )
    
    const check = queryResponse.rows
    const findCategory = check.find(elem => elem.id === req.params.id)
        
    if(!findCategory) {
        return res.status(404).json({ message: "category doesn't exists"})
    }

    return next()
}

export default checkCategoryDoesntExistsMiddleware