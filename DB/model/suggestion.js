const mongoose=require("mongoose");

const schema=mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    }
})

const model=mongoose.model("suggestion", schema);

module.exports=model;