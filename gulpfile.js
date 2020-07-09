// 开始书写gulp的配置文件！！！！

// 首先导入模块
const gulp = require('gulp');
const del = require('del');
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
// 导入静态服务器
const webserver = require('gulp-webserver');

const { dest } = require('gulp');
//书写规则--把文件移入压缩后的对应文件夹
// 移动图片
const imgHandler = function(){
    return gulp.src('./src/images/**')
    .pipe(gulp.dest('./dist/images'))
}
// 移动lib文件夹
const libHandler = function(){
    return gulp.src('./src/lib/**')
    .pipe(gulp.dest('./dist/lib'))
}
// 删除---因为有时候开发文件夹src作出改动，dist并不知道这个改动就会一并复制过去，所以需要先删除再进行代码执行
const delHandler = ()=>{
    return del(['./dist'])
}
// 进行css的打包,分析需要两个包，一个是添加兼容前缀gulp-autoprefixer，第二个是压缩包gulp.cssmin
const cssminHandler = ()=>{
    return gulp.src('./src/css/*.css')
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}
// sass打包任务
// const sassHandler = ()=>{
//     return gulp.src('./src/sass/*.scss')
//     .pipe(sass())
//     .pipe(autoprefixer())
//     .pipe(cssmin())
//     .pipe(gulp.dest('./dist/css'))
// }

// 进行html打包 gulp-htmlmin
const htmlHandler = ()=>{
    return gulp.src('./src/pages/*.html')
    .pipe(htmlmin({
        removeAttributeQuotes:true,//移除属性上的双引号
        removeComments:true,//移除注释
        collapseWhitespace:true,//移除所有空格,会变成一行代码
        minifyCSS:true,//把页面里面style标签里面的css样式也去空格
        minifyJS:true,//把页面里面script标签里面的js代码也去空格
        collapseBooleanAttributes:true//把值为布尔值的属性简写
    }))
    .pipe(gulp.dest('./dist/pages'))
}

// 进行js打包，js需要4个包，一个是gulp-uglify  然后是gulp-babel用来转es5语法，es6语法 uglify不识别，但是babel下面还依赖于两个包 @babel/core  和 @babel/preset-env
const uglifyHandler = ()=>{
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

// 需求：编程后，浏览器页面直接更新内容，不需要刷新，创建静态服务器，实时反应端口（visual）数据
const webserverHandler = ()=>{
    //开发实时打包到dist文件，dist就当于服务器数据，时刻反应变化，那么要监听实时打包
    return gulp.src('./dist')  
    .pipe(webserver({
        port:8090, //端口号,0-6635之间,尽量不要用0-1023
        open:'./pages/index.html',//默认打开首页dist,开始书写
        livereload:true,//热更新，实时更新数据
        //因为js有跨域请求，所以需要代理，否则就要jsonp
        // proxies:[ 
        //     // 代理服务器
        //     {
        //         source: '/going', //表示请求的地址
        //         target: 'http://127.0.0.1/get.php'//你要代理的地址
        //     }
        // ]
    }))
}
module.exports.server = webserverHandler;

//需求：开发文件发生改变，即时打包至dist，需要用到一个新方法gulp.watch（）
const watchHandler = ()=>{
    gulp.watch('./src/js/*.js',uglifyHandler);
    gulp.watch('./src/pages/*.html',htmlHandler);
    gulp.watch('./src/css/*.css',cssminHandler);
    gulp.watch('./src/lib/**',libHandler);
    gulp.watch('./src/images/**',imgHandler);
    // gulp.watch('./src/sass/*/sass',sassHandler);
}



// 导出任务
// defaults是默认的任务名，在执行命令的时候就不用输入名字了，不然就是gulp 任务名  的格式
// module.exports.delete = delHandler;
// module.exports.default = imgHandler;
// module.exports.lib = libHandler;
// module.exports.cssmin = cssminHandler;
// module.exports.html = htmlHandler;
// module.exports.js = uglifyHandler;


// 有两种组合方法，就不用一个个导出和输入任务名了 gulp.series（任务1，任务2） 这种是按照顺序的~~~~   gulp.parallel(任务1，任务2)
module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(cssminHandler,uglifyHandler,htmlHandler,imgHandler,libHandler),
    // webserverHandler,
    watchHandler
)

