---
id: cli-template-spconfig
title: SPConfig Template
pagination_label: CLI Templates SPConfig
sidebar_label: SPConfig
sidebar_position: 10
sidebar_class_name: cli-template-spconfig
keywords: ['cli', 'template', 'spconfig']
description: Learn about the SPConfig template commands you can use to import and export configurations from the CLI. 
slug: /tools/cli/templates/spconfig
tags: ['CLI']
---

Use SPConfig templates to perform complex import and export operations with IdentityNow (IDN) configurations.

This is an example of a template file with one SPConfig template populated:

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

This is the SPConfig template anatomy:

```json

    {
        "name": "all-objects",
```

This is the SPConfig template's name. 

The SPConfig template name displays in the template list when you run `sail spconfig template`.

You can also provide this name as an argument: `sail spconfig template all-objects`

```json
        "description": "Export all available objects",
```

This is the SPConfig template's description. 

in the `sail spconfig template` list

```json
        "variables": [],
```

Use variables to dynamically populate values in the following content during command run time.

```json
        "exportBody": {
```

The following object matches that detailed in the [API docs](https://developer.sailpoint.com/docs/api/beta/export-sp-config)

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
