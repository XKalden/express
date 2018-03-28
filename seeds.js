var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

// APP config
mongoose.Promise = global.Promise;

// mongose dynamic data storage location      
var databaseUri="mongodb://localhost/yelp_camp_v6";
mongoose.connect(databaseUri, {useMongoClient:true})
    .then(() => console.log(`Database connected at Seeds.js ${databaseUri}`))
    .catch(err => console.log(`Database connection error: ${err.message}`));

var data = [
    {
        name: "Lion king",
        image: "https://resizing.flixster.com/h9dtAOa6GBF9NA2A2yxws5bbCvk=/2160x1080/v1.bjsxMTYxMzMxO2o7MTc1NjM7MTIwMDsyMTYwOzEwODA",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Roronoa Zoro",
        image: "https://i.ytimg.com/vi/OMWhxSPekJU/maxresdefault.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.d"
    },
    {
        name: "Lion king",
        image: "https://resizing.flixster.com/h9dtAOa6GBF9NA2A2yxws5bbCvk=/2160x1080/v1.bjsxMTYxMzMxO2o7MTc1NjM7MTIwMDsyMTYwOzEwODA",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

function seedDB(){
    //Remove all campgrounds
        Campground.remove({}, function(err){
          if(err){
              console.log(err);
          } 
          console.log("remove Campgrounds!!");
        
        //add few campgrounds
        data.forEach(function(seed){
           Campground.create(seed, function(err, campground){
               if(err){
                   console.log(err);
               } else {
                   console.log("added a campground");
                   //create a comment
                   Comment.create(
                       {
                           text:"This place is great, but I wish there was internet",
                           author: "Homer"
                       }, function(err, comment){
                           if(err){
                               console.log(err);
                           } else {
                               campground.comments.push(comment);
                               campground.save();
                               console.log("Create new comments")
                           }
                       });
               }
           }); 
        });
    });
 
    
    //add a few comments
    
}

module.exports = seedDB;