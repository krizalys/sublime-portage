#
# @copyright 2008-2019 Krizalys. All rights reserved.
# @link      http://www.krizalys.com/
#

# See:
# $ man 5 ebuild

sys-apps/sed bashrc
sys-libs/zlib bashrc
net-misc/dhcp bashrc
sys-apps/sed-4.0.5 bashrc
sys-libs/zlib-1.1.4-r1 bashrc
net-misc/dhcp-3.0_p2 bashrc
>media-libs/libgd-1.6 bashrc
>=media-libs/libgd-1.6 bashrc
=media-libs/libgd-1.6 bashrc
<=media-libs/libgd-1.6 bashrc
<media-libs/libgd-1.6 bashrc

# See:
# $ man portage

# By setting INSTALL_MASK in bashrc/nostandardconf.conf, we can avoid installing
# the standard configuration and enable another package to install it.
net-misc/dhcp nostardardconf.conf
