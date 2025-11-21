import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.post("/login",(req,res)=>{
    try {
        let email = req.body.email;
        let pass = req.body.pass;
        if(pass.length<8){
            console.log("\ninvalid token");
            return res.status(401).json("\ninvalid credentials! password must contain 8 characters")
        }
        console.log(`\nEmail : ${email}\nPassword : ${pass}`);
        res.status(200).json({msg:"login success"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})
app.listen(port,()=>{
    console.log(`Server is high on caffein http://localhost:${port}`);
})