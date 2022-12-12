import { database } from "../../database"
import { AppError } from "../../errors"
import { categoryReturnedShape } from "../../serializers/categories/createCategory.schema"

const createCategoryService = async (payload) => {
    const category = await database.query(
        `
        SELECT
            *
        FROM
            categories
        WHERE
            "name" = $1
        `,
        [payload.name]
    )

    if(category.rowCount > 0){
        throw new AppError("Category Already Exists", 409)
    }
    
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

    const returnedCategory = await categoryReturnedShape.validate(queryResponse.rows[0], {
        stripUnknown: true
    })

    return returnedCategory
}

export default createCategoryService