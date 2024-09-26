import express from 'express'
import connection from './config/db';
import indexRouter from './routes/indexRoute';

const app=express();
const port = process.env.PORT || 3000;

app.use('/',indexRouter)
app.get('/',(req,res)=>{
    const query ='SELECT * from  users';//query for doing CRUD

    connection.query(query,(error,results)=>{
        if (error) {
            return res.status(500).send('Error fetching data');
          }
          res.json(results);
    })
    
}) 

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
}) 