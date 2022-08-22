const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_Controller');
const addController=require('../controllers/add_Controller')
const Task=require('../models/to-do-list')

router.get('/',homeController.home);

router.post('/add',addController.add);
router.get('/delete',(req,res)=>{
    let string=req.query.id;
    let arr=string.split("%");
    arr.pop();
    console.log(arr);
    for(i of arr)
    {
        Task.findByIdAndDelete(i,(err)=>{
            if(err)
            {
                console.log('error in deleting from database');
            }
        });
       
    }
    res.redirect('/');
})
console.log('router loaded');

module.exports=router;