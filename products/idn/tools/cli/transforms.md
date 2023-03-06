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

In IdentityNow (IDN), you can use transforms to manipulate attribute data without writing any code. For more information about transforms, refer to [Transforms](https://developer.sailpoint.com/idn/docs/transforms). 

With the `transforms` command, it's it easy to create, manage, and test transforms in the CLI. 

## Commands

To create, manage, and test transforms with the CLI, you can use these commands: 

- [List transforms](#list-transforms)
- [Download transforms](#download-transforms)
- [Create transform](#create-transform)
- [Update transform](#update-transform)
- [Preview transform](#preview-transform)
  - [Explicit input](#explicit-input)
  - [Implicit input](#implicit-input)
  - [Output](#output)
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

## Preview transform

You can use the preview command to view a preview of the final output of a transform, using real account data from IDN. This command is safe to use when you are testing - it does not modify account or identity details in IDN. 

You can preview both transforms with [explicit input](#explicit-input) and transforms with [implicit input](#implicit-input) determined by their identity profile mappings in IDN. 

### Explicit input

Transforms that use "explicit input" have direct references in their specifications to the account attributes the transforms will apply to. These transforms require additional flags: 

- `-i` The identity profile ID to use for the preview. You can find the ID of the identity profile you are interested in by using the [Identity Profiles List](https://developer.sailpoint.com/idn/api/v3/list-identity-profiles) endpoint.
- `-a` The name of the identity attribute to apply the transform to. This depends on the identity profile's available attributes.

To preview an "explicit" input transform, run your command like this example: 

```shell
sail transform preview -i 2c91808876628b6201767b4bfea61dbb -a department -f transform.json
```

This example previews the output of a transform that will convert a specific identity's department name based on the details in the "transform.json" file. 

### Implicit input

Transforms that use "implicit input"* rely on the identity profile mapping in IDN to determine which account attribute to apply the transform to. These transforms require additional flags.

- `--implicit` This indicates that the transform uses implicit input. It does not specify an account attribute directly in the JSON.
- `-n <transform-name>` The name of the transform. The transform must be saved in IDN before you run this command.

To preview an "implicit" input transform, run your command like this example: 

```shell
sail transform preview -i 2c91808876628b6201767b4bfea61dbb -a department -n ToUpper --implicit
```

This example previews the output of a transform that will convert a specific identity's incoming lowercased department name to an uppercased name based on identity profile mapping in IDN. 

### Output

The preview command produces this output: 

```shell
Original value: adam.archer
Transformed value: ADAM.ARCHER
```

This is an example of a preview for a transform that is converting incoming lowercased account names into uppercased account names. 

The `Original value` is the value of the identity attribute at the time of the last identity refresh. It is not the value of the account attribute as it currently exists on the source. The value may already have been transformed if the identity profile mapping has a transform mapped to the attribute.

The `Transformed value` is a result of a change to the account attribute, according to the transform specification. This is what the identity attribute will become if you use this transform in the identity profile.

## Delete transform

To delete a transform, run this command:

```shell
sail transform delete <transform-id>
```

To delete multiple transforms, use this syntax:

```shell
sail transform delete <transform-id> <transform-id> <transform-id>
```

You can use this command in conjuction with the `ls` command to find the ID of the transform you want to delete. 

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