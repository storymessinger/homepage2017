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
                    {
                        // Catshelter 
                        expand:true,
                        src: ['*.{jpg,gif,png}'],
                        cwd: 'src/assets/Projects/2015_CatShelter/img/original/', 
                        dest: 'src/assets/Projects/2015_CatShelter/img/', 
                    },
                    {
                        // Banban
                        expand:true,
                        src: ['*.{jpg,gif,png}'],
                        cwd: 'src/assets/Projects/2015_Banban/img/original/', 
                        dest: 'src/assets/Projects/2015_Banban/img/', 
                    },
                    {
                        // Consumer to creator 
                        expand:true,
                        src: ['*.{jpg,gif,png}'],
                        cwd: 'src/assets/Projects/2016_ConsumerToCreator/img/original/', 
                        dest: 'src/assets/Projects/2016_ConsumerToCreator/img/', 
                    },
                    {
                        // First Snow
                        expand:true,
                        src: ['*.{jpg,gif,png}'],
                        cwd: 'src/assets/Projects/2014_FirstSnow/img/original/', 
                        dest: 'src/assets/Projects/2014_FirstSnow/img/', 
                    },
                    {
                        // train 
                        expand:true,
                        src: ['*.{jpg,gif,png}'],
                        cwd: 'src/assets/Projects/2016_MusicalTrain/img/original/', 
                        dest: 'src/assets/Projects/2016_MusicalTrain/img/', 
                    },
                    {
                        // startupkaist
                        expand:true,
                        src: ['*.{jpg,gif,png}'],
                        cwd: 'src/assets/Projects/2016_StartupKaistLogo/img/original/', 
                        dest: 'src/assets/Projects/2016_StartupKaistLogo/img/', 
                    },
                    {
                        // iRobo 
                        expand:true,
                        src: ['*.{jpg,gif,png}'],
                        cwd: 'src/assets/Projects/2015_iRoboIdentity/img/original/', 
                        dest: 'src/assets/Projects/2015_iRoboIdentity/img/', 
                    },
                    {
                        // 2016_ChurrosPrinter
                        expand:true,
                        src: ['*.{jpg,gif,png}'],
                        cwd: 'src/assets/Projects/2016_ChurrosPrinter/img/original/', 
                        dest: 'src/assets/Projects/2016_ChurrosPrinter/img/', 
                    },
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

