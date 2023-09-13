/**
 * *******************************************************************************
 * @urlShortnerApp
 *  this is used for short the url if it so long.
 *  @param {
*      const shortid = require('shortid')
*      const id = shortid()
*      console.log(id) 
*   }
* 
* *******************************************************************************
*/
const express = require('express');
const cokiesParser = require('cookie-parser')
const path = require('path');
require('./model/connectDB')();
const auth = require('./middleware/auth.js');
const urlRouter = require('./routes/urlRoute.js')
const userRouter = require('./routes/userRoute.js')
const staticRouter = require('./routes/staticRoute.js')

const app = express()

//form data accepted middleware
app.use(express.urlencoded({ extended: false }))
//body data accepted middleware
app.use(express.json())
//cokies accepted middleware
app.use(cokiesParser())


app.use('/url', auth, urlRouter)
app.use('/user', userRouter)
app.use('/', staticRouter)

//we can set the view engine as ejs to render data into the browser
app.set('view engine', "ejs");
//we can set where is the folder which store the EJS files
app.set('views', path.resolve(__dirname, "views"));


app.listen(3000, () => {
   console.log("app is connected");
})