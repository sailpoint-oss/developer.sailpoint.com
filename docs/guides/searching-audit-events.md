---
id: searching-audit-events
title: Searching Audit Events
pagination_label: Searching Audit Events
sidebar_label: Searching Audit Events
sidebar_position: 3
sidebar_class_name: searchingAuditEvents
keywords: ['audit', 'events', 'search', 'search api', 'security', 'compliance']
description: Use the Search API to query audit events in Identity Security Cloud.
slug: /guides/searching-audit-events
tags: ['Search', 'Audit', 'Events', 'Security', 'Compliance']
---

## Overview

Identity Security Cloud (ISC) records a wide range of audit events whenever actions are taken in the platform — user logins, role changes, access requests, workflow executions, and much more. These events are indexed in real time and can be queried through the [Search API](https://developer.sailpoint.com/docs/api/search-post-v-1).

This guide explains how to build useful search queries and what the key fields in an event response mean. For a complete listing of every supported event name and its type, see the [Audit Events Reference](./audit-events-reference).

## Calling the Search API

Use `POST /search/v1` with `"indices": ["events"]` to query audit events. For full details on request and response formats, authentication, and rate limits, see the [Search API reference](https://developer.sailpoint.com/docs/api/search-post-v-1).

To try requests interactively, use the [SailPoint Postman workspace](https://www.postman.com/sailpoint/workspace/identitynow) — the **Identity Security Cloud APIs** collection includes the Search endpoint with pre-configured authentication. See [Postman Collections](https://developer.sailpoint.com/docs/api/postman-collections) for setup instructions.

### Key response fields

| Field | Description |
|-------|-------------|
| `action` | The searchable event name. Use this value in your queries. |
| `type` | The high-level category of the event (e.g. `WORKFLOW`, `CERTIFICATION`, `AUTH`). |
| `name` | Human-readable display name for the event. |
| `technicalName` | Internal technical name, sometimes different from `action`. |
| `operation` | The operation performed: `CREATE`, `UPDATE`, `DELETE`, `ENABLE`, `DISABLE`, etc. |
| `status` | Outcome of the operation: `PASSED`, `FAILED`, `STARTED`, etc. |
| `actor.name` | The user or system that triggered the event (e.g. `phil.ellis`). |
| `target.name` | The object the action was performed on (e.g. a workflow name, role name, or identity name). |
| `attributes` | Additional context specific to the event type. |
| `created` | ISO-8601 timestamp when the event occurred. |
| `trackingNumber` | Correlates related events (e.g. an access request and its approval). |

## Filtering with query DSL

For more precise queries, use the `queryDsl` field with [Elasticsearch Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html) instead of the simple `query` string. Set `queryType` to `"DSL"` and use `match` queries against text fields like `action`, `type`, `status`, `actor.name`, and `target.name`.

### Filter by action

```json
{
  "indices": ["events"],
  "queryType": "DSL",
  "queryDsl": {
    "match": {
      "action": "WORKFLOW_CREATED"
    }
  }
}
```

### Filter by technicalName

Some events have a generic `action` value like `"create"` or `"update"` rather than a specific event name. For these events, use the `technicalName` field to search instead:

```json
{
  "indices": ["events"],
  "queryType": "DSL",
  "queryDsl": {
    "match": {
      "technicalName": "ROLE_CREATE_PASSED"
    }
  }
}
```

The [Audit Events Reference](./audit-events-reference) lists which events require `technicalName` in the **Search Field** column.

### Filter by event type

To retrieve all events of a particular type (e.g. all certification-related events):

```json
{
  "indices": ["events"],
  "queryType": "DSL",
  "queryDsl": {
    "match": {
      "type": "CERTIFICATION"
    }
  }
}
```

### Filter by actor

`actor.name` is the user or system that triggered the event. `target.name` is the object the action was performed on (e.g. a workflow name, role name, or identity name).

To see everything a specific user did:

```json
{
  "indices": ["events"],
  "queryType": "DSL",
  "queryDsl": {
    "match": {
      "actor.name": "jane.doe"
    }
  }
}
```

### Filter by date range

```json
{
  "indices": ["events"],
  "queryType": "DSL",
  "queryDsl": {
    "bool": {
      "must": [
        { "match": { "action": "WORKFLOW_CREATED" } },
        {
          "range": {
            "created": {
              "gte": "2026-01-01T00:00:00Z",
              "lte": "2026-06-30T23:59:59Z"
            }
          }
        }
      ]
    }
  }
}
```

### Match multiple actions

Use a `bool` query with `should` to match any of several action values:

```json
{
  "indices": ["events"],
  "queryType": "DSL",
  "queryDsl": {
    "bool": {
      "should": [
        { "match": { "action": "WORKFLOW_CREATED" } },
        { "match": { "action": "WORKFLOW_DELETED" } },
        { "match": { "action": "WORKFLOW_ENABLED" } },
        { "match": { "action": "WORKFLOW_DISABLED" } }
      ],
      "minimum_should_match": 1
    }
  }
}
```

### Combine filters

Find all failed access request events triggered by a specific user in the last 30 days:

```json
{
  "indices": ["events"],
  "queryType": "DSL",
  "queryDsl": {
    "bool": {
      "must": [
        { "match": { "type":        "WORKFLOW" } },
        { "match": { "status":      "PASSED"         } },
        { "match": { "actor.name": "john.doe"     } },
        { "range": { "created":    { "gte": "now-30d/d" } } }
      ]
    }
  }
}
```

## Pagination and sorting

Add `limit`, `offset`, and `sort` to paginate and order results:

```json
{
  "indices": ["events"],
  "queryType": "DSL",
  "queryDsl": {
    "match": {
      "type": "CERTIFICATION"
    }
  },
  "sort": ["-created"],
  "limit": 50,
  "offset": 0
}
```

Prefix a sort field with `-` for descending order. Audit events are almost always queried newest-first (`-created`).

:::note
The simple `query` string searches across all indexed fields, so a term like `"CERTIFICATION"` can match events where the word appears in `target.name` or other text fields — not just the event type. Use `queryType: "DSL"` with a `match` on a specific field when you need precise results.
:::

## Common use cases

### Compliance: Who approved an access request?

```json
{
  "indices": ["events"],
  "queryType": "DSL",
  "queryDsl": {
    "bool": {
      "must": [
        { "match": { "type":       "ACCESS_REQUEST"         } },
        { "match": { "action":     "ACCESS_REQUEST_APPROVED" } },
        { "match": { "actor.name": "alice.jones"            } }
      ]
    }
  },
  "sort": ["-created"]
}
```

### Security: All authentication failures in the last 24 hours

```json
{
  "indices": ["events"],
  "queryType": "DSL",
  "queryDsl": {
    "bool": {
      "must": [
        { "match": { "type":   "AUTH"   } },
        { "match": { "status": "FAILED" } },
        { "range": { "created": { "gte": "now-1d/d" } } }
      ]
    }
  },
  "sort": ["-created"],
  "limit": 250
}
```

### Audit trail: All changes made to a specific role

```json
{
  "indices": ["events"],
  "queryType": "DSL",
  "queryDsl": {
    "bool": {
      "must": [
        { "match": { "target.name": "test-role" } },
        {
          "bool": {
            "should": [
              { "match": { "action": "ROLE_CREATED"       } },
              { "match": { "action": "ROLE_UPDATED"       } },
              { "match": { "action": "ROLE_DELETED"       } },
              { "match": { "technicalName": "ROLE_CREATE_PASSED" } },
              { "match": { "technicalName": "ROLE_UPDATE_PASSED" } },
              { "match": { "technicalName": "ROLE_DELETE_PASSED" } }
            ],
            "minimum_should_match": 1
          }
        }
      ]
    }
  },
  "sort": ["-created"]
}
```

### Monitor workflow activity

```json
{
  "indices": ["events"],
  "queryType": "DSL",
  "queryDsl": {
    "bool": {
      "should": [
        { "match": { "action": "WORKFLOW_CREATED"             } },
        { "match": { "action": "WORKFLOW_DELETED"             } },
        { "match": { "action": "WORKFLOW_ENABLED"             } },
        { "match": { "action": "WORKFLOW_DISABLED"            } },
        { "match": { "action": "WORKFLOW_EXECUTION_CANCELLED" } }
      ],
      "minimum_should_match": 1
    }
  },
  "sort": ["-created"],
  "limit": 100
}
```
