<div style= "background-color:#012169; padding: 20px 20px">

# full authorization + login logout + cokies

- In this we can make a url shorter app which will used to short the urls.
- Here we can make a seperate user login logout system where each user have its
  own record.
- we used mongoDb to store data.

## dependencies/pakages used:

1. "cookie-parser"  ==> used for manage the cookies
2. "ejs"            ==> used for render the servers side logics into frontEnd.
3. "express"        ==> used for handling server request-responce
4. "mongoose"       ==> integration with Mongodatabase
5. "nodemon"        ==> run the application
6. "shortid"        ==> shorten the urls
7. "uuid":          ==> used for creating a unique session id which will help for identification



## Routes

    Get              localhost:3000                      front page to shortUrLs
    Get              localhost:3000/register             register page
    Get              localhost:3000/login                Login page
    Get              localhost:3000/url/id               check the short url it may work or not
    Delete           localhost:3000/url/id               delete the urls from database
    Put              localhost:3000/url/id               update the urls in database
    Post             localhost:3000/user/login           post request to get login database
    Post             localhost:3000/user/register        post request to store data in database
    Post             localhost:3000/url                  post request to store urls in database

