module.exports = function(grunt) {
    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        smushit:{
            destination:{
                src:'input',
                dest:'output'
            }
        }        
    });
    /* LOAD TASK */
    grunt.loadNpmTasks('grunt-smushit');
    /* RUN TASKS */
	grunt.registerTask('image',['smushit']);
}