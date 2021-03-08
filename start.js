const mongoose = require('mongoose');
mongoose.Promise=global.Promise;
 
(async()=>{
    try{
        await mongoose.connect('mongodb://localhost/API_Task', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Mongodb is successfully connected');

    }catch(e){
        console.l0g("Error connecting to mongodb. Reason:",e);

    }
    
})();

require('./model/user.js');
require('./index.js');