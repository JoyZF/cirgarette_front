var express = require('express');
var ModelProxy = require('modelproxy');
var https = require('https');
var router = express.Router();
// 初始化引入接口配置文件
ModelProxy.init( './interfaces/interface.json' );
/* GET home page. */
/*官网首页*/
router.get('/', function(req, res, next) {
    var searchModel = new ModelProxy({IndexHome:"Index.home"});
    searchModel.IndexHome().done(function(json){
        console.log(json)
        res.render('index',{data1: json.data1, data2: json.data2});
    })


});

/*关于我们*/
router.get('/about', function(req, res, next) {
    res.render('about');
});
router.get('/one', function (req, res, next) {
    res.render('one');
})

/*联系我们 */
router.get('/contact', function(req, res, next) {
    res.render('contact');
});

/*产品 */
router.get('/products', function(req, res, next) {
    var searchModel = new ModelProxy({IndexHome:"Index.home"});
    searchModel.IndexHome().done(function(json){
        console.log(json)
        res.render('products',{data1: json.data1, data2: json.data2});
    })
});
router.get('/details', function(req, res, next) {
    // console.log(req.query('id'))
    console.log(req.query.id)
    var searchModel = new ModelProxy({IndexDetail:"Index.detail"});
    searchModel.IndexDetail({id: req.query.id}).done(function(json){
        console.log(json);
        let image = json.data.cf_img;
        let array = image.split(';');
        let data = json.data;
        res.render('details',{arr: array, data: data});
    })
});
router.get('/blog', function(req, res, next) {
    res.render('blog');
});
module.exports = router;
