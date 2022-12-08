import { database } from "../database"

const createCategoryService = async (payload) => {
    const queryResponse = await database.query(
        `
        INSERT INTO categories
            ("name")
        VALUES
            ($1)
        RETURNING *;
        `,
        [payload.name]
    )

    return [201, queryResponse.rows[0]]
}

export default createCategoryService