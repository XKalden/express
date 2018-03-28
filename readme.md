#Style the compgrounds page 
* Add a better header/title
* Make campgrounds display in a grid 

#Style the Navbar and Form
* Add a navbar to all templates
* Style the new campgrounds form

#Add Mongoose
* Install and configure mongoose 
* Setup Campgrounds model
* Use campgrounds model inside of our routes!

#Show Page
* Review the RESTful routes we've seen so far 
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

#Refactor Mongoose Code 
* Create a models directory 
* Use module.exports
* Require everthing correctly!

#Add Seeds File 
* Add a seeds.js file
* Run the seeds file every time the server starts

#Add the Comment model!
* Make our error go away!
* Display comments on campground show page

#Comment New/Create 
* Discuss nested route 
* Add the comment new and create routes
* Add the new comment form 
 
RESTFUL ROUTES
nam         url             verb             desc 
=================================================================
INDEX       /dogs           GET         Display a list of all dogs
NEW         /dogs/new       GET         Displays form to make new dogs
CREATE      /dogs           POST        Add new dog to DB
SHOW        /dogs/:id       GET         Show info about one dog

Nested route 
NEW         campgrounds/:id/comments/new        GET
CREATE      campgrounds/:id/comments            POST 

#Style Show page
* Add sidebar to show page
* Display comments nicely 

#Finish Styling Show Page 
* Add public directory 
* Add Custom Stylesheet 

#Add User Model
* Install all packages needed for auth 
* Define User model 

#Auth Pt. 2 - Register 
* Configure Passport 
* Add register routes
* Add register template 

#Auth Pt. 3 - Login
* Add Login routes
* Add Login template

##Auth Pt.4 - Logout/Navbar
* Add logout route 
* Prevent user from adding a comment if not signed in 
* Add links to navbar
* Show/hide auth link correctly

##Auth Pt.5 - Show/hide Links
* Show/hide auth links in navbar correctly

##Refactor the Routes
* Use Express router to reoraginize all routes 

##Users + Comments 
* Associate users and comments
* Save author's name to a comment automatically

##User + Campgrounds 
* Prevent an unauthenticated user from creating a campground
* Save username +id to newly created campground

#Editing Campgrounds
* Add Method-Override 
* Add Edit Route for Campgrounds
* Add link to Edit Page
* Add Update Route 
* Fix $set problem

#Deleting Camgrounds
* Adding Destory Route 
* Add Delet Button

#Authorization
* User can only edit his/her campgrounds 
* User can only delete his/her campgrounds 
* Hide/Show edit and delete button 

#Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

//comment id 
/campgrounds/:id/comments/:comment_id/edit

#Deleleting Comments
* Add Destory route 
* Add Destory button

#Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delet his/her commens
* Hide/show edit and delet buttons
* Refactor Middleware

#Adding in Flash!
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header 


