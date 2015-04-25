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
                        src:  "src/package-env.yml",
                        dest: "package-env.plist"
                    },
                    {
                        src:  "src/package-license.yml",
                        dest: "package-license.plist"
                    },
                    {
                        src:  "src/package-mask.yml",
                        dest: "package-mask.plist"
                    },
                    {
                        src:  "src/package-provided.yml",
                        dest: "package-provided.plist"
                    },
                    {
                        src:  "src/package-unmask.yml",
                        dest: "package-unmask.plist"
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
                    },
                    {
                        src:  "src/profile-bashrc.yml",
                        dest: "profile-bashrc.plist"
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

            "package-env": {
                src:  "package-env.plist",
                dest: "package-env.tmLanguage"
            },

            "package-license": {
                src:  "package-license.plist",
                dest: "package-license.tmLanguage"
            },

            "package-mask": {
                src:  "package-mask.plist",
                dest: "package-mask.tmLanguage"
            },

            "package-provided": {
                src:  "package-provided.plist",
                dest: "package-provided.tmLanguage"
            },

            "package-unmask": {
                src:  "package-unmask.plist",
                dest: "package-unmask.tmLanguage"
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
            },

            "profile-bashrc": {
                src:  "profile-bashrc.plist",
                dest: "profile-bashrc.tmLanguage"
            }
        },

        clean: {
            default: {
                src: [
                    "ebuild.tmLanguage",
                    "package-bashrc.tmLanguage",
                    "package-env.tmLanguage",
                    "package-license.tmLanguage",
                    "package-mask.tmLanguage",
                    "package-provided.tmLanguage",
                    "package-unmask.tmLanguage",
                    "package-use.tmLanguage",
                    "package-use-force.tmLanguage",
                    "package-use-mask.tmLanguage",
                    "packages.tmLanguage",
                    "profile-bashrc.tmLanguage"
                ]
            }
        }
    })

    grunt.loadNpmTasks("grunt-contrib-clean")
    grunt.loadNpmTasks("grunt-convert")
    grunt.loadNpmTasks("grunt-rename")
    grunt.registerTask("default", ["convert", "rename"])
}
