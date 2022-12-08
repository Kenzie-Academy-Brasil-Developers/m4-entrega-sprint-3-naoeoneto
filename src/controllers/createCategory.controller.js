import createCategoryService from "../services/createCategory.service"

const createCategoryController = async (req, res) => {
    const [status, data] = await createCategoryService(req.body)
    return res.status(status).json(data)
}

export default createCategoryController