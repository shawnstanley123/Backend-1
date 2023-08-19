import express  from "express";
const router = express.Router();
import Products from "../models/Products.js";
router.get("/products",async(req,res)=>{
    try{
const products=await Products.find()
res.send(products)
    }catch(err){
res.send(err)
    }
})
router.get("/products/electronics",async(req,res)=>{
    const electronics= await Products.find({category:"electronics"})
    res.send(electronics)
})
router.get("/products/jewelery",async(req,res)=>{
    const electronics= await Products.find({category:"jewelery"})
    res.send(electronics)
})
router.get("/products/men'sclothing",async(req,res)=>{
    const electronics= await Products.find({category:"men's clothing"})
    res.send(electronics)
})
router.get("/products/women'sclothing",async(req,res)=>{
    const electronics= await Products.find({category:"women's clothing"})
    res.send(electronics)
})
export default router;