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
        // console.log(queryResponse.rows)
        return queryResponse.rows
    }

export default getInfoProductService