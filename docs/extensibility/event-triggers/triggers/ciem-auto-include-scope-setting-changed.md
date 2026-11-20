# CIEM Auto-Include Scope Setting Changed

## Event Context

A user has disabled or enabled the Auto-Include Scope functionality for a source. When auto-include scope is disabled, SailPoint CIEM will not check for newly added AWS accounts, Azure subscriptions, or GCP projects.

You can use a JSONPath filter expression to narrow down the circumstances under which your workflow will be triggered.

This trigger only fires if you have the CIEM service.

This is an example input from this trigger:

```json
{
  "$ref": "#/definitions/record:AutoIncludeScopeSettingChanged",
  "definitions": {
    "record:AutoIncludeScopeSettingChanged": {
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
        }
      },
      "type": "object"
    }
  }
}
```

## Additional Information and Links

- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
