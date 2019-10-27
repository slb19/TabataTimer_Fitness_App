var mongoose= require("mongoose");

//workout model
var workoutSchema= new mongoose.Schema({

    getReady:{
        type:Number,
        required:true,
        validate:{
            validator:Number.isInteger,
            message:"{VALUE} is not an integer value"
        },        
    },
    workout:{
        type:Number,
        required:true,
        validate:{
            validator:Number.isInteger,
            message:"{VALUE} is not an integer value"
        }
        
    },
    rest  :{
        type:Number,
        required:true,
          validate:{
              validator:Number.isInteger,
             message:"{VALUE} is not an integer value"
          }       
    },
    rounds :{
        type:Number,
        required:true,
        validate:{
            validator:Number.isInteger,
            message:"{VALUE} is not an integer value"
        }
        
    },
    noOfTabatas:{
        type:Number,
        required:true,
        validate:{
            validator:Number.isInteger,
            message:"{VALUE} is not an integer value"
        } 
    },
    user:{
        id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
       username:String
    }
});

var workout=mongoose.model("workout", workoutSchema);

module.exports=workout;
