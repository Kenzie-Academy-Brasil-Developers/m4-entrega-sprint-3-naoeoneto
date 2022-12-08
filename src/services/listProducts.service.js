import { database } from "../database"

const listProductsService = async () => {
    const queryResponse = await database.query(
        'SELECT * FROM products;'
    )

    return [200, queryResponse.rows]
}

export default listProductsService