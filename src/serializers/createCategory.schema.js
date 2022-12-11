import * as yup from 'yup'

const createCategoryShape = yup.object().shape({
    name: yup.string().max(200).required()
})

const categoryReturnedShape = yup.object().shape({
    id: yup.number(),
    name: yup.string().max(200)
})

export { createCategoryShape, categoryReturnedShape }