# SubtypeWithTarget

# SubtypeWithTarget

Import this model from the entry point of its package:

```typescript
import { SubtypeWithTarget } from '@sailpoint/angular-sdk/machine_account_subtypes';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Server-generated subtype identifier. Must not be supplied on create. | [readonly] [default to undefined]
**technicalName** | `string` | Technical name of the subtype. Unique within the target tier scope. | [default to undefined]
**displayName** | `string` | Display name of the subtype. | [default to undefined]
**description** | `string` | Description of the subtype. | [default to undefined]
**type** | **(optional)** `string` | Entity type of the subtype. Defaults to `MACHINE` when omitted. | [default to 'MACHINE']
**targetType** | **(optional)** `SubtypeTargetType` |  | [default to undefined]
**targetId** | `string` | Scope key for the subtype. Source id when `targetType` is `SOURCE`. Connector type or connector specification id when `targetType` is `CONNECTOR`. | [default to undefined]
**targetName** | **(optional)** `string` | Human-readable target label. May be omitted on create; the service persists a display name. | [default to '']
**classification** | **(optional)** `SubtypeClassification` |  | [default to undefined]
**origin** | **(optional)** `string` | Response-only origin badge. Set on effective-set list reads: `CONNECTOR` when a SOURCE winner overrides a CONNECTOR parent of the same technical name. `null` on connector-only and source-only winners, and on plain CRUD list, create, patch, and get-by-id. | [readonly] [default to undefined]
**profile** | **(optional)** `ConnectorVariantProfile` |  | [default to undefined]
**systemManaged** | **(optional)** `boolean` | Server-set flag indicating the subtype is managed by the system. Incoming values are ignored. | [readonly] [default to false]
**created** | **(optional)** `string` | Creation timestamp. | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modified timestamp. | [readonly] [default to undefined]
**target** | **(optional)** `SubtypeTargetRef` |  | [default to undefined]

