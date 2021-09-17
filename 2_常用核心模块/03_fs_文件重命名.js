const fs = require('fs');
const filePath = "logs/hello.txt";
const newName = "logs/great.txt";

// 不仅可以文件重命名
// 还可以文件夹重命名
fs.rename(filePath,newName,function(err){
    if(!err){
        console.log('文件名称修改成功了!')
    }
})



const fs = require('fs');

// 遍历,删除文件夹里面的子文件
fs.readdirSync('logs').map(function(filename){
    // 注意:要使用同步的方法,因为需要确保文件已经删除完成,才能删除文件夹
    fs.unlinkSync('logs/'+filename);
})  
//['great.txt','hello.txt']

// 删除文件夹
// 注意:当文件夹不为空时,是无法删除的
fs.rmdirSync('logs')