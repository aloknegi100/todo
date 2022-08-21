const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_Controller');
const addController=require('../controllers/add_Controller')

router.get('/',homeController.home);

router.post('/add',addController.add);
console.log('router loaded');

module.exports=router;