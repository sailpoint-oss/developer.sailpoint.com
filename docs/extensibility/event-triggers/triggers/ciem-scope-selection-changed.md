# CIEM Scope Selection Changed

## Event Context

A user has changed the scope selection for a source. If a cloud scope is deselected, SailPoint CIEM will no longer check for changes to that specific AWS account, Azure subscription, or GCP project.

You can use a JSONPath filter expression to narrow down the circumstances under which your workflow will be triggered.

This trigger only fires if you have the CIEM service.

This is an example input from this trigger:

```json
{
  "$ref": "#/definitions/record:ScopeSelectionChanged",
  "definitions": {
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
    },
    "record:ScopeSelectionChanged": {
      "additionalProperties": true,
      "properties": {
        "event": {
          "type": "string"
        },
        "identityDisplayName": {
          "type": "string"
        },
        "identityId": {
          "type": "string"
        },
        "scopesModified": {
          "items": {
            "$ref": "#/definitions/record:Scope"
          },
          "type": "array"
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
    }
  }
}
```

## Additional Information and Links

- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
