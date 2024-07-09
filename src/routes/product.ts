import { Router } from "express";
import {deleteProduct, getProduct, getProductById, postProduct, updateProduct} from '../controllers/product';
import validateToken from "./validate-token";

const router = Router();

router.get('/', validateToken,getProduct);
router.get('/:id', validateToken,getProductById);
router.delete('/:id', validateToken, deleteProduct);
router.post('/', validateToken, postProduct);
router.put('/:id', validateToken, updateProduct);

export default router;