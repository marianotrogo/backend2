import { Router, json } from "express";
import ProductManager from "../productManager.js";

const item = new ProductManager();

const viewsRouter = Router();

viewsRouter.get("/", async(req,res)=>{
    const products =await item.getProducts();
    console.log(prods);
    res.render("home",{products});
})

viewsRouter.get('/real-time-products', async (req,res)=>{
    const products =  await item.getProducts();
    res.render('real-time-products',{products});
})

export default viewsRouter;

// import { Router } from "express";
// import ProductManager from "../productManager.js";

// const viewsRouter = Router();
// const productManager = new ProductManager();

// viewsRouter.get("/", async(req,res)=>{
//     const products = await productManager.getProducts();
//     res.render("home", {products});
// });

// viewsRouter.get("/real-time-products",async (req,res)=>{
//     const products = await productManager.getProducts();
//     res.render("real-time-products", {products});
// });



// export default viewsRouter;