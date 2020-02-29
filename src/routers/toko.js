const express = require('express');
const multer = require('multer');
const Router = express.Router();

const tokoController = require('../controllers/toko');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../uploads/toko');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, "-") + '-' + file.originalname)
    }
})


const upload = multer({ //multer settings
    storage: storage,
    fileFilter: function (req, file, next) {
        if(!file){
            next()
        }
        const image= file.mimetype.startsWith('image/');
        if(image){
            next(null,true)
        }else{
            next({message: "Only image Allowed!"})
        }
    },
    limits: {
        fileSize: 1024000
    }
}).single('image');




Router.post('/',(req,res,next)=>{
    upload(req,res,(err)=>{
        if(err){
            res.send(err)
        }else{
            next();
        }
    })
} , tokoController.insertToko); //insert product + upload image



module.exports = Router;