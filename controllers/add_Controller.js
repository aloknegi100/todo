const Task=require('../models/to-do-list');

module.exports.add=function(req,res){
    Task.create({
       description:req.body.description,
       category:req.body.category,
       date:req.body.date
    }
    ,(err,newTask)=>{
        if(err)
        {
            console.log('Error in creating new task ',err);
            return;
        }
        res.redirect('/');
    })

    
}