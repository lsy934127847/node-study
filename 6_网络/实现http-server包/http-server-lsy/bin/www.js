#! /usr/bin/env node



// --help
// --version
// --useage

const chalk = require("chalk")
const commander = require("commander")
const Server = require("../src/main")
const version = require("../package.json").version
const { program } = commander
console.log(chalk.green("欢迎使用lsy的http-server的命令行工具"))
const config = {
    "port":{
        option:"-p,--port ",
        description:"set server port",
        default:8080,
        usage:"lsy --port "
    },
    "directory":{
        option:"-d,--directory",
        description:"set server port",
        default:process.cwd(),
        usage:"lsy --directory"
    },
}



program.version(version)
.name(" ") // 去掉www
.usage("lsy [options]")     //   lsy --version

Object.entries(config).forEach( ([key,value]) =>{
 
   program.option(value.option,value.description,value.default)
})


program.parse(process.argv)

program.on("--help",function(){
    // 监听 lsy --help
})

let opts = program.opts()

// lsy --port 3000
// opts = {port: 3000}
console.log("opts",opts)


let server = new Server(opts)
server.start()