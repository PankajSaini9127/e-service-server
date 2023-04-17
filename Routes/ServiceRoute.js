const express = require('express');
const { service_register, update_service, get_all_service, get_service } = require('../Controllers/ServiceController');


const router = express.Router()


router.route('/register').post(service_register)

router.route('/update/:id').put(update_service)

router.route('/get-all-service').get(get_all_service)

router.route('/get-service/:id').get(get_service)



module.exports = router