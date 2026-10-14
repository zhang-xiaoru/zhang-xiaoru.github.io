---
layout: post
title: Make shortcut for directory in zsh
date: 2024-11-11 10:29:00-0600
description: Ways to make shortcuts to working directories
tags:
  - Terminal
  - Mac
categories:
  - tech

---

It is sometimes useful to create a shortcut to frequently used working directories so that I don't have to type the path every time I open it in the terminal.

## Using Aliases 

To make an alias persistent, one can add the alias to the zsh configuration file

1. Open configuration file `~/.zshrc`

2. Create an alias that `cd` to the desired directory

   ```shell
   alias workdir='cd /path/to/your/directory'
   # workdir is the name for your shortcut
   ```

3. Save the file and reload the configuration file

   ```shell
   source ~/.zshrc
   ```

4. Simply type `workdir` in the terminal to move to the desired directory

## Create variable for the path

This can also be done by creating a variable representing the path for the directory in shell configuration file.

1. Open zsh shell configuration file `~/.zshrc`

2. Create a variable for the path of the directory you wish to create a shortcut for

   ```shell
   workdir="/path/to/your/directory"
   # workdir is the name for your shortcut
   ```

3. Save the file and reload the configuration file

   ```shell
   source ~/.zshrc
   ```

4. Use the variable as follows

   ```shell
   cd $workdir
   ```

   