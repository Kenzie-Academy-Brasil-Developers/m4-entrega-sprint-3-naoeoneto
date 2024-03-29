import getInfoProductService from "../../services/products/getInfoProduct.service"

const getInfoProductController = async (req, res) => {
    const data = await getInfoProductService(req.params.id)
    return res.status(200).json(data)
}

export default getInfoProductController