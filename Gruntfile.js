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
                        src:  "src/package-bashrc.yml",
                        dest: "package-bashrc.plist"
                    },
                    {
                        src:  "src/package-provided.yml",
                        dest: "package-provided.plist"
                    },
                    {
                        src:  "src/package-use.yml",
                        dest: "package-use.plist"
                    },
                    {
                        src:  "src/package-use-force.yml",
                        dest: "package-use-force.plist"
                    },
                    {
                        src:  "src/package-use-mask.yml",
                        dest: "package-use-mask.plist"
                    },
                    {
                        src:  "src/packages.yml",
                        dest: "packages.plist"
                    }
                ]
            }
        },

        rename: {
            ebuild: {
                src:  "ebuild.plist",
                dest: "ebuild.tmLanguage"
            },

            "package-bashrc": {
                src:  "package-bashrc.plist",
                dest: "package-bashrc.tmLanguage"
            },

            "package-provided": {
                src:  "package-provided.plist",
                dest: "package-provided.tmLanguage"
            },

            "package-use": {
                src:  "package-use.plist",
                dest: "package-use.tmLanguage"
            },

            "package-use-force": {
                src:  "package-use-force.plist",
                dest: "package-use-force.tmLanguage"
            },

            "package-use-mask": {
                src:  "package-use-mask.plist",
                dest: "package-use-mask.tmLanguage"
            },

            packages: {
                src:  "packages.plist",
                dest: "packages.tmLanguage"
            }
        },

        clean: {
            default: {
                src: [
                    "ebuild.tmLanguage",
                    "package-bashrc.tmLanguage",
                    "package-provided.tmLanguage",
                    "package-use.tmLanguage",
                    "package-use-force.tmLanguage",
                    "package-use-mask.tmLanguage",
                    "packages.tmLanguage"
                ]
            }
        }
    })

    grunt.loadNpmTasks("grunt-contrib-clean")
    grunt.loadNpmTasks("grunt-convert")
    grunt.loadNpmTasks("grunt-rename")
    grunt.registerTask("default", ["convert", "rename"])
}
