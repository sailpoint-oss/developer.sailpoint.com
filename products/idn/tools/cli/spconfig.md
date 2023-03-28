---
id: cli-spconfig
title: SP Config
pagination_label: CLI-SPConfig
sidebar_label: SPConfig
sidebar_position: 5
sidebar_class_name: cli-spconfig
keywords: ['cli', 'spconfig']
description: Learn how to use the CLI to SPConfig.
slug: /tools/cli/spconfig
tags: ['CLI']
---

## SPConfig

Learn how to use the CLI to import and export configurations.

You can use the [SP Config APIs](/idn/api/beta/sp-config) to import configurations into IDN and export them out.

With the `spconfig` command, you can access the same functionality.

## Commands

To perform SPConfig operations, you can run these commands:

- [SPConfig](#spconfig)
- [Commands](#commands)
  - [Download](#download)
    - [Flags](#flags)
  - [Import](#import)
    - [Flags](#flags-1)
  - [Export](#export)
    - [Flags](#flags-2)
  - [Status](#status)
    - [Flags](#flags-3)
  - [Template](#template)
    - [Flags](#flags-4)

### Download

You can use the `download` command to download import and export job results from IDN. The `download` command is specified differently for **Linux/Mac** and **Windows**, respectively.

To download import and export job results from IDN on **Linux/Mac**, run this command:

```shell
sail spconfig download \
  --export {export job ID} \
  --export {export job ID}
```

To download import and export job results from IDN on **Windows**, run this command:

```shell
sail spconfig download \
  --export {export job ID} \
  --import {import job ID}
```

#### Flags

You can add these flags to the `download` command:

- `import`: Add this flag to specify the import job ID to download.
- `export`: Add this flag to specify the export job ID to download.
- `folderPath`: Add this flag to specify the folder path to save the download in. If the directory doesn't exist, the CLI creates it. The default folder path is the current working directory.

### Import

To begin an import task in IDN, run this command:

```shell
sail spconfig import \
  --filePath path/to/the/import/file
```

#### Flags

You can add these flags to the `import` command:

- `folderPath`: Add this flag to specify the folder path to save the import job in. If the directory doesn't exist, the CLI creates it. The default folder path is the current working directory.

### Export

To begin an export task in IDN, run this command:

```shell
sail spconfig export \
  --include {types to include} \
  --exclude {types to exclude} \
  --description "optional description for the export job"
```

#### Flags

You can add these flags to the `export` command:

- `include`: Add this flag to specify the types to include in the export job.
- `exclude`: Add this flag to specify the types to exclude from the export job.
- `description`: Add this flag to provide an optional description for the export job.
- `folderPath`: Use this flag to specify the folder path you want to save the export job in. If the directory doesn't exist, the CLI creates it. The default folder path is the current working directory.
- `wait`: Use this boolean to specify whether the CLI should wait for the export job to finish before downloading the results. This flag is false by default. Setting it to true sets the CLI to wait until the job finishes before downloading the results.

### Status

To check the status of import and export jobs in IDN, run this command:

```shell
sail spconfig status --import {import job ID to check} --export {export job ID to check}
```

#### Flags

You can add these flags to the `status` command:

- `import`: Add this flag to specify a list of import job IDs to check the status of. This examples shows how
- `export`: Add this flag to specify a list of export job IDs to check the status of.

### Template

To begin exporting a template from IDN, run this command:

```shell
sail spconfig template
```

#### Flags

You can add these flags to the `template` command:

- `outputTypes`: Use this flag to specify the output data type for the template. This example shows how running this command would generate the template in a `json` output. Currently only `csv` and `json` are supported.
- `folderPath`: Use this flag to specify the folder path you want to save the template in. If the directory doesn't exist, the CLI creates it. The default folder path is the current working directory.
- `wait`: Use this boolean to specify whether the CLI should wait for the export job to finish before downloading the results. This flag is false by default. Setting it to true sets the CLI to wait until the job finishes before downloading the results.
