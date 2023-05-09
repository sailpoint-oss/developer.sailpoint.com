---
id: cli-template-spconfig
title: SPConfig Template
pagination_label: CLI Templates SPConfig
sidebar_label: SPConfig
sidebar_position: 7
sidebar_class_name: cli-template-spconfig
keywords: ['cli', 'template', 'spconfig']
description: Learn about the CLI commands you can use to interact with VAs in this guide.
slug: /tools/cli/templates/spconfig
tags: ['CLI']
---

Use SPConfig templates to perform complex import and export operations with IdentityNow configurations

This is an example of a template file with one SPConfig templated populated

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

This is the anatomy of a SPConfig template

```json

    {
        "name": "all-objects",
```

The search template name that displays in the template list when you run `sail spconfig template`.

You can also provide this name as an argument: `sail spconfig template all-objects`

```json
        "description": "Export all available objects",
```

The spconfig template description that displays below the template name

in the `sail spconfig template` list

```json
        "variables": [],
```

Use variables to dynamically populate values in the following content during command run time.

```json
        "exportBody": {
```

The below object matches that detailed in the [API docs](https://developer.sailpoint.com/idn/api/beta/export-sp-config)

```json
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

```
