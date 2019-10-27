const express= require("express");
const router= new express.Router();
const passport =require("passport");
const user=require("../models/user.js");
const workout=require("../models/workout.js");
const {validPasswordAndName}=require("../middleware/middleware.js");


//register
router.get("/register",(req,res)=>{
    res.render("auth/register.ejs");
});

router.post("/register", validPasswordAndName,(req,res)=>{

    user.register(new user ({username:req.body.username}),req.body.password, (error,user)=>{
    
        if(error){
            console.log(error);
            req.flash("error", error.message)
            res.redirect("/register");
        }else{
            passport.authenticate("local")(req,res,()=>{
                //req.flash("success","Welcome to Smart Workout");
                res.redirect("/workouts/"+req.user.id);   
            });
        }
    });

});

//Login

router.get("/login",(req,res)=>{
    res.render("auth/login.ejs");
});

router.post("/login",passport.authenticate("local",{ 
   
    //successRedirect:"/workouts/"+user.id,
    failureRedirect:"/login",
    failureFlash: true

}),(req,res)=>{ 
    res.redirect("workouts/"+req.user.id);
});

//logout
router.get("/logout",(req,res)=>{
    req.logout();
    req.flash('success',"You have logged out")
    res.redirect("/");
});

module.exports=router;
