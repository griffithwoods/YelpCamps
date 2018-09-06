var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data =[
    {
        name:"cloud rest",
        image:"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    },  
    {
        name:"desert mesa",
        image:"https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    }, 
    {
        name:"canyon floor",
        image:"https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    }
    ]
function seedDB(){
    //remove all campgrounds
   Campground.remove({},function(err){
      if(err){
          console.log(err);
      } 
      console.log("removed campgrounds");
                //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed,function(err,campground){
                    if(err){
                        console.log(err);
                        }else{
                            console.log("added a campground");
                            //create a comment
                            Comment.create(
                                {text:"this place is great,but I wish there was internet",
                                author:"homer"
                            },function(err, comment){
                                if(err){
                                    console.log(err);
                                }else{
                                        campground.comments.push(comment);
                                        campground.save();
                                        console.log("created new comment");
                                }
                               
                            });
                        }
                });
            });
        }); 
}
   
module.exports=seedDB;