if(process.env.NODE_ENV !="production"){
    require('dotenv').config()
  }
  
  const express = require('express');
  const server = express();
  const bodyParser = require('body-parser');
  const cookieParser = require('cookie-parser');
  const cors = require('cors');
  
  server.use(bodyParser.urlencoded({extended:false}));
  server.use(express.json());
  server.use(cors({
    origin:true,
    credentials:true
  }));
  
  server.use(cookieParser());
  
  server.use((req,res,next)=>{
    const {method,url} = req;
    console.log(`req for url ${url} and using method ${method}`);
    next();
  });
  
  server.post('/api/say-hi', (req, res) => {
    res.json({ message: 'hi' });
  });
  
  server.listen(5656, () => {
    console.log('Server listening on port 5656');
  });
  