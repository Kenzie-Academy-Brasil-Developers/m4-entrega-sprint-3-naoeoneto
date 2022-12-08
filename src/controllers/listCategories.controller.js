import listCategoriesService from "../services/listCategories.service";

const listCategoriesController = async (req, res) => {
    const [status, data] = await listCategoriesService()
    
    return res.status(status).json(data);
}

export default listCategoriesController