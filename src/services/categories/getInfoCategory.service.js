import { database } from "../../database"

const getInfoCategoryService = async (id) => {
    const queryResponse = await database.query(
        `
        SELECT 
            *
        FROM 
            categories 
        WHERE 
            id = $1;
        `, [id]
        )

        return queryResponse.rows[0]
    }

export default getInfoCategoryService