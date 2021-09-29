import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import questionRoutes from './routes/questionRoutes.js'

const app = express();

dotenv.config();

app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded(({limit:'20mb',extended:true})))

app.use(cors())

app.use('/questions',questionRoutes);


app.get('/',(req,res)=>{
    res.send('Hello to stock management')
})

const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`);
})).catch((error)=> console.log(error.message));

// mongoose.set('useFindAndModify',false);()
