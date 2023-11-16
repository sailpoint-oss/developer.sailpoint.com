---
id: cli-sanitize
title: Sanitize
pagination_label: CLI-Sanitize
sidebar_label: Sanitize
sidebar_position: 2
sidebar_class_name: cli
keywords: ['cli', 'sanitize']
description: Learn how to use the CLI to sanitize your HAR files in this guide.
slug: /tools/cli/sanitize
tags: ['CLI']
---


## Sanitize

Learn how to use the CLI to sanitize your HAR files in this guide.

In IdentityNow (IDN), you occasionally need to troubleshoot issues, and often some of the most helpful data can be a HAR file collected of your browsers api calls made while replicating the issue.

The problem lies in the amount of information, specifically sensitive information that that file contains, due to the nature of what it is capturing.  This is where the CLI comes in.  The CLI can be used to sanitize the HAR file, removing sensitive information, while still leaving the file in a useful state for support to troubleshoot the issue.

The existing support guide for collecting and sanitizing the HAR file [can be found here](https://support.sailpoint.com/csm?id=kb_article_view&sysparm_article=KB0011711#_gl=1*17esz5f*_gcl_au*MTczOTU0NDU4NC4xNjkxNjc5NzY2)

- [Sanitize](#sanitize)
  - [Functionality](#functionality)
  - [Command](#command)

### Functionality

The Sanitize command sanitizes a HAR file of sensitive data.
Specifically it removes access tokens and origin urls similar to the examples below:

Access Token
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiI1OGViMDZhNC1kY2Q3LTRlOTYtOGZhYy1jY2EyYWZjMDNlNjEiLCJpbnRlcm5hbCI6dHJ1ZSwicG9kIjoiY29vayIsIm9yZyI6ImV4YW1wbGUiLCJpZGVudGl0eV9pZCI6ImZmODA4MTgxNTVmZThjMDgwMTU1ZmU4ZDkyNWIwMzE2IiwidXNlcl9uYW1lIjoic2xwdC5zZXJ2aWNlcyIsInN0cm9uZ19hdXRoIjp0cnVlLCJhdXRob3JpdGllcyI6WyJPUkdfQURNSU4iXSwiY2xpZW50X2lkIjoibktCUE93akpIOExYU2pJbCIsInN0cm9uZ19hdXRoX3N1cHBvcnRlZCI6dHJ1ZSwidXNlcl9pZCI6IjU5NTgyNiIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE1NjU4ODgzMTksImp0aSI6ImM5OGQxMjM2LTQ1MTMtNGM4OS1hMGQwLTBjYjlmMzI3NmI1NiJ9.SAY4ZQkXGi2cY_qz57Ah9_zDq4-bnF-oDJKotXa-LCY
```

Origin URLs
```json
{
    "name": "origin",
    "value": "https://example.identitynow.com"
}
```
### Command

To use the CLI to sanitize HAR files, you can use this command:

```shell
sail sanitize ./path/to/har/file.har
```

or you can sanitize multiple files at once:

```shell
sail sanitize ./path/to/har/file1.har ./path/to/har/file2.har ./path/to/har/file3.har
```

