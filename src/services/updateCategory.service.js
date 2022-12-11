import { database } from "../database"

const updateCategoryService = async (data, id) => {
    const newName = Object.values(data).toString()
    
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
}

export default updateCategoryService