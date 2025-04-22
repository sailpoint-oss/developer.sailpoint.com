---
id: cli-reassign
title: Reassign
pagination_label: CLI Reassign
sidebar_label: Reassign
sidebar_position: 10
sidebar_class_name: cli-reassign
keywords: ['cli', 'cli reassign', 'reassign']
description: Learn how to use the CLI to reassign the owner on objects in Identity Security Cloud.
slug: /tools/cli/reassign
tags: ['CLI']
---

Learn how to use the SailPoint CLI to reassign the owner on objects in Identity Security Cloud.

The `reassign` command makes it easy to reassign ownership for the following supported object types:

* sources
* roles
* access profiles
* entitlements
* identity profiles
* governance groups
* workflows

## Reassign all object types

Use the following command to reassign all supported object types from one identity to another:

:::caution
It is recommended to use the `--dry-run` flag first to make sure the objects gathered are in fact the ones you wish to modify.
:::

```shell
sail reassign --from <old-owner-id> --to <new-owner-id> --dry-run
```

The command will gather the supported object types and then display a simple report to show you a summary of which objects will be reassigned.

You also have the ability to save the full report to a file in which you can view the objects in detail.

```text
Reassignment Preview
====================
From Owner:       2c918089796ba06c01798018af8d4161 (Tyler Mairose)
To Owner:         <new-owner-id> (Darrell Thobe)
Object Types:     source, role, access-profile, entitlement, identity-profile, governance-group, workflow
Dry Run:          true

Objects to Reassign:
---------------------
Object Type          Count
-----------          -----
role                 2
access-profile       0
entitlement          1
identity-profile     0
governance-group     1
workflow             1
source               6

Total:             11 objects

No changes have been made. Run the command without --dry-run to proceed.
Would you like to save the full report to a file (y/n):
```

### Reassign all object types without confirmation

Run the following command to reassign all supported object types from one identity to another without being asked for confirmation.

```shell
sail reassign --from <old-owner-id> --to <new-owner-id> --force
```

## Reassign specific object types

Use the following command to reassign only workflows and roles from one identity to another:

```shell
sail reassign --from <old-owner-id> --to <new-owner-id> --object-types workflow,role --dry-run
```

```text
Reassignment Preview
====================
From Owner:       2c918089796ba06c01798018af8d4161 (Tyler Mairose)
To Owner:         c701d93655854f1ea583622e7103e468 (Darrell Thobe)
Object Types:     workflow, role
Dry Run:          true

Objects to Reassign:
---------------------
Object Type          Count
-----------          -----
role                 2
workflow             1

Total:             3 objects

No changes have been made. Run the command without --dry-run to proceed.
```

Run the command without `--dry-run` to proceed with the reassignment:

```shell
sail reassign --from <old-owner-id> --to <new-owner-id> --object-types workflow,role
```

You will still be asked if you wish to save the full report and confirm that you wish to reassign the objects.

### Reassign specific object types without confirmation

Run the following command to reassign all workflows and roles from one identity to another without being asked for confirmation:

```shell
sail reassign --from <old-owner-id> --to <new-owner-id> --object-types workflow,role --force
```

## Reassign a single object

Use the reassign command with the `--object-id` flag, passing in the id of the object you wish to reassign. The command will determine its object type and generate the preview:

```shell
sail reassign --from <old-owner-id> --to <new-owner-id> --object-id <object-id>
```

To continue with the reassignment, call the command again without `--dry-run` and follow the prompts.

### Reassign a single object without confirmation

Run the following command to reassign a single object from one identity to another without being asked for confirmation:

```shell
sail reassign --from <old-owner-id> --to <new-owner-id> --object-id <object-id> --force
```
