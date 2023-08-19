import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
    name:[
        {
            type:String,
        }
    ]
})
const Category=new  mongoose.model("Category",categorySchema);
export default Category;