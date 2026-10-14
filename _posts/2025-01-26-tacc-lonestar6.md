---
layout: post
title: Guide to TACC
date: 2025-01-26 16:16:00-0600
description: a note for using Texas Advanced Computing Center (TACC)
categories:
  - tech
tags:
  - HPC
  - Linux

---

## File systems and managing file on TACC

Lonestart6's startup mechanimsms defines corresponding account-level enviornment variable `$HOME`, `$SCRATCH` and `$WORK` , each store the paths to the chorresponding directories you own on each file system

## Use `rsync` to syncrinize files

I am using both Lonestart6 and Stampede3 in TACC based on the quoting status. So I make modifications to same script in different locations ocissnally. Also, since the `$HOME` directory in TACC are backedup but with much small storage, it is usually used to keep script and actually job are runned under work. 