const db = require("../connection/db");

async function sign_up(req, res) {
  try {
    const register = await db("auth").insert(req.body);
    console.log(register);
    if (register.length > 0) {
      return res
        .status(201)
        .send({ success: true, message: "User Register Successfully." });
    } else {
      return res.send({
        success: false,
        message: "User Register Successfully.",
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({
        success: false,
        message: "Something Went Wrong Please Try Again Later.",
      });
  }
}

async function sign_in(req, res) {
  try {
    const login = await db("auth")
      .select("*")
      .where("email", "=", req.body.email)
      .andWhere("password", "=", req.body.password);

    if(login.length >0){
        return res.send({success:true,message:"User Login Successfully.",login})
    }else{
        return res.status(203).send({success:false,message:"Something Went Wrong Please Try Again Later."})
    }  console.log(login)

  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({
        success: false,
        message: "Something Went Wrong Please Try Again Later.",
      });
  }
}

module.exports = { sign_up, sign_in };
