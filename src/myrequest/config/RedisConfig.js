/**
 * 整个项目连接redis的依赖
 */
const redis = require("redis");

// 客户端实例
const reidsClient = redis.createClient({
    host: '127.0.0.1', // Redis服务器地址，默认为localhost
    port: 6379,        // Redis服务端口，默认为6379
});

export default reidsClient;
