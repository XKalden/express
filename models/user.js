var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");


// APP config
mongoose.Promise = global.Promise;

// mongose dynamic data storage location      
var databaseUri="mongodb://localhost/yelp_camp_v6";
mongoose.connect(databaseUri, {useMongoClient:true})
    .then(() => console.log(`Database connected Users.js ${databaseUri}`))
    .catch(err => console.log(`Database connection error: ${err.message}`));

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

UserSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model("User", UserSchema);

