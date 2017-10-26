cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.rjfun.cordova.httpd/www/CorHttpd.js",
        "id": "com.rjfun.cordova.httpd.CorHttpd",
        "clobbers": [
            "cordova.plugins.CorHttpd"
        ]
    },
    {
        "file": "plugins/cordova-plugin-hotspot/www/HotSpotPlugin.js",
        "id": "cordova-plugin-hotspot.HotSpotPlugin",
        "clobbers": [
            "cordova.plugins.hotspot"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "com.rjfun.cordova.httpd": "0.9.2",
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-hotspot": "1.2.5",
    "cordova-plugin-splashscreen": "3.2.2"
};
// BOTTOM OF METADATA
});