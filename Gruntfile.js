module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'srcs/',
                src: ['*.{png,jpg,gif}'],
                dest: 'results/'
                }]
            }
        },
    responsive_images: {
            dev: {
                options: {
                    engine: 'gm',
                    newFilesOnly: true,
                    sizes: [
                        {
                            name: 'small',
                            width: 320,
                        },
                        // {
                        //     name: 'mid',
                        //     width: 640,
                        // },
                        {
                            name: 'big',
                            width: 1024,
                        }
                    ]
                },
                files: [
                    // Partners, Downloads, Project, Publication 제외
                    {
                        // Primorse
                        expand:true,
                        src: ['*.{jpg,gif,png}'],
                        cwd: 'src/assets/Projects/2014_Primrose/img/original/', 
                        dest: 'src/assets/Projects/2014_Primrose/img/', 
                    },
                    {
                        // SoundCloud 
                        expand:true,
                        src: ['*.{jpg,gif,png}'],
                        cwd: 'src/assets/Projects/2014_SoundCloudProject/img/original/', 
                        dest: 'src/assets/Projects/2014_SoundCloudProject/img/', 
                    },
                    // {
                    //     // Lifes
                    //     expand:true,
                    //     src: ['*.{jpg,gif,png}'],
                    //     cwd: 'src/assets/Contents/Lifes/img/', 
                    //     dest: 'src/assets/Contents/Lifes/smallimg/'
                    // },
                ]
            }
        
        },
        
    });
    
    grunt.registerTask('default', [
    ]);
    grunt.registerTask('res', [
    'responsive_images'
    ]);
};

