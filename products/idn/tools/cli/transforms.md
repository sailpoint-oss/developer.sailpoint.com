---
id: cli-transforms
title: CLI Transforms
pagination_label: CLI Transforms
sidebar_label: Transforms
sidebar_position: 6
sidebar_class_name: cli-transforms
keywords: ['cli', 'cli transforms', 'transforms']
description: Learn about the CLI commands you can use to create, manage, and test transforms in this guide. 
slug: /tools/cli/transforms
tags: ['CLI']
---

# Transforms

Learn about the CLI commands you can use to create, manage, and test transforms in this guide. 

In IdentityNow (IDN), you can use transforms to manipulate attribute data without writing any code. For more information about transforms, refer to [Transforms](/idn/docs/transforms). 

With the `transforms` command, it's it easy to create, manage, and test transforms in the CLI. 

## Commands

To create, manage, and test transforms with the CLI, you can use these commands: 

- [Transforms](#transforms)
  - [Commands](#commands)
  - [List transforms](#list-transforms)
  - [Download transforms](#download-transforms)
  - [Create transform](#create-transform)
  - [Update transform](#update-transform)
  - [Delete transform](#delete-transform)

## List transforms

To get a list of the transforms available in your tenant, run this command: 

```shell
sail transform list
```

This command produces a table of available transforms. 

![Transform List](./assets/img/vhs/transform-list.gif)

## Download transforms

To download all the transforms in your tenant and save them as `json` files on your computer, run the following command. By default, this command will save the files in the current working directory. Use the `-d` flag to specify a path to an output directory.

```shell
sail transform download -d transform_files
```

By default, this command will save the files in the current working directory. Use the `-d` flag to specify a path to an output directory.

![Transform Download](./assets/img/vhs/transform-download.gif)

This command will overwrite any existing files with the same name, so be careful when you run this in a directory that has transforms that have been modified but not yet saved. 

## Create transform

To create a new transform from a `json` file, run the following command. Use the `-f` flag to specify the path to the `json` file.

```shell
sail transform create -f transform.json
```

## Update transform

To update a transform from a `json` file, run the following command. Use the `-f` flag to specify the path to the `json` file.

```shell
sail transform update -f transform.json
```

A common workflow is to first download the transforms, then make edits to the transform file, and then use the update command to save those edits in IDN.

## Delete transform

To delete a transform, run this command:

```shell
sail transform delete <transform-id>
```

To delete multiple transforms, use this syntax:

```shell
sail transform delete <transform-id> <transform-id> <transform-id>
```

You can use this command in conjunction with the `ls` command to find the ID of the transform you want to delete. 

This is an example of how you can find a transform ID and delete it: 

```shell
sail transform list
+--------------------------------------+--------------------------+
|                  ID                  |           NAME           |
+--------------------------------------+--------------------------+
| 03d5187b-ab96-402c-b5a1-40b74285d77a | WIFI Group               |
| 06d589cf-4d7d-4b40-8617-c221092ceb2c | Remove Diacritical Marks |
| 1f3a97cf-e58b-4fad-b2f2-0dcc19fb1627 | NETID                    |
+--------------------------------------+--------------------------+
sail transform delete 03d5187b-ab96-402c-b5a1-40b74285d77a
```
