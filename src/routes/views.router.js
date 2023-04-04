import { Router } from "express";
import ProductManager from "../productManager.js";



let products  = [];
const viewsRouter = Router();
const productManager = new ProductManager();
viewsRouter.get("/", async(req,res)=>{
    const products = await productManager.getProducts();
    res.render("home", {products});
});

viewsRouter.get("/real-time-products",async (req,res)=>{
    let prodManager = new ProductManager("./src/productos.json");
    let products = await prodManager.getProducts();
    console.log(products);
    res.render("real-time-products", {products: products});
});

// viewsRouter.get("/real-time-products", async(req,res)=>{
//     const products = await productManager.getProducts();
//     res.render("real-time-products");
// });

export default viewsRouter;