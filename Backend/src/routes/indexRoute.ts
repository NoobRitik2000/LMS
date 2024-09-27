import express,{Router,Request , Response} from 'express';
import { request } from 'http';

const router:Router =express.Router();
router.get('/',(req:Request,res:Response)=>{
    res.send('Hello first route...');
})

export default  router;
