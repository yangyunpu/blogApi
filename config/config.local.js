/**
 * @author: licongcong
 * Created on 2019/07/23
 */

'use strict';
console.log(`========START LOCAL ENV========`);
module.exports = {
	mysql: {
		client: {
		  // host
		  host: '127.0.0.1',
		  // 端口号
		  port: '3306',
		  // 用户名
		  user: 'root',
		  // 密码
		  password: 'AAAbbb111',
		  // 数据库名
		  database: 'blogWeb',
		},
		// 是否加载到 app 上，默认开启
		app: true,
		// 是否加载到 agent 上，默认关闭
		agent: false,
	}
};
