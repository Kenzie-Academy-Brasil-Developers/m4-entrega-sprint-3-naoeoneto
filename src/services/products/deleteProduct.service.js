import { database } from "../../database"

const deleteProductService = async (id) => {
    const queryResponse = await database.query(
        `
        DELETE FROM 
            products 
        WHERE 
            id = $1;
        `,
        [id]
    )

    return {}
}

export default deleteProductService