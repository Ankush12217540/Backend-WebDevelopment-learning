const { response } = require('express');
const http=require('http');
const fs=require('fs');
// const data = {
//     name: "Ankush Kumar",
//     age:18,
//     subject: "Computer Science"
//  };
  
//   console.log(data);
//   const index=fs.readFileSync('index.html','utf-8');
const data=JSON.parse(fs.readFileSync("data.json",'utf-8'))
const products=data.products;

const index=fs.readFileSync('index.html','utf-8');



const server=http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url.startsWith('/product')){
        const id=req.url.split('/')[2];
         const product=products.find(p=>p.id===(+id))
         console.log(product);
         res.setHeader("Content-Type","text/html");
         const modifiedIndex=index.replace("**title**",product.title).replace("**rating**",product.rating).replace("**price**",product.price).replace("**url**", product.thumbnail);
         res.end(modifiedIndex);
         return;
    }
    switch(req.url){
        case '/':
            res.setHeader("Content-Type" , "text/html");
            res.end(index);
            break;
        case '/api':
                res.setHeader("Content-Type" , "application/json");
                res.end(JSON.stringify(data));
                break;
        default:
                    res.writeHead(404);
                    res.end();      
                }
                console.log('server  started ');
                // res.setHeader("dummyHeader","DUMMY Value");
    // res.end("<h1> Hellow, response Activated! </h1>")
    // res.setHeader("Content-Type", "application/json")
    // res.setHeader("Content-Type" , "application/json")
    //   res.setHeader("Content-Type" , "text/html")
    // res.end(JSON.stringify(data))
    // res.end(index)
    // res.end(data)
    // res.end(index)
})

server.listen(8080);