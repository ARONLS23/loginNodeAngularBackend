import { Request, Response, Router } from "express"
import { Product } from "../models/product"

export const getProduct = async (req: Request, res: Response) => {

    const listProductos = await Product.findAll();
    
    res.json({
        listProductos
    })
}
