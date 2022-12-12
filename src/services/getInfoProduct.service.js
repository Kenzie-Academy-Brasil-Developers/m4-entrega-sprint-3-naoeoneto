import { database } from "../database"

const getInfoProductService = async (id) => {
    const queryResponse = await database.query(
        `
        SELECT 
            *
        FROM 
            products 
        WHERE 
            id = $1;
        `, [id]
        )
        
        return queryResponse.rows[0]
    }

export default getInfoProductService