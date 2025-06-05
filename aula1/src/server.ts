import express,{Application,Request,Response} from "express"

const app:Application = express()

app.get('/',(req: Request,res:Response)=>{
    res.send('<h1>aeiou</h1>');

})
app.get('/nome',(req: Request,res:Response)=>{
    res.send('<h1>uoiea</h1>');

})

app.listen(3000,()=>{
    console.log("Projendo rodando na porta 3000")
})