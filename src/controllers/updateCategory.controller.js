import updateCategoryService from "../services/updateCategory.service"

const updateCategoryController = async (req, res) => {
    const data = await updateCategoryService(req.body, req.params.id)
    return res.status(200).json(data)
}

export default updateCategoryController