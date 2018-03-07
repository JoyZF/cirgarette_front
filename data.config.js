var config = {
	"host": "localhost",
	"port": "6379",

	"db" : 1,
	"ttl": 60 * 60 * 24 * 30   //Session的有效期为30天
};
module.exports = config;
