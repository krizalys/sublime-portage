Sublime Portage
===============

Sublime Portage is a [Sublime Text][1] package to support the [Portage][2]
package manager.

Installation
------------

### Installation through Package Control

1. Make sure you installed [Package Control][3].
2. Choose *Install Package* from the Command Palette (`Ctrl+Shift+P` on Windows
& Linux, `⇧⌘P` on Mac OS X).
3. Select *Portage* and press `Enter`.

Additionally, with [auto_upgrade][4] enabled, Package Control will keep all
installed packages up-to-date.

### Manual installation

1. Download any `.tmTheme` file from this repository.
2. Choose *Browse Packages* from the Command Palette (`Ctrl+Shift+P` on Windows
& Linux, `⇧⌘P` on Mac OS X).
3. Copy the `.tmTheme` file(s) to the `Packages` directory.

Support
-------

Here is the current support status from the list of files supported by Portage.

### /etc/portage/make.profile/ or /etc/make.profile/

- [ ] site-specific overrides go in /etc/portage/profile/
- [ ] deprecated
- [ ] eapi
- [ ] make.defaults
- [x] packages
- [ ] packages.build
- [x] package.accept_keywords
- [x] package.bashrc
- [x] package.keywords
- [x] package.mask
- [x] package.provided
- [x] package.unmask
- [x] package.use
- [x] package.use.force
- [x] package.use.mask
- [x] package.use.stable.force
- [x] package.use.stable.mask
- [ ] parent
- [x] profile.bashrc
- [ ] soname.provided
- [ ] use.force
- [ ] use.mask
- [ ] use.stable.mask
- [ ] use.stable.force
- [ ] virtuals

### /etc/portage/

- [ ] bashrc
- [ ] categories
- [ ] color.map
- [ ] license_groups
- [ ] make.conf(5)
- [ ] mirrors
- [ ] modules
- [x] package.accept_keywords
- [x] package.accept_restrict
- [x] package.env
- [x] package.keywords
- [x] package.license
- [x] package.mask
- [x] package.properties
- [x] package.unmask
- [x] package.use
- [ ] postsync.d
- [ ] repo.postsync.d
- [ ] repos.conf
- [ ] sets.conf

### /etc/portage/env/

- [ ] package-specific bashrc files

### /etc/portage/profile/

- [ ] site-specific overrides of /etc/portage/make.profile/

### /etc/portage/sets/

- [ ] user-defined package sets

### /usr/portage/

- [ ] sets.conf

### /usr/portage/metadata/

- [ ] layout.conf
- [ ] pkg_desc_index

### /usr/portage/profiles/

- [ ] arch.list
- [ ] categories
- [ ] info_pkgs
- [ ] info_vars
- [ ] license_groups
- [ ] make.defaults
- [x] package.mask
- [x] package.unmask
- [x] package.use
- [x] package.use.force
- [x] package.use.mask
- [x] package.use.stable.force
- [x] package.use.stable.mask
- [ ] profiles.desc
- [ ] repo_name
- [ ] thirdpartymirrors
- [ ] use.desc
- [ ] use.force
- [ ] use.local.desc
- [ ] use.mask
- [ ] use.stable.mask
- [ ] use.stable.force

### /usr/share/portage/config/

- [ ] make.globals
- [ ] repos.conf
- [ ] sets

### /var/cache/edb/

- [ ] misc internal cache files

### /var/db/pkg/

- [ ] database to track installed packages

### /var/lib/portage/

- [ ] config
- [ ] world
- [ ] world_sets

Credits
-------

The Sublime Portage package is developed and maintained by Christophe Vidal.

[1]: http://www.sublimetext.com/
[2]: https://wiki.gentoo.org/wiki/Project:Portage
[3]: https://packagecontrol.io/
[4]: https://packagecontrol.io/docs/settings
