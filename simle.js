var http=require(`http`)
var a=90
var b=20
 var sum=a+b
 var msg

 if(c=110){
msg="<br> sum = 110</br>"
 }
http.createServer((req,res)=>{
 res.writeHead(200,{'content-type':'text/html'})
 res.write(`A=${a} <br>
     B=-${b} <br>
     sum=${sum}
     `+msg)
}).listen(4000)
console.log("your server is http://127.0.0.1:4000")