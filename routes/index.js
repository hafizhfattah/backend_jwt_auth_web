import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { 
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/Products.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products/', createProduct);
router.patch('/products/:id', updateProduct);
router.delete('/products/:id' , deleteProduct);

// router.get('/products',verifyToken, getAllProducts);
// router.get('/products/:id',verifyToken , getProductById);
// router.post('/products/',verifyToken, createProduct);
// router.patch('/products/:id',verifyToken, updateProduct);
// router.delete('/products/:id',verifyToken , deleteProduct);

export default router;

