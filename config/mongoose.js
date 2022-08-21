const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/to-do-list');
const db=mongoose.connection;
db.on('error',function(){
    console.error('error connecting to db');
});
db.once('open',function(){
    console.log('succesfully connected to database');
});