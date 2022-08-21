const express = require('express');
const port = 8800;
const db=require('./config/mongoose');
const app = express();
app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views','./views');
app.use('/',require('./routes/index'));
app.use('/asset',express.static('./asset'))

app.listen(port,(err)=>{
    if(err)
    {
        console.log('Error in running on port:',port);
        return;
    }
    console.log('Successfully running on port:',port);

})
