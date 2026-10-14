---
layout: post
title: Guide to TACC
date: 2025-01-26 16:16:00-0600
description: A note on using the Texas Advanced Computing Center (TACC)
categories:
  - tech
tags:
  - HPC
  - Linux

---

## File systems and managing files on TACC

Lonestar6's startup mechanisms define the corresponding account-level environment variables `$HOME`, `$SCRATCH` and `$WORK`, each storing the path to the corresponding directory you own on each file system.

## Use `rsync` to synchronize files

I am using both Lonestar6 and Stampede3 in TACC based on the quota status, so I occasionally modify the same script in different locations. Also, since the `$HOME` directory on TACC is backed up but has much smaller storage, it is usually used to keep scripts, while actual jobs are run under `$WORK`.