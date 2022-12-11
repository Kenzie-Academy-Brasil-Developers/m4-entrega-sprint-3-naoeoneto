import { database } from "../database"

const listProductsService = async () => {
    const queryResponse = await database.query(
        'SELECT * FROM products;'
    )
    // console.log(queryResponse.rows)
    return queryResponse.rows
}

export default listProductsService