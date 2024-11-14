---
id: cli-jsonpath
title: JSONpath
pagination_label: CLI JSONpath
sidebar_label: JSONpath
sidebar_position: 10
sidebar_class_name: cli-jsonpath
keywords: ['cli', 'cli jsonpath', 'jsonpath']
description: Learn how to use the CLI to evaluate JSONpath queries in this guide.
slug: /tools/cli/jsonpath
tags: ['CLI']
---

Learn how to use the SailPoint CLI to evaluate JSONpath queries in this guide.

JSONpath is a language for querying data in a JSON object.

The `jsonpath` command makes it easy to evaluate JSONpath queries from within the SailPoint CLI. At this time, the `jsonpath` command only supports the workflows JSONpath operators [documented here](https://github.com/celene-isip-sp/jsonslice?tab=readme-ov-file#expressions).

- [evaluate](#evaluate-jsonpath)
  - [File path](#file-path)
  - [Path](#path)

  ## Evaluate JSONpath

  Run this command to evaluate a JSONpath query:

  ```shell
  sail jsonpath eval -f /path/to/object.json -p "$.path"
  ```

  ### File path

  The first flag you must append when you are evaluating JSONpath queries is the `--file` (`-f` for short) flag. This flag specifies the file path for a JSON object that you want to use as a test for your query.

  Here is what the command looks like with the `-f` flag:

  ```shell
  sail jsonpath eval -f /path/to/object.json
  ```

  ### Path

  The second flag you must append when you are evaluating JSONpath queries is the `--path` (`-p` for short) flag. This flag specifies the path you want to evaluate against the JSON object.

  Here is what the command looks like with the `-p` flag:

  ```shell
  sail jsonpath eval -f /path/to/object.json -p "$.path"
  ```

  This will show the result of the path expression in the terminal.