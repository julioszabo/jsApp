module.exports = function(grunt) {

	 // Project configuration.
  	grunt.initConfig({
  		pkg: grunt.file.readJSON("package.json"),
      jshint: {
        options: {
          curly: true,
          eqeqeq: true,
          immed: true,
          latedef: true,
          newcap: true,
          noarg: true,
          sub: true,
          undef: true,
          boss: true,
          eqnull: true,
          browser: true,
          plusplus: false,
          smarttabs: true,
          scripturl: true,
          evil: true,
          globals: {
            global: true,
            process: true,
            console: true,
            Buffer: true,
            require: true,
            __filename: true,
            __dirname: true,
            module: true,
            exports:true,
            //for Browser
            Backbone: true,
            _: true,
            window: true,
            alert: true,
            $: true,
            jQuery: true,
            requerejs: true,
            define: true
          }
        },
        files: {
          src: [
            "Gruntfile.js",
            "server/**/*.js",
            "src/**/*.js"
          ]
        }
      },
  		clean: {
  			options: {
  				force: true
  			},
  			backend: [
  				"public/js/backend"
  			]
  		},
  		copy:{
  			backend: {
  				files: [
  					{
  						src: "src/backend/index.html",
  						dest: "public/index.html"
  					},
  					{
  						expand: true,
  						cwd: "src/backend/",
  						src: ["**/*.js"],
  						dest: "public/js/backend/"
  					}
  				]
  			}
  		},
  		jst: {
  			backend: {
  				options: {
  					prettify: true,
  					processName: function(longPath){
                    return longPath.substr(22);
                	}
  				},
  				files: {
  					"public/js/backend/templates.js": [
                    	"src/backend/templates/**/*.html"
                	]
  				}
  			}
  		},
  		watch: {
  			scripts: {
            	files: [
                	"src/backend/**/*"
            	],
            	tasks: [
                	"default"
            	],
            	options: {
                	spawn: false,
                	debounceDelay: 50
            	}
        	}
  		}
  	});


  	// load tasks
  	grunt.loadNpmTasks("grunt-contrib-jst");
  	grunt.loadNpmTasks('grunt-contrib-clean');
  	grunt.loadNpmTasks("grunt-contrib-copy");
  	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask(
    "default", 
    [
        "jshint",
        "clean:backend",
        "jst:backend",
        "copy:backend"
    ]);

};