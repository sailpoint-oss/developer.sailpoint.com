---
id: cli-sanitize
title: Sanitize
pagination_label: CLI-Sanitize
sidebar_label: Sanitize
sidebar_position: 2
sidebar_class_name: cli
keywords: ['cli', 'sanitize']
description: Learn how to use the CLI to sanitize your har files in this guide.
slug: /tools/cli/sanitize
tags: ['CLI']
---


## Sanitize

Learn how to use the CLI to sanitize your har files in this guide.

In IdentityNow (IDN), you occasionally need to troubleshoot issues, and often some of the most helpful data can be a har file collected of your browsers api calls made while replicating the issue.

The problem lies in the amount of information, specifically sensitive information that that file contains, due to the nature of what it is capturing.  This is where the CLI comes in.  The CLI can be used to sanitize the har file, removing sensitive information, while still leaving the file in a useful state for support to troubleshoot the issue.

The existing support guide for collecting and sanitizing the har file [can be found here](https://support.sailpoint.com/csm?id=kb_article_view&sysparm_article=KB0011711#_gl=1*17esz5f*_gcl_au*MTczOTU0NDU4NC4xNjkxNjc5NzY2)

- [Sanitize](#sanitize)
  - [Command](#command)


### Command

To use the CLI to sanitize har files, you can use this command:

```shell
sail sanitize ./path/to/har/file.har
```

or you can sanitize multiple files at once:

```shell
sail sanitize ./path/to/har/file1.har ./path/to/har/file2.har ./path/to/har/file3.har
```

