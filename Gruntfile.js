module.exports = function(grunt) {

	 // Project configuration.
  	grunt.initConfig({
  		pkg: grunt.file.readJSON("package.json"),
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

  // Default task(s).
  grunt.registerTask(
    "default", 
    [
        "clean:backend",
        "jst:backend",
        "copy:backend"
    ]);

};