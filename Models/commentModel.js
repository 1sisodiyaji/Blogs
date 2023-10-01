const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    post : {
        type:mongoose.Schema.Types.SchemaObjectId,
        ref:"Post"
    },
    user : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    }
})

module.exports= mongoose.model("Comments",commentSchema);