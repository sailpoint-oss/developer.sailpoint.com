---
id: cli-connectors
title: Workflows
pagination_label: CLI Workflows
sidebar_label: Workflows
sidebar_position: 8
sidebar_class_name: cli-workflows
keywords: ['cli', 'cli workflows', 'workflows']
description: Learn how to use the CLI to create, manage, and test workflows in this guide.
slug: /tools/cli/workflow
tags: ['CLI']
---

# Workflows

Learn how to use the SailPoint CLI to create, manage, and test workflows in this guide. 

A workflow is a set of steps that are completed whenever a specific event occurs. Once that event triggers the workflow, the workflow performs the steps within IdentityNow. 

The `workflow` command makes it easy to create, manage, and test workflows from within the SailPoint CLI. To learn more about workflows, refer to [Workflows](https://documentation.sailpoint.com/saas/help/workflows/workflow-basics.html?h=workflow).

- [Workflows](#workflows)
  - [List workflows](#list-workflows)
  - [Get workflow](#get-workflow)
  - [Create workflow](#create-workflow)
    - [File path](#file-path)
    - [Folder path](#folder-path)
  - [Update workflow](#update-workflow)
    - [File path](#file-path-1)
    - [Folder path](#folder-path-1)
  - [Delete workflow](#delete-workflow) 
  - [Download workflow](#download-workflow)
    - [Folder](#folder)

  ## List workflows 

  To manage workflows in the SailPoint CLI, you need to know which workflows are available, and you may need to know their IDs. Run this command to list the workflows in your tenant: 

  ```shell
  sail workflow list 
  ```

  The CLI will return a table of the available workflows in your tenant, with their IDs. 

  This command uses the [List Workflows endpoint](https://developer.sailpoint.com/idn/api/beta/list-workflows). 

  ## Get workflow 

  Once you have a workflow's ID, you can see view all its details. Run this command to get a workflow by ID: 

  ```shell
  sail workflow get {workflow ID}
  ```

  Here is an example command: 

  ```shell
  sail workflow get f691874a-c5a5-426d-9dd4-33129072bafa
  ```

  The CLI will return the workflow, along with all its details. 

  This command uses the [Get workflow endpoint](https://developer.sailpoint.com/idn/api/beta/get-workflow).

  ## Create workflow 

  To create workflows with the SailPoint CLI, you must append the `--file` (`-f` for short) flag to provide a file path for the workflow. Run this command to create a workflow: 

  ```shell
  sail workflow create -f {file path}
  ```

  File paths are relative to the working directory, and only one workflow is allowed per file path. You can provide multiple workflows by specifying multiple file paths as arguments: 

  ```shell
  sail workflow create -f {file path} {file-path}
  ```

  Here is an example command: 

  ```shell
  sail workflow create -f ./workflow-file.json
  ```

  Once you create the workflow, it will be located in the file path you specified. 

  This command uses the [Create workflow endpoint](https://developer.sailpoint.com/idn/api/beta/create-workflow). 

  ### File path 

  The first flag you can append when you are creating workflows is required, the `--file` (`-f` for short) flag. This flag specifies the file path for the workflow you are going to create. 
  
  You can specify multiple file paths with one workflow create command. 

  ### Folder path

  The second flag you can append when you are creating workflows is the `--directory` (`-d` for short) flag. Appending the `-d` flag specifies a directory, or folder path, of workflows to contain the created workflow. 

  Here is what the command looks like with the `-d` flag: 

  ```shell
  sail workflow create -d {folder-path}
  ```

  You can also provide multiple workflow directories by specifying multiple folder paths as arguments: 

  ```shell
  sail workflow create -d {folder-path} {folder-path}
  ```

  ## Update workflow 

  To update workflows with the SailPoint CLI, you must append the `--file` (`-f` for short) flag to provide a file path for the updated workflow. Run this command to update a workflow: 

  ```shell
  sail workflow update -f {file-path} 
  ```

  You can also provide multiple workflows by specifying multiple file paths as arguments: 

  ```shell
  sail workflow update -f {file-path} {file-path}
  ```

  Here is an example command: 

  ```shell
  sail workflow create -f ./workflow-file.json
  ```

  The updated workflow will be located in the file path you specified. 

  This command uses the [Update workflow endpoint](https://developer.sailpoint.com/idn/api/beta/update-workflow).

  ### File path 

  The first flag you can append when you are creating workflows is required, the `--file` (`-f` for short) flag. This flag specifies the file path for the workflow you are going to update. 
  
  You can specify multiple file paths with one workflow update command. 

  ### Folder path 

  The second flag you can append when you are updating workflows is the `--directory` (`-d` for short) flag. Appending the `-d` flag specifies a directory, or folder path, of workflows to contain the updated workflow. 

  Here is what the command looks like with the `-d` flag: 

  ```shell
  sail workflow update -d {folder-path}
  ```

  You can also provide multiple workflow directories by specifying multiple folder paths as arguments: 

  ```shell
  sail workflow update -d {folder-path} {folder-path}
  ```

  ## Delete workflow 

  To delete workflows with the SailPoint CLI, you must specify the ID of the workflow you want to delete. Run this command to delete a workflow: 

  ```shell
  sail workflow delete id1
  ```

  You can also delete multiple workflows: 

  ```shell
  sail workflow delete id1 id2 
  ```

  You can also delete a list of workflows specified in a file: 

  ```shell
  sail workflow delete $(cat list_of_workflowIDs.txt)
  ```

  This command uses the [Delete workflow endpoint](https://developer.sailpoint.com/idn/api/beta/delete-workflow).

  ## Download workflow 

  To download workflows with the SailPoint CLI, run this command: 

  ```shell
  sail workflow download 
  ```

  Running this command downloads the available workflow files to the default folder, "workflows". 

  ### Folder 

  By default, workflows downloaded from the CLI are located in the folder, "workflows". To change the folder the workflows are downloaded to, append the `-f` flag to the command, as shown in this example: 

  ```shell
  sail workflow download -f my-workflows
  ```

  Running this command downloads the available workflow files 