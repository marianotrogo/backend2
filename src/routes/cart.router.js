import { Router, json } from "express";
import __dirname from "../util.js";
import CartManager from "../cartManager.js";
import ProductManager from "../productManager.js";

const cartRouter = Router();
const manager = new CartManager();
const productManager = new ProductManager();
cartRouter.use(json());

cartRouter.get("/", async (req,res)=>{
    let cart = await manager.getCart();
    res.send({status:"ok", cart});
});

cartRouter.post("/", async(req,res)=>{
    const {products} = req.body
    const result = await manager.addCart(products)
    res.status(201).send({status:"ok", result});
});

cartRouter.get("/:cid/", async(req,res)=>{
    let cid = (req.params.cid);
    let cart = await manager.checkCart(cid);
    res.send({status:"ok", cart});
});

cartRouter.post("/:cid/products/:pid", async(req,res)=>{
    let cid = (req.params.cid);
    let pid = (req.params.pid);
    let product = await productManager.getProductById(pid);
    let cart = await manager.addProductToCart(cid,product);
    res.send({status:"ok", cart});
});

export default cartRouter;