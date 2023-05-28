const db = require('../connection/db')

async function service_register (req,res){
    try {
        console.log(req.body)
        const register = await db('service').insert(req.body)
       console.log(register)
       if(register.length > 0){
        return res.status(201).send({success:true,message:"Service Register Successfully."})
       }else{
        return res.send({success:false,message:"something Went Wrong Please Try Again Later."})
       }
    } catch (error) {
        console.log(error)
       return res.status(500).send({success:false,message:"Something Went Wrong Please Try Again Later."})
    }
}


async function update_service (req,res){
    try {
        console.log(req.body)
        const register = await db('service').update(req.body).where("id","=",req.params.id)
       console.log(register)
       if(register === 1){
        return res.status(201).send({success:true,message:"Service Update Successfully."})
       }else{
        return res.send({success:false,message:"something Went Wrong Please Try Again Later."})
       }
    } catch (error) {
        console.log(error)
       return res.status(500).send({success:false,message:"Something Went Wrong Please Try Again Later."})
    }
}

async function get_all_service (req,res){
    try {
        console.log(req.body)
        const register = await db('auth').select("*").whereNot("role","=","Admin")
       console.log(register)
       if(register.length > 0){
        return res.status(201).send({success:true,message:"Service Register Successfully.",users:register})
       }else{
        return res.send({success:false,message:"Something Went Wrong Please Try Again Later."})
       }
    } catch (error) {
        console.log(error)
        return res.status(500).send({success:false,message:"Something Went Wrong Please Try Again Later."})
    }
}

async function get_service (req,res){
    try {
        console.log(req.body)
        const register = await db('service').select("*").where("id","=",req.params.id)
       console.log(register)
       if(register.length > 0){
        return res.status(201).send({success:true,message:"Service Register Successfully.",service:register})
       }else{
        return res.send({success:false,message:"omething Went Wrong Please Try Again Later."})
       }
    } catch (error) {
        console.log(error)
        return res.status(500).send({success:false,message:"Something Went Wrong Please Try Again Later."})
    }
}

async function get_all_user_service(req,res){
    try {
        console.log(req.body)
        const register = await db('service').select("*").where("location","=",req.params.location)
       console.log(register)
       if(register.length > 0){
        return res.status(201).send({success:true,message:"Service Register Successfully.",services:register})
       }else{
        return res.send({success:false,message:"Something Went Wrong Please Try Again Later."})
       }
    } catch (error) {
        console.log(error)
        return res.status(500).send({success:false,message:"Something Went Wrong Please Try Again Later."})
    } 
}

async function get_service_provider(req,res){
    try {
        const register = await db('auth').select("name").where("location","=",req.query.location)
       console.log(register)
       if(register.length > 0){
        return res.status(201).send({success:true,message:"Service Register Successfully.",provider:register})
       }else{
        return res.send({success:false,message:"Something Went Wrong Please Try Again Later."})
       }
    } catch (error) {
        console.log(error)
        return res.status(500).send({success:false,message:"Something Went Wrong Please Try Again Later."})
    }
}


module.exports ={service_register,update_service,get_all_service,get_service,get_all_user_service,get_service_provider}