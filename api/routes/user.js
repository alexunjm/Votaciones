'use strict'

var express = require('express');
var multipart = require('connect-multiparty');

var UserController = require('../controllers/user');
var md_auth = require('../middlewares/authentication');
var md_upload = multipart({ uploadDir: './uploads/users' });

var api = express.Router();

api.get('/status', UserController.home);
// api.get('/test', md_auth.ensureAuth, UserController.test);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);
api.get('/user/:id', md_auth.ensureAuth, UserController.getUser);
api.get('/users/:page?', md_auth.ensureAuth, UserController.getUsers);
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);
api.post('/upload-image-user/:id', [md_auth.ensureAuth, md_upload], UserController.uploadImage);
api.get('/get-image-user/:imageFile?', md_auth.ensureAuth, UserController.getImageFile);


module.exports = api;