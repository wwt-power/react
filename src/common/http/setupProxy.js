const proxy=require（http-proxy-middleware）：
module.exports = function(app){
	app.use(proxy("/devApi",{
		//配置要请求的服务器地址
		target:"http://www.web-jshtml.cn/api/react",
		changeOrigin:true
	}))
	
	// app.use(proxy("/manage/api",{
	// 	//配置要请求的服务器地址
	// 	target:"http://",
	// 	changeOrigin:true
	// }))
};