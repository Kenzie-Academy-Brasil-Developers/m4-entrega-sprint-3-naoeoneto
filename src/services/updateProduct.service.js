import { database } from "../database"

const updateProductService = async (data, id) => {
    let query = 'UPDATE products SET '
    const keys = Object.keys(data)
    const values = Object.values(data)
    
    keys.forEach((key, index) => {
        query += `${key} = \$${index+=1}, `
    })

    query = query.slice(0, -2)

    query += ` 
        WHERE 
            id = \$${keys.length+=1} 
        RETURNING *;
        `
    
    const queryResponse = await database.query(
        query,
        [...values, id]
    )

    return queryResponse.rows[0]
}

export default updateProductService