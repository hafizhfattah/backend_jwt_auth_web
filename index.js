import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import productRoutes from "./routes/index.js";
import db from "./config/Database.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

app.use(cors({ credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use('/products', productRoutes);

app.listen(5000, () => console.log('Server running at port 5000'));