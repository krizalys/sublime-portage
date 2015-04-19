/**
 * @copyright 2008-2015 Krizalys. All rights reserved.
 * @link      http://www.krizalys.com/
 */

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        convert: {
            options: {
                indent: 4
            },
            default: {
                // WARNING: All the destinations below MUST end by ".plist" for
                // the convert task to determine the conversion type to perform.
                files: [
                    {
                        src:  "src/ebuild.yml",
                        dest: "ebuild.plist"
                    },
                    {
                        src:  "src/package-use.yml",
                        dest: "package-use.plist"
                    },
                ]
            }
        },

        rename: {
            ebuild: {
                src:  "ebuild.plist",
                dest: "ebuild.tmLanguage"
            },

            portage: {
                src:  "package-use.plist",
                dest: "package-use.tmLanguage"
            }
        },

        copy: {
            default: {
                src:  "src/package-metadata.json",
                dest: "package-metadata.json"
            }
        },

        compress: {
            default: {
                options: {
                    mode:    "zip",
                    archive: "dist/Portage.sublime-package"
                },
                files: [
                    {src: "package-metadata.json"},
                    {src: "ebuild.tmLanguage"},
                    {src: "package-use.tmLanguage"}
                ]
            }
        },

        clean: {
            default: {
                src: [
                    "dist/Portage.sublime-package",
                    "ebuild.tmLanguage",
                    "package-use.tmLanguage",
                    "package-metadata.json"
                ]
            }
        }
    })

    grunt.loadNpmTasks("grunt-contrib-clean")
    grunt.loadNpmTasks("grunt-contrib-compress")
    grunt.loadNpmTasks("grunt-contrib-copy")
    grunt.loadNpmTasks("grunt-convert")
    grunt.loadNpmTasks("grunt-rename")
    grunt.registerTask("default", ["convert", "rename", "copy", "compress"])
}
