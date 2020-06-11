// import {get_label} from './list.js'
// export default{
// 	get_label
// }

// 批量导出文件
const requireApi = require.context(
	'.',//api目录相对路径
	false, //是否查询子目录
	/\.js$/  //查询文件后缀
)

let module = {}
requireApi.keys().forEach((key,index)=>{
	if(key === './index.js') return
	Object.assign(module,requireApi(key))
})
export default module

