import listProductsService from "../services/listProducts.service";

const listProductsController = async (req, res) => {
    const [status, data] = await listProductsService()
    
    return res.status(status).json(data);
}

export default listProductsController