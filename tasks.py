#
# @copyright 2008-2015 Krizalys. All rights reserved.
# @link      http://www.krizalys.com/
#

#
# IMPORTANT: This script requires Python 3.4 or newer.
#

from invoke import task
import plistlib
import yaml

#
# The build task converts all YAML files from the src directory into tmLanguage
# files into the root directory.
#
# NOTE: Although this does not matter from SublimeText, Python does not
# guarantee that the order of the XML elements in the tmLanguage files will be
# the same upon each generation. This may affect the list of changed files while
# committing to the Git repository and should be handled wisely.
#
@task
def build():
    files = {
        "ebuild.tmLanguage":                  "ebuild.yml",
        "package-accept-restrict.tmLanguage": "package-accept-restrict.yml",
        "package-bashrc.tmLanguage":          "package-bashrc.yml",
        "package-env.tmLanguage":             "package-env.yml",
        "package-keywords.tmLanguage":        "package-keywords.yml",
        "package-license.tmLanguage":         "package-license.yml",
        "package-mask.tmLanguage":            "package-mask.yml",
        "package-properties.tmLanguage":      "package-properties.yml",
        "package-provided.tmLanguage":        "package-provided.yml",
        "package-unmask.tmLanguage":          "package-unmask.yml",
        "package-use.tmLanguage":             "package-use.yml",
        "package-use-force.tmLanguage":       "package-use-force.yml",
        "package-use-mask.tmLanguage":        "package-use-mask.yml",
        "packages.tmLanguage":                "packages.yml",
        "profile-bashrc.tmLanguage":          "profile-bashrc.yml",
        "use.tmLanguage":                     "use.yml"
    }

    for dest, src in files.items():
        src    = open("src/" + src)
        dest   = open(dest, "wb")
        syntax = yaml.safe_load(src)
        plistlib.dump(syntax, dest, sort_keys = False)
        dest.close()
        src.close()
