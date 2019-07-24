'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  static: true,
	// validate: {
	// 	enable: true,
	// 	package: 'egg-validate'
	// },
	// nunjucks: {
	// 	enable: true,
	// 	package: 'egg-view-nunjucks'
	// },
	mysql: {
		enable: true,
		package: 'egg-mysql'
	},
	// oss: {
	// 	enable: true,
	// 	package: 'egg-oss'
	// }
};