var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');



/** 新增模块* */
var ejs = require('ejs');
var session = require('express-session');
var redisStore = require('connect-redis')(session);
/**
 * 临时信息存储中间件*/
var flash = require('connect-flash');
var dataConfig = require("./data.config.js");//配置参数


var index = require('./routes/index');
var users = require('./routes/users');
var app = express();

/** 模块事件* */
//此时req对象还没有session这个属性
app.use(session({
    store: new redisStore(dataConfig),
    secret: 'QiJiangH5SecretKey',
    resave: false,
    saveUninitialized: true
}));

app.use(flash());//全局应用临时中间件

/**上传文件限制大小**/
// app.use(express.bodyParser({limit:"5000kb"}));
//
// app.use(express.json({limit:"5000kb"}));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);  //视图文件格式为htm
app.set('view engine', 'html');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//设置静态文件目录

app.use('/', index);
app.use('/users', users);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//指定访问端口
app.listen(200);
module.exports = app;
