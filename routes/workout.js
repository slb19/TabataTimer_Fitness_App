const express=require("express");
const router= new express.Router();
const user=require("../models/user.js");
const workout=require("../models/workout.js");
const {isLoggedIn,formValidatorNew,formValidatorUpdate} = require("../middleware/middleware.js")

var workoutIndex=1;

//LAnding
router.get("/",(req,res)=>{
    res.render("index.ejs");
   
});

//SHOW ROUTE-USERPROFILE
router.get("/workouts/:id",isLoggedIn,(req,res)=>{
    
   workout.find({},(error,workout)=>{
       if(error){
           console.log(error)
       }else{
        res.render("show.ejs",{work:workout, index:workoutIndex , a:req.user.username});   
        }
    });
}); 
//APP ROUTE
router.get("/workouts/:id/tabata",isLoggedIn, (req, res)=>{
    workout.findById(req.params.id, (error,tabata)=>{
        if(error){
            console.log(error)
            }else{
                res.render("tabataAuth.ejs", {tab:tabata})
            }
    })
})

//NEW ROUTE
router.get("/workouts/:id/new",isLoggedIn,(req,res)=>{

    res.render("new.ejs");

});

//Create route
router.post("/workouts/:id",isLoggedIn, formValidatorNew, (req,res)=>{
    workout.create(req.body.workout,(error,newWorkout)=>{
        if(error){
            console.log(error);
            req.flash("error", error.message)
            res.redirect("/workouts/"+req.user._id+"/new");
            }else{
            newWorkout.user.id=req.user._id
            newWorkout.user.username=req.user.username;
            newWorkout.save();
            res.redirect("/workouts/" +req.user.id);
        }
    });
});

//EDIT ROUTE
router.get("/workouts/:id/:id/edit",isLoggedIn, (req,res)=>{
    workout.findById(req.params.id,(error,foundWorkout)=>{
        if(error){
            console.log(error);
        }else{
            res.render("edit.ejs", {found:foundWorkout});
        }
    });   
});

//UPDATE ROUTE
router.put("/workouts/:id/:id",isLoggedIn, formValidatorUpdate, (req,res)=>{
    workout.findByIdAndUpdate(req.params.id, req.body.workout, (error,updatedWorkout)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect("/workouts/"+ req.user.id);
        }
    });
});

//DELETE ROUTE
router.delete("/workouts/:id/:id",isLoggedIn,(req,res)=>{
    workout.findByIdAndRemove(req.params.id,(error)=>{
        if(error){
            res.redirect("/workouts/"+ req.user.id);
        }else{
            res.redirect("/workouts/"+ req.user.id);
        }
    })
})

module.exports=router;