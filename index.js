const express = require('express')

const cors = require('cors')

const app = express()

const Port = process.env.Port || 8080

const AuthRoute = require("./Routes/AuthRoute")

const ServiceRoute = require("./Routes/ServiceRoute")

const Contact = require("./Routes/Contact")


app.use(cors())

app.use(express.json())

app.get('/',(req,res)=>{
  res.send("server start ")
})

app.use('/auth',AuthRoute)


//  /service/register
app.use('/service',ServiceRoute)


app.use('/contact',Contact)

app.listen(Port,()=>
  console.log(`Server Is Listen on Port No ${Port}`)
)