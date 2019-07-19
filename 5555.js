var http = require('http')
var fs = require('fs')
var url = require('url')
var obj={
    username:'tom',
    password:'123'
}
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html;charset=utf-8'})
    // fs.readFile('./kk.html',(err,data)=>{
        var query=url.parse(req.url,true).query
        if(query.username==obj.username&&query.password==obj.password){
            // res.end('成功登录')
            fs.readFile('./login.html',(err,data)=>{
                res.end(data)
            })
        //    console.log('成功登录')
        //    return false;
        }else{
            // console.log('失败')
            res.end('失败')
            // return false;
        }
    // })
}).listen(3000)