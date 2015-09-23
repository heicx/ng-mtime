require.config({
	paths: {
		"jquery": "../node_modules/jquery/dist/jquery",
		"angular": "../bower_components/angular/angular",
		"angularRoute": "../bower_components/angular-route/angular-route",
		"angularAMD": "../bower_components/angularAMD/angularAMD",
		"amui": "../assets/js/amazeui.min",

		"app": "app",
		'list': 'js/list'
	},
	shim: {
		"amui": ["jquery"],
		"angularAMD":  ["angular"],
		'angularRoute': ['angular'],
	},
	deps: ["app"],
	urlArgs: "v=" + (new Date()).getTime()
});