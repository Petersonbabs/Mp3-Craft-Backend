import express from "express";
import dotEnv from 'dotenv';
dotEnv.config();
const app = express()

const PORT = process.env.PORT || 3001

app.listen(PORT, ()=>{
    console.log("listening on port 3001")
})


app.get('/', (req, res)=>{res.send('Welcome to Mp3Craft')})

export default app