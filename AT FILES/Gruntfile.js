grunt.loadNpmTasks('grunt-git');
grunt.initConfig({
  gitcommit: {
    your_target: {
      options: {
        branch: 'master'
      },
      files: {
          src: ["index.html"] 
      }
    }
  },
})