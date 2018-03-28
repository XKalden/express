var mongoose = require("mongoose");

// APP config
mongoose.Promise = global.Promise;

// mongose dynamic data storage location      
var databaseUri="mongodb://localhost/yelp_camp_v6";
mongoose.connect(databaseUri, {useMongoClient:true})
    .then(() => console.log(`Database connected at comment.js ${databaseUri}`))
    .catch(err => console.log(`Database connection error: ${err.message}`));
    
    
var commentSchema = mongoose.Schema({
   text: String,
   author: {
       id: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "User"
       },
       username: String 
   }
});

module.exports = mongoose.model("Comment", commentSchema);
