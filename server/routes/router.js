const express = require('express');
const route = express.Router()
const services = require('../services/render');
const controller = require('../controller/controller');
/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/test', services.test);
route.get('/', services.homeRoutes);
route.get('/test22', services.test22);
route.get('/test333',controller.test333);
/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user',services.add_user);
/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user',services.update_user);


// API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);
module.exports = route