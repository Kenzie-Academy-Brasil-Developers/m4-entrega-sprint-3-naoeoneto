import { database } from "../../database"
import { AppError } from "../../errors"

const updateCategoryService = async (data, id) => {
    const newName = Object.values(data).toString()

    try {
        const checkCategory = await database.query(
            `
            SELECT
                *
            FROM
                categories
            WHERE
                id = $1
            `,
            [id]
        )
    
        if(checkCategory.rowCount = 0){
            throw new AppError("Category doesn't exists", 409)
        }
        
        const queryResponse = await database.query(
            `
            UPDATE 
                categories 
            SET
                name = $1
            WHERE
                id = $2
            RETURNING *;
            `,
            [newName, id]
        ) 
    
        return queryResponse.rows[0]
        
    } catch (error) {
        return console.error(error.message)
    }
}

export default updateCategoryService