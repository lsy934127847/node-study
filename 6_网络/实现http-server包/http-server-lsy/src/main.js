

const http = require("http")
const fs = require("fs").promises
const path = require("path")
const url = require("url")
const mime = require("mime")
const os = require("os")


let interfaces = os.networkInterfaces()
let address = Object.values(interfaces).flat().find( item =>{

    return item.family === "IPv4"
}).address


module.exports = class Server{


    constructor(opts = {}){
              console.log("opts",opts)
          this.port = opts.port
          this.directory = opts.directory
          this.address = address
    }
    start(){
           const server = http.createServer(this.handleRequest)
           server.listen(this.port,() =>{
               console.log("111111111111111111111111111111111111111111111111111111111")
            console.log(`Starting up http-server,serving:`)
               console.log(`http://${address}:${this.port}`)
               console.log(`http://127.0.0.1:${this.port}`)
           })
    }

      handleRequest =async (req,res)  => {
          let {pathname} = url.parse(req.url)

          try {
              let statObj = await fs.stat(pathname)
          } catch (error) {
              this.sendError(res,error)
            //  console.log(error)
          }
      
      }

      sendError(res,error){
            res.statusCode = 404
            res.end = "404 not found"
      }
}