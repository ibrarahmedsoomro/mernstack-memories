import express from "express";
import bodyParser from 'body-parser'
import mongoose from "mongoose";
import cors from 'cors'
import postRouter from './routes/posts.js'

const port = process.env.PORT || 5000
// require('./Db/Connection')



const app = express()
app.use(bodyParser.json({limit : "30mb" , extended : true}))
app.use(bodyParser.urlencoded({limit : "30mb" , extended : true}))
app.use(cors())
app.use('/posts', postRouter)
const Db =  'mongodb+srv://ibrarsoomro:Soomro12345@cluster0.l4age.mongodb.net/socialmemories?retryWrites=true&w=majority'
mongoose.connect(Db)
.then( ()=> console.log('Server is Conencted'))
.catch( (err)=> console.log(err, "Server issue"))

app.get("/",  (res, req)=>{
    res.setEncoding("Server halae tho")
})


app.listen(port , ()=>console.log(`Server is running http://localhost:${port}`))