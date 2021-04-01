//对项目进行别名设置
// module.exports={
//     configureWebpack:{
//         resolve:{
//             alias:{
//                 'assets':'src/assets',
//                 'common':'src/common',
//                 'components':'src/commonents',
//                 'network':'src/network',
//                 'views':'src/views',
//             }
//         }
//     }
//     // chainWebpack: config => {
//     //     config.resolve.alias
//     //       .set('@', resolve('src'))
//     //       .set('assets', resolve('src/assets'))
//     //       .set('components', resolve('src/components'))
//     //       .set('views', resolve('src/views'))
//     //   }
    
// }
const path = require('path');        //引入path模块
function resolve(dir){
    return path.join(__dirname,dir)  //path.join(__dirname)设置绝对路径
}
module.exports={
    chainWebpack:(config)=>{
        config.resolve.alias
            //set第一个参数：设置的别名，第二个参数：设置的路径
            .set('@',resolve('./src'))
            .set('assets',resolve('./src/assets'))
            .set('components',resolve('./src/components'))
            .set('views',resolve('./src/views'))
            .set('network',resolve('./src/network'))
    }
}