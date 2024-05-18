import mongoose,{Schema} from "mongoose";
const schema = mongoose.schema;
let ecomschema = new  Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,

    },
});
export default mongoose.model("signupecom",ecomschema)