
const express     =require("express"),
    mongoose      =require("mongoose"),
    bodyParser    =require("body-parser"),
    methodOverride=require("method-override"),
    passport      =require("passport"),
    localStrategy =require("passport-local"),
    passportLocalMongoose=require("passport-local-mongoose"),
    flash =require('connect-flash');
    config=require("config")
const app=express();

const workoutRouter=require("./routes/workout.js");
const authRouter   =require("./routes/auth.js");

//DATABASE CONFIGURATION
//=======================================================
mongoose.connect("mongodb://127.0.0.1:27017/fitApp", { useNewUrlParser: true ,
                                                        useCreateIndex:true ,
                                                        useFindAndModify:false});
mongoose.set('useFindAndModify', false);
const user=require("./models/user.js");
const workout=require("./models/workout.js")


//=======================================================

app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(__dirname +"/public"));
app.use(flash());

//PASSPORT CONFIGURATION
//======================================================
app.use(require("express-session")({ //session middleware
    secret: config.get("secret"),
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
    
    res.locals.currentUser = req.user; 
    //console.log(res.locals.currentUser);
    res.locals.error=req.flash("error");
    res.locals.success=req.flash("success");
    next();
});
app.use(workoutRouter);
app.use(authRouter);

const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log("fitAppv2 Server Has started on 3000");
});

