var http = require(`http`)//http is core module
http.createServer((req,res) =>{
    res.end("<h1> yeloooooooo!!1</h1>")
}).listen(3001)//res= response

console.log("server is started on  http://127.0.0.1:3001")
// to stop server crl+c

http.createServer((req,res) =>{
    res.end("<h1> helllo!!1 </h1>")
}).listen(3010)
console.log("this second =  http://127.0.0.1:3010")