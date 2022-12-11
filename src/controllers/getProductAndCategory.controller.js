import getProductAndCategoryService from "../services/getProductAndCategory.service"

const getProductAndCategoryController = async (req, res) => {
    const data = await getProductAndCategoryService(req.params.products, req.params.categories, req.params.id)
    return res.status(200).json(data)
}

export default getProductAndCategoryController