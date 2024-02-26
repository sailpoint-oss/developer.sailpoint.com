---
id: cli-template-report
title: Report Template
pagination_label: CLI Templates Report
sidebar_label: Report
sidebar_position: 10
sidebar_class_name: cli-template-report
keywords: ['cli', 'template', 'report']
description: Learn about the commands you can use to run report templates from the CLI.
slug: /tools/cli/templates/report
tags: ['CLI']
---

Use report templates to run sets of simple, predefined search queries from the CLI. Reports are most useful when you don't care about the search results returned from a query and you only want to know the count of results.

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

This is the report template anatomy:

```json
[
  {
    "name": "provisioning-and-security",
```

This is the report template's name. 

It displays in the template list when you run `sail report`. 

You can also provide the name as an argument: `sail report provisioning-and-security`

```json
    "description": "All account unlocks in the tenant for a given time range",
```

This is the report template's description. 

It displays following the template name in the `sail report` list. 

```json
    "variables": [{"name": "days", "prompt": "Days before today"}],
```

Use variables to dynamically populate values in the following content during command run time. 

For example, the variable in this template is configured so you can choose how many days back you want to search for provisioning-and-security events. When you run `sail report provisioning-and-security`, a prompt displays, `Input Days before today:` The number you enter will then populate anywhere the variable is used in the following object, and then the query runs. 

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

This is a list of the queries that will run. Currently, the variables for days populate. 
