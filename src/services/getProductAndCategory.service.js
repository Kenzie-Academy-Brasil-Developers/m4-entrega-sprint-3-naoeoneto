import { database } from "../database"

const getProductAndCategoryService = async (prod, cat, id) => {
    const queryResponse = await database.query(
        `
        SELECT
            $1."name",
            $1.price,
            $2."name" AS category
        FROM
            $1
        JOIN
            $2
        ON
            $1.category_id = $2.$3;
        `,
        [prod, cat, id]
    )

    return queryResponse.rows
}

export default getProductAndCategoryService