---
layout: posts
title: How to uninstall pkg in MacOS
date: 2024-08-23 19:29:00-0600
description: clean unused pkgs in MacOS
categories:
- tech
tags:
- Mac
---
# Remove pkg manually
1. Check the package ID using `$pkgutil --pkgs`
```bash
$ pkgutil --pkgs
...
com.oll.pkg.CCRuntime
com.AntiCC.RiD
com.hciso.AntiCC
...
```

2. Get the location of the pkg want to delete using `$pkgutil --pkg-info <pkg id>`
```bash
$ pkgutil --pkg-info com.oll.pkg.CCRuntime
package-id: com.oll.pkg.CCRuntime
version: 2023.1
volume: /
location: 
install-time: 1724439281
```
3. Delete `.bom` and all the files in the pkg location
To delete the `.bom` files
```bash
$ lsbom -fls  /private/var/db/receipts/com.oll.pkg.CCRuntime 
```
the `.bom` files of all the pkg installed are located at `/private/var/db/receipts`. The install history are recorded at `/Library/Receipts/InstallHistory.plist`.
Then delete all the files in the pkg location
```bash
$ lsbom -fls  /private/var/db/receipts/com.oll.pkg.CCRuntime | (cd /; sudo xargs rm)
$ lsbom -fls  /private/var/db/receipts/com.oll.pkg.CCRuntime | (cd /; sudo xargs rm -r)
```
4. Remove the pkg information at the end
```bash
$ sudo pkgutil --forget com.oll.pkg.CCRuntime
```
# Use UninstallPKG
UninstallPKG is an application that allows you to completely remove `.pkg` and all their installed contents.
Install from homebrew
```bash
brew install --cask uninstallpkg
```
or from their [website](https://www.corecode.io/uninstallpkg/). 

[1]: https://kyle.ai/blog/6175.html