const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

//elixir(mix => {
//    mix.sass('app.scss')
//       .webpack('app.js');
//    .styles([
//        'libs/blog-post.css',
//        'libs/bootstrap.css',
//        'libs/font-awesome.css',
//        'libs/metisMenu.css',
//        'libs/sb-admin-2.css',
//    ], './public/css/libs.css')
//    .scripts([
//        'libs/bootstrap.js',
//        'libs/jquery.js',
//        'libs/metisMenu.js',
//        'libs/sb-admin-2.js',
//        'libs/scripts.js'
//    ], './public/js/libs.js')
//});

elixir(function(mix) {
    mix.sass("app.scss");
    mix.styles([
        'libs/blog-post.css',
        'libs/bootstrap.css',
        'libs/font-awesome.css',
        'libs/metisMenu.css',
        'libs/sb-admin-2.css',
    ], './public/css/libs.css');
    mix.scripts([
        'libs/jquery.js',
        'libs/bootstrap.js',
        'libs/metisMenu.js',
        'libs/sb-admin-2.js',
        'libs/scripts.js'
    ], './public/js/libs.js');
});
