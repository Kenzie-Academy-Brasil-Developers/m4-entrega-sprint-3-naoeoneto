import getInfoCategoryService from "../../services/categories/getInfoCategory.service"

const getInfoCategoryController = async (req, res) => {
    const data = await getInfoCategoryService(req.params.id)
    return res.status(200).json(data)
}

export default getInfoCategoryController