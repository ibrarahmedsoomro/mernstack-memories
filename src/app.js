import express from "express";
import bodyParser from 'body-parser'
import mongoose from "mongoose";
import cors from 'cors'
const port = process.env.PORT || 5000


const app = express()


app.use(bodyParser.json({limit : "30mb" , extended : true}))
app.use(bodyParser.urlencoded({limit : "30mb" , extended : true}))

app.use(cors())

app.get( (res, req)=>{
    
})

mongoose.connect({useNewUrlParser : true, useUnifiedTopology : true})
.then( ()=> app.listen(port, ()=> console.log(`Server is running ${port}`))
.catch( (err) => console.log(err, "Connection problem")))

mongoose.set('useFindAndModify',  false)