---
id: cli-template-report
title: Report Template
pagination_label: CLI Templates Report
sidebar_label: Report
sidebar_position: 7
sidebar_class_name: cli-template-report
keywords: ['cli', 'template', 'report']
description: Learn about the CLI commands you can use to interact with VAs in this guide.
slug: /tools/cli/templates/report
tags: ['CLI']
---

Use Report Templates to run a set of simple predefined search queries from the CLI Reports are most useful when you do not care about the search results returned from a query, and only want to know the Count of results.

This is an example of a report template:

```json
[
  {
    "name": "provisioning-and-security",
    "description": "All account unlocks in the tenant for a given time range",
    "variables": [{"name": "days", "prompt": "Days before today"}],
    "queries": [
      {
        "queryString": "(type:provisioning AND created:[now-{{days}}d TO now])",
        "queryTitle": "Provisioning Events for the last {{days}} days"
      },
      {
        "queryString": "(USER_UNLOCK_PASSED AND created:[now-{{days}}d TO now])",
        "queryTitle": "User Unlocks for the last {{days}} days"
      }
    ]
  }
]
```

This is the report template anatomy

```json
[
  {
    "name": "provisioning-and-security",
```

The Name of the search template.

This is what will show up in the template list when running `sail report`.

This is also the name you can provide as an argument `sail report provisioning-and-security`

```json
    "description": "All account unlocks in the tenant for a given time range",
```

The description of the report template, this will show below the template name in the `sail report` list

```json
    "variables": [{"name": "days", "prompt": "Days before today"}],
```

Variables are used to populate values in the content below dynamically during command run time for example the Variable in this template is configured so you can choose how many days back you want to search for provisioning-and-security events when you run `sail report provisioning-and-security` a prompt appears saying `Input Days before today:` the number you enter is then populated anywhere that variable is used in the below object, and the query is run

```json
    "queries": [
      {
        "queryString": "(type:provisioning AND created:[now-{{days}}d TO now])",
        "queryTitle": "Provisioning Events for the last {{days}} days"
      },
      {
        "queryString": "(USER_UNLOCK_PASSED AND created:[now-{{days}}d TO now])",
        "queryTitle": "User Unlocks for the last {{days}} days"
      }
    ]

  }
]
```

This is a list of the queries that will be run, currently variables for days are populated
