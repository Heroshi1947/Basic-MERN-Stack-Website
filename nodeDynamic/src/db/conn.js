const mongoose = require("mongoose");

//database connection 
mongoose.connect("mongodb://localhost:27017/comicspecials", { 
    //useCreateIndex :  true,
    useNewUrlParser : true , 
    useUnifiedTopology : true 
}).then(() => {
    console.log("database connected successfully ");
}).catch((error) => {
    console.log(error);
})
    