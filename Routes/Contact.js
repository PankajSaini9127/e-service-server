const express = require('express');
const db = require('../connection/db');



const router = express.Router()

async function insert_contact_query (req,res){
    try {
        const response = await db("contact-query").insert(req.body);
        console.log(response.length > 0)
        if(response.length > 0 ){
            return res.send({success:true,message:"Contact Query Submited"})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send()
    }
}

async function get_contact_query (req,res){
    try {
        const response = await db("contact-query").select("*")
        if(response.length > 0){
            return res.send({success:true,data:response})
        }else{
            return res.send({success:true,data:[]})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send()
    }
}

router.route('/submit/contact-query').post(insert_contact_query)


router.route('/get-all/contact-query').get(get_contact_query)


module.exports = router;