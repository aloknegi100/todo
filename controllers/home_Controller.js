const Task=require('../models/to-do-list');
module.exports.home=function(req,res){
    Task.find({},(err,task)=>{
        if(err)
        {
            console.log('error while populating');
            return
        }
        res.render('home',{
            title:'to-do-list',
            task:task
    })
    })

}