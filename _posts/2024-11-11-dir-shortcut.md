---
layout: post
title: Make shortcut for directory in zsh
date: 2024-11-11 10:29:00-600
description: way to make shortcut to working directories
tags:
  - Terminal
  - Mac
categories:
  - tech

---

It is some time useful to create a short cut to the frequently used working directories so that I don't have to type the path every time when I try to open it in the terminal

# Using Aliases 

To make an alias that persistent, one can add the alias to the zsh configuration file

1. Open configuration file `~/.zshrc`

2. Add create an alias that `cd` to the desired directory

   ```shell
   alias workdir = 'cd /path to your directory'
   # workdir is the name for your short cut
   ```

3. Save the file and reload the configuration file

   ```shell
   source ~/.zshrc
   ```

4. Simply type `workdir` in the terminal to move to the desired directory

# Create variable for the path

This can also be done by create a varaible representing the path for the directory in shell configuration file.

1. Open zsh shell configuration file `~/.zshrc`

2. Create a vraible for the path of the directory you wish to create short path

   ```shell
   workdir="/path to your directory"
   # workdir is the name for your short cut
   ```

3. Save the file and reload the configuration file

   ```shell
   source ~/.zshrc
   ```

4. Use the varibale as follow

   ```shell
   cd $workdir
   ```

   