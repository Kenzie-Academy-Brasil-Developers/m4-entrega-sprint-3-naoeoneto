import { database } from "../database"

const getProductAndCategoryService = async (id) => {
    const queryResponse = await database.query(
        `
        SELECT
            products."name",
            products.price,
            categories."name" AS category
        FROM
            products
        JOIN
            categories
        ON
            products.category_id = $1;
        `,
        [id]
    )
    
    return queryResponse.rows[0]
}

export default getProductAndCategoryService