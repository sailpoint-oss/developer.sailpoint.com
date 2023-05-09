---
id: cli-template-search
title: Search Template
pagination_label: CLI Templates Search
sidebar_label: Search
sidebar_position: 7
sidebar_class_name: cli-template-search
keywords: ['cli', 'template', 'search']
description: Learn about the CLI commands you can use to interact with VAs in this guide.
slug: /tools/cli/templates/search
tags: ['CLI']
---

Use Search Templates to run predefined search queries from the CLI

This is an example of a template file with 3 search templates populated

```json
[
  {
    "name": "all-account-unlocks",
    "description": "All account unlocks in the tenant for a given time range",
    "variables": [{"name": "days", "prompt": "Days before today"}],
    "searchQuery": {
      "indices": ["events"],
      "queryType": null,
      "queryVersion": null,
      "query": {
        "query": "(USER_UNLOCK_PASSED AND created:[now-{{days}}d TO now])"
      },
      "sort": [],
      "searchAfter": []
    }
  },
  {
    "name": "all-provisioning-events",
    "description": "All provisioning events in the tenant for a given time range",
    "variables": [{"name": "days", "prompt": "Days before today"}],
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

This is the search template anatomy:

```json
{
  "name": "all-account-unlocks",
```

The search template name that displays in the template list when you run `sail search template`.

You can also provide this name as an argument: `sail search template all-account-unlocks`

```json
  "description": "All account unlocks in the tenant for a given time range"
```

The search template description that displays below the template name in the `sail search template` list

```json
  "variables": [{"name": "days", "prompt": "Days before today"}],
```

Use variables to dynamically populate values in the following content during command run time. For example, the variable in this template is configured such that you can choose how many days back you want to search for account unlock events. When you run `sail search template all-account-unlocks`, a prompt displays, saying `Input Days before today:` The number you enter is then populated anywhere that variable is used in the following object, and the query runs.

```json
  "searchQuery": {
    "indices": ["events"],
    "queryType": null,
    "queryVersion": null,
    "query": {
      "query": "(USER_UNLOCK_PASSED AND created:[now-{{days}}d TO now])" },
      "sort": [], "searchAfter": []
      }
  }
```

Everything inside this searchQuery object matches the standard format of an [IdentityNow search query](https://documentation.sailpoint.com/saas/help/search/building-query.html). A limited number of examples are provided [here](https://developer.sailpoint.com/idn/api/v3/search-post), but the searchQuery object is mapped to the full search object. This means that you can add any search query values missing from this object.
