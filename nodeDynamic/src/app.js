const express = require("express") ; 
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn")
const User = require("./models/usermessage")
const port = process.env.PORT || 3001;

// setting the path for static content 
const staticpath = path.join(__dirname,"../public")
const templatepath = path.join(__dirname,"../templates/views")
const partialpath = path.join(__dirname,"../templates/partials")


//middleware 
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css"))); //for css 
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));  // for js 
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));  // for jquery 
// telling express that data is being sent to database in json 
app.use(express.urlencoded({extended:false})); // to get data sent by user 

app.use(express.static(staticpath));
app.set("view engine", "hbs");
     //telling express that vtemplates folder was created with views and partials inside it
app.set("views", templatepath);
hbs.registerPartials(partialpath);



//routing
// app.get(path,callback)
app.get("/", (req, res) => {
    res.render("index")   // index page linked 

});
app.get("/newPage", (req, res) => {
    res.render("newPage")   // new page linked ,similarly we can add more pages in site 

});

// post method to connect database with form data of user
app.post("/contact" , async(req, res) => {
    try{
        //res.send(req.body) write following to save the user data in DB
        const userData = new User(req.body)
        await userData.save()
        res.status(201).render("index.hbs")

    } catch(error){
        res.status(500).send(error)
    }
})

//server create 
app.listen(port,() =>{
    console.log(`server is running at port no: ${port}`);
});



