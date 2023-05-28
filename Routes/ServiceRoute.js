const express = require('express');
const { service_register, update_service, get_all_service, get_service, get_all_user_service, get_service_provider } = require('../Controllers/ServiceController');


const router = express.Router()


router.route('/register').post(service_register)

router.route('/update/:id').put(update_service)

router.route('/get-all-service').get(get_all_service)

router.route('/get-service/:id').get(get_service)

router.route('/get_all_user_service/:location').get(get_all_user_service)

router.route('/get-provide').get(get_service_provider)

module.exports = router