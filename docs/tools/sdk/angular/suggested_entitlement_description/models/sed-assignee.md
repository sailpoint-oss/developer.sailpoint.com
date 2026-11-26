# SedAssignee

# SedAssignee

Import this model from the entry point of its package:

```typescript
import { SedAssignee } from '@sailpoint/angular-sdk/suggested_entitlement_description';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `string` | Type of assignment When value is PERSONA, the value MUST be SOURCE_OWNER or ENTITLEMENT_OWNER IDENTITY SED_ASSIGNEE_IDENTITY_TYPE GROUP SED_ASSIGNEE_GROUP_TYPE SOURCE_OWNER SED_ASSIGNEE_SOURCE_OWNER_TYPE ENTITLEMENT_OWNER SED_ASSIGNEE_ENTITLEMENT_OWNER_TYPE | [default to undefined]
**value** | **(optional)** `string` | Identity or Group identifier Empty when using source/entitlement owner personas | [default to undefined]

