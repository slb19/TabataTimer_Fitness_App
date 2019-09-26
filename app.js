
var express       =require("express"),
    mongoose      =require("mongoose"),
    bodyParser    =require("body-parser"),
    methodOverride=require("method-override"),
    passport      =require("passport"),
    localStrategy =require("passport-local"),
    passportLocalMongoose=require("passport-local-mongoose"),
    flash =require('connect-flash');
var app=express();

mongoose.connect("mongodb://127.0.0.1:27017/fitApp", { useNewUrlParser: true ,useCreateIndex:true ,useFindAndModify:false});
mongoose.set('useFindAndModify', false);

//DATABASE CONFIGURATION
//=======================================================

var user=require("./models/user.js");
var workout=require("./models/workout.js")


//=======================================================

app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(__dirname +"/public"));
app.use(flash());

//PASSPORT CONFIGURATION
//======================================================
app.use(require("express-session")({
    secret: "tsiou",
    resave:false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
//===================================================
app.use(function(req,res,next){ //must be under the passport conf
    
    res.locals.currentUser = req.user; //this will be available in all the templates
    //console.log(res.locals.currentUser);
    res.locals.error=req.flash("error");
    res.locals.success=req.flash("success");
    next();
});


var workoutIndex=1;


//REST ROUTES
//==============================================
//LAnding
app.get("/",(req,res)=>{
    res.render("index.ejs");
});

//SHOW ROUTE-USERPROFILE
app.get("/workouts/:id",isLoggedIn,(req,res)=>{
    
   workout.find({},(error,workout)=>{
       if(error){
           console.log(error)
       }else{
        res.render("show.ejs",{work:workout, index:workoutIndex , a:req.user.username});   
        }
    });
}); 

app.get("/workouts/:id/tabata",isLoggedIn, (req, res)=>{
    workout.findById(req.params.id, (error,tabata)=>{
        if(error){
            console.log(error)
            }else{
                res.render("tabataAuth.ejs", {tab:tabata})
            }
    })
})

//NEW ROUTE
app.get("/workouts/:id/new",isLoggedIn,(req,res)=>{

    res.render("new.ejs");

});

//Create route
app.post("/workouts/:id",isLoggedIn,(req,res)=>{
    workout.create(req.body.workout,(error,newWorkout)=>{
        if(error){
            console.log(error);
        }else{
            newWorkout.user.id=req.user._id
            newWorkout.user.username=req.user.username;
            newWorkout.save();
            res.redirect("/workouts/" +req.user.id);
        }
    });
});

//EDIT ROUTE
app.get("/workouts/:id/:id/edit",isLoggedIn, (req,res)=>{
    workout.findById(req.params.id,(error,foundWorkout)=>{
        if(error){
            console.log(error);
        }else{
            res.render("edit.ejs", {found:foundWorkout});
        }
    });   
});

//UPDATE ROUTE
app.put("/workouts/:id/:id",isLoggedIn,(req,res)=>{
    workout.findByIdAndUpdate(req.params.id, req.body.workout, (error,updatedWorkout)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect("/workouts/"+ req.user.id);
        }
    });
});

//DELETE ROUTE
app.delete("/workouts/:id/:id",isLoggedIn,(req,res)=>{
    workout.findByIdAndRemove(req.params.id,(error)=>{
        if(error){
            res.redirect("/workouts/"+ req.user.id);
        }else{
            res.redirect("/workouts/"+ req.user.id);
        }
    })
})



//AUTH ROUTES
//============================================

//register
app.get("/register",(req,res)=>{
    res.render("auth/register.ejs");
});

app.post("/register", validPasswordAndName,(req,res)=>{

    user.register(new user ({username:req.body.username}),req.body.password, (error,user)=>{
    
        if(error){
            console.log(error);
            req.flash("error", error.message)
            res.redirect("/register");
        }else{
            passport.authenticate("local")(req,res,()=>{
                req.flash("success","Welcome to Smart Workout");
                res.redirect("/workouts/"+user.id);   
            });
        }
    });

});

//Login

app.get("/login",(req,res)=>{
    res.render("auth/login.ejs");
});

app.post("/login",passport.authenticate("local",{ //the middleware will triger passport.use(new localStrategy(user.authenticate())); It will take req.body.username and password and will authenticate the user with what we have in the database
   
    successRedirect:"/workouts/"+user.id,
    failureRedirect:"/login"
}),(req,res)=>{ //the callback doesnt do anything and we can get rid of it if we want.
    
});

//logout
app.get("/logout",(req,res)=>{
    req.logout();
    req.flash('success',"You have logged out")
    res.redirect("/");
});

//MIDDLEWARES

function isLoggedIn(req,res,next){

    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/");
}

function validPasswordAndName(req,res,next){
   
    if(req.body.password.length<6 ){  
        req.flash("error", "Your password must be more than 6 characters") 
     return res.redirect("/register");
    }else if(req.body.username.length>10){
    req.flash("error", "Your username must be less than 10 characters") 
     return res.redirect("/register");
}
next();
}

app.listen(3000,()=>{
    console.log("fitAppv2 Server Has started on 3000");
});

