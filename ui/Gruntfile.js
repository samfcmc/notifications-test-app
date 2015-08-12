module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        srcPath: 'src/main/webapp',
        targetPath: '<%= grunt.config.get("targetPath") %>',
        scriptsPath: '<%= srcPath %>/scripts',
        index: 'index.html',
        indexPath: '<%= srcPath %>/<%= index %>',
        styleMain: 'style',
        styleSrcPath: '<%= srcPath %>/styles',
        lessMainPath: '<%= styleSrcPath %>/<%= styleMain %>.less',
        styleTargetPath: '<%= targetPath %>/styles/<%= styleMain %>.css',
        targetJSPath: '<%= targetPath %>/js',
        mainScript: 'main.js',
        mainScriptPath: '<%= scriptsPath %>/<%= mainScript %>',
        mainScriptTargetPath: '<%= targetJSPath %>/<%= mainScript %>',
        vendorsScript: 'vendors.js',
        vendorsScriptPath: '<%= scriptsPath %>/<%= vendorsScript %>',
        vendorsScriptTargetPath: '<%= targetJSPath %>/<%= vendorsScript %>',
        debug: '<%= grunt.config.get("debug") %>',
        buildPath: 'build',
        distPath: 'dist',
        bowerComponents: 'bower_components',
        bowerTargetPath: '<%= targetPath %>/<%= bowerComponents %>',
        bowerBuildPath: '<%= srcPath %>/<%= bowerComponents %>',
        config: {
            dev: {
                options: {
                    variables: {
                        debug: true,
                        targetPath: '<%= buildPath %>',
                        livereload: '<script src="//localhost:35729/livereload.js"></script>'
                    }
                }
            },
            dist: {
                options: {
                    variables: {
                        debug: false,
                        targetPath: '<%= distPath %>',
                        livereload: ''
                    }
                }
            }
        },
        replace: {
            build: {
                options: {
                    variables: {
                        livereload: '<%= livereload %>'
                    }
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= indexPath %>'],
                        dest: '<%= targetPath %>'
                    }
                ]
            }
        },
        bower: {
            target: {
                options: {
                    targetDir: '<%= bowerTargetPath %>',
                }
            }
        },
        browserify: {
            vendors: {
                src: ['<%= vendorsScriptPath %>'],
                dest: '<%= vendorsScriptTargetPath %>',
                options: {
                    transform: ['debowerify']
                }
            },
            main: {
                src: ['<%= mainScriptPath %>'],
                dest: '<%= mainScriptTargetPath %>',
                options: {
                    transform: ['reactify'],
                    browserifyOptions: {
                        debug: '<%= debug %>'
                    }
                }
            }
        },
        less: {
            style: {
                files: {
                    '<%= bowerBuildPath %>/bootstrap/bootstrap.css': '<%= bowerComponents %>/bootstrap/less/bootstrap.less',
                    '<%= styleTargetPath %>': '<%= lessMainPath %>'
                }
            }
        },
        connect: {
            server: {
                options: {
                    base: '<%= targetPath %>',
                    port: 9001,
                    hostname: 'localhost',
                    middleware: function(connect, options, defaultMiddleware) {
                        var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;
                        return [proxySnippet].concat(defaultMiddleware);
                    }
                },
                proxies: {
                    context: ['/api', '/login', '/logout', '/css/login.css', '/bennu-portal'],
                    host: 'localhost',
                    port: 8081
                }
            }
        },
        clean: {
            build: {
                src: ['<%= bowerComponents %>',
                    'bowerBuildPath',
                    '<%= buildPath %>',
                    '<%= distPath %>']
            }
        },
        copy: {
            fonts: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= bowerComponents %>/bootstrap',
                        src: ['fonts/**/*'],
                        dest: '<%= targetPath %>'
                    }
                ]
            }
        },
        uglify: {
            vendors: {
                files: {
                    '<%= vendorsScriptTargetPath %>': ['<%= vendorsScriptTargetPath %>']
                }
            },
            main: {
                files: {
                    '<%= mainScriptTargetPath %>': ['<%= mainScriptTargetPath %>']
                }
            }
        },
        watch: {
            main: {
                files: ['<%= mainScriptPath %>', '<%= scriptsPath %>/**/*.*'],
                tasks: ['config:dev', 'browserify:main'],
                options: {
                    livereload: true
                }
            },
            vendors: {
                files: ['<%= vendorsScriptPath %>'],
                tasks: ['config:dev', 'browserify:vendors'],
                options: {
                    livereload: true
                }
            },
            index: {
                files: ['<%= indexPath %>'],
                tasks: ['config:dev', 'replace'],
                options: {
                    livereload: true
                }
            },
            styles: {
                files: ['<%= styleSrcPath %>/**/*.less'],
                tasks: ['config:dev', 'less'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('common', ['bower', 'browserify', 'less', 'copy', 'replace']);
    grunt.registerTask('server', ['configureProxies:server', 'connect:server']);
    grunt.registerTask('dev', ['config:dev', 'common', 'server', 'watch']);
    grunt.registerTask('dist', ['config:dist', 'common', 'uglify']);
    grunt.registerTask('default', ['dev']);
};
