#
# @copyright 2008-2015 Krizalys. All rights reserved.
# @link      http://www.krizalys.com/
#

#
# IMPORTANT: This file requires Python 3.4 or newer to be processed.
#

from invoke import task
import plistlib
import yaml

@task
def convert():
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
        print(src)
        src    = open("src/" + src)
        dest   = open(dest, "wb")
        syntax = yaml.safe_load(src)
        plistlib.dump(syntax, dest, sort_keys = False)
        dest.close()
        src.close()

    return
