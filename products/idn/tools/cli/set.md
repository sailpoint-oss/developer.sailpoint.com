---
id: cli-set
title: Set
pagination_label: CLI-Set
sidebar_label: Set
sidebar_position: 4
sidebar_class_name: cli
keywords: ['cli', 'set']
description: Learn how to configure your CLI settings in this guide. 
slug: /tools/cli/set
tags: ['CLI']
---

## Set

Learn how to configure your CLI settings in this guide. 

This includes setting your authentication mode, your debug mode, and the filepaths for the templates your CLI uses to make your search and export processes easier.  

You can use these `set` commands to configure your CLI settings: 

- [Auth](#auth)
- [Debug](#debug)
- [Search templates](#search-templates)
    - [File format](#file-format)
- [Export templates](#export-templates)
    - [File format](#file-format-1)

### Auth

To set the current authentication method for the CLI, run this command: 

```shell
sail set auth {authentication type}
```

You can currently only set the authentication to use a personal access token (PAT). 

### Debug

To enable debug mode, run this command: 

```shell
sail set debug enable
```

To disable debug mode, run the same command with `disable` instead. 

### Search templates

To set the filepath for the search templates your CLI uses, run this command: 

```shell
sail set searchTemplates "path/to/search/template/file"

or

sail set search "path/to/search/template/file"
```

#### File format

Here are a couple examples of the file format a search template uses: 

```json
[
  {
    "name": "all-provisioning-events",
    "description": "All provisioning events in the tenant for a given time range",
    "variables": [{ "name": "days", "prompt": "Days before today" }],
    "searchQuery": {
      "indices": ["events"],
      "queryType": null,
      "queryVersion": null,
      "query": {
        "query": "(type:provisioning AND created:[now-{{days}}d TO now])"
      },
      "sort": [],
      "searchAfter": []
    }
  },
  {
    "name": "all-provisioning-events-90-days",
    "description": "All provisioning events in the tenant for a given time range",
    "variables": [],
    "searchQuery": {
      "indices": ["events"],
      "queryType": null,
      "queryVersion": null,
      "query": {
        "query": "(type:provisioning AND created:[now-90d TO now])"
      },
      "sort": [],
      "searchAfter": []
    }
  }
]
```

In the first example, the template uses variables in its query. The second example is a fully predefined template without variables. 

### Export templates

To set the filepath for the export templates your CLI uses, run this command: 

```shell
sail set exportTemplates "path/to/export/template/file"

or

sail set export "path/to/export/template/file"
```

#### File format

Here is an example of the file format an export template uses: 
```json
[
  {
    "name": "all-objects",
    "description": "Export all available objects",
    "variables": [],
    "exportBody": {
      "description": "Export all available objects",
      "excludeTypes": [],
      "includeTypes": [
        "SOURCE",
        "RULE",
        "TRIGGER_SUBSCRIPTION",
        "TRANSFORM",
        "IDENTITY_PROFILE"
      ],
      "objectOptions": {}
    }
  }
]
```
