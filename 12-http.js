const http = require("http")

const server = http.createServer((req,res)=>{
      if(req.url === '/'){
        res.end("this is our Home Page")
      }
      if(req.url === '/about'){
        res.end("we are developers")
      }
      res.end(`
      <h1> Oopps</h1>
      <p>page no found</p>
      <a href="/">go back</a>
      `)

})

server.listen(5000)
