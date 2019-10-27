// const user=require("../models/user.js")
// const workout=require("../models/workout.js")

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

function formValidatorNew(req,res,next){
     
    if(isNaN(req.body.workout.getReady) ||
     isNaN(req.body.workout.workout) ||
     isNaN(req.body.workout.rest) || 
     isNaN(req.body.workout.rounds) ||
     isNaN(req.body.workout.noOfTabatas)){
        req.flash("error", "Characters are not allowed" )
        return res.redirect("/workouts/"+req.user._id+"/new")
    }
    if(req.body.workout.getReady==="" ||
        req.body.workout.workout==="" ||
        req.body.workout.rest==="" ||
        req.body.workout.rounds==="" ||
        req.body.workout.noOfTabatas===""){
            req.flash("error", "You must fill in all the fields")
            return res.redirect("/workouts/"+req.user._id+"/new")
     }
        if(req.body.workout.getReady<1 ||
        req.body.workout.workout<1 ||
        req.body.workout.rest<1 ||
        req.body.workout.rounds<1 ||
        req.body.workout.noOfTabatas<1 ){
            req.flash("error", "Numbers less than 1 are not allowed" )
            return res.redirect("/workouts/"+req.user._id+"/new")
        }
    next();   
}


function formValidatorUpdate(req,res,next){
     console.log(req.user, req.params.id ,req.workout)

    if(isNaN(req.body.workout.getReady) ||
     isNaN(req.body.workout.workout) ||
     isNaN(req.body.workout.rest) || 
     isNaN(req.body.workout.rounds) ||
     isNaN(req.body.workout.noOfTabatas)){
        req.flash("error", "Characters are not allowed" )
        return res.redirect("/workouts/"+req.user._id+"/"+req.params.id+"/edit")
    }
    if(req.body.workout.getReady==="" ||
        req.body.workout.workout==="" ||
        req.body.workout.rest==="" ||
        req.body.workout.rounds==="" ||
        req.body.workout.noOfTabatas===""){
            req.flash("error", "You must fill in all the fields")
            return res.redirect("/workouts/"+req.user._id+"/"+req.params.id+"/edit")
     }
        if(req.body.workout.getReady<1 ||
        req.body.workout.workout<1 ||
        req.body.workout.rest<1 ||
        req.body.workout.rounds<1 ||
        req.body.workout.noOfTabatas<1 ){
            req.flash("error", "Numbers less than 1 are not allowed" )
            return res.redirect("/workouts/"+req.user._id+"/"+req.params.id+"/edit")
        }
    next();   
}

module.exports={
    isLoggedIn,
    validPasswordAndName,
    formValidatorNew,
    formValidatorUpdate
}