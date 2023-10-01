const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology :true,
    })
    .then(console.log("DB Connected Successfully"))
    .catch((error) => {
        console.log("DB is Facing Some Issue");
        console.error(error);
        process.exit(1);
    })

};

module.export =connectWithDb;