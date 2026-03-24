---
id: ciem-new-scope-detected
title: CIEM New Scope Detected
pagination_label: CIEM New Scope Detected
sidebar_label: CIEM New Scope Detected
sidebar_class_name: ciemNewScopeDetected
keywords: ['event', 'trigger', 'ciem', 'scope', 'detected', 'available']
description: Fires after a new AWS account, Azure subscription, or GCP project is detected by SailPoint CIEM.
slug: /extensibility/event-triggers/triggers/ciem-new-scope-detected
tags: ['Event Triggers', 'Available Event Triggers', 'Fire and Forget']
---

## Event Context

A new AWS account, Azure subscription, or GCP project was detected by SailPoint CIEM.

You can use a JSONPath filter expression to narrow down the circumstances under which your workflow will be triggered.

This trigger only fires if you have the CIEM service.

This is an example input from this trigger:

```json
{
  "$ref": "#/definitions/record:NewScopeDetected",
  "definitions": {
    "record:NewScopeDetected": {
      "additionalProperties": true,
      "properties": {
        "event": {
          "type": "string"
        },
        "org": {
          "type": "string"
        },
        "scopesDiscovered": {
          "items": {
            "$ref": "#/definitions/record:Scope"
          },
          "type": "array"
        },
        "scopesEnabled": {
          "type": "boolean"
        },
        "sourceIscId": {
          "type": "string"
        },
        "sourceName": {
          "type": "string"
        },
        "sourceNativeId": {
          "type": "string"
        },
        "timestamp": {
          "type": "string"
        },
        "total": {
          "minimum": 1,
          "type": "integer"
        },
        "truncated": {
          "type": "boolean"
        }
      },
      "type": "object"
    },
    "record:Scope": {
      "additionalProperties": true,
      "properties": {
        "name": {
          "type": "string"
        },
        "nativeId": {
          "type": "string"
        }
      },
      "required": ["name", "nativeId"],
      "type": "object"
    }
  }
}
```

## Additional Information and Links

- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
