// 利用nodejs 生成项目模板
// 导入文件模块
let  fs = require("fs")
// 导入路径模块
let  path = require("path")

// 创建一个类 CreateProject

class CreateProject{
    constructor(rootpath,protecteName){
        this.rootpath = rootpath
        this.protecteName = protecteName
        this.subFiles = ["images","css","js","index.html"]
    }
    initProject(){
    //    1.创建站点文件夹
            //   -拼接路径
    let projectPath = path.join(this.rootpath,this.protecteName)
                //  -创建
     fs.mkdirSync(projectPath)
        //  2.创建子文件夹和子目录
    this.subFiles.forEach(function(filename){
        // console.log(filename)
        // path.extname(filename)
        if( path.extname(filename)==""){
            // 拼接目录
            let dirPath = path.join(projectPath,filename)
            // 创建子文件夹
            fs.mkdirSync(dirPath)
        }else if(path.extname(filename)==".html"){
            // 拼接目录
            let filePath = path.join(projectPath,filename)
            // 创建子文件
            fs.writeFileSync(filePath)
        }
    })
    }
 
}

let cp = new CreateProject(__dirname,"taobao")
cp.initProject()