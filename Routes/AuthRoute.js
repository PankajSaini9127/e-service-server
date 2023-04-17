const express = require('express')
const { sign_up, sign_in } = require('../Controllers/AuthController')

const router = express.Router()


//api for register user
router.route('/register').post(sign_up)

router.route('/sign-in').post(sign_in)


module.exports = router