import listCategoriesService from "../../services/categories/listCategories.service";

const listCategoriesController = async (req, res) => {
    const data = await listCategoriesService()
    
    return res.status(200).json(data);
}

export default listCategoriesController