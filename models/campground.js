var mongoose = require("mongoose");
// APP config
mongoose.Promise = global.Promise;
// mongose dynamic data storage location      
var databaseUri="mongodb://localhost/yelp_camp_v6";
mongoose.connect(databaseUri, {useMongoClient:true})
    .then(() => console.log(`Database connected at campground.js ${databaseUri}`))
    .catch(err => console.log(`Database connection error: ${err.message}`));
    
var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   author:{
       id:{
           type: mongoose.Schema.Types.ObjectId,
           ref:"User"
       },
       username: String
   },
   comments: [
       {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Comment"
       }
       ]
});

// Make Model Data structure 
module.exports = mongoose.model("Campground", campgroundSchema);