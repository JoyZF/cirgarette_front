var express = require('express');
var router = express.Router();
var ModelProxy = require('modelproxy');
var request = require('request');
var multer = require('multer');
/*配置文件上传地址*/
var upload = multer({ dest: '../resources/uploads/idforh5' },
    {limits:5000});
var fs = require('fs');
// 初始化引入接口配置文件
ModelProxy.init( './interfaces/interface.json' );

/**
 * 会员信息校验入口
 * 2017/3/17 | sili
 * */
// router.all('*',function(req,res,next){
//     return next();
//     var session = req.session;
//     //判断是否支持启用session
//     if(!session){
//         req.flash('error', '会话控制器起动失败');
//         res.redirect('/error'); //错误提示页
//     }
//     //判断是否存在用户信息
//     if(!session.user || !session.user.auth){
//         //调用重登入页
//         res.redirect('/refresh_token');
//     }
//     return next();
// });


















module.exports = router;


