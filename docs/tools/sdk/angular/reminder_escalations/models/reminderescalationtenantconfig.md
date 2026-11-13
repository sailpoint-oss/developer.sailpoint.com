# Reminderescalationtenantconfig

# Reminderescalationtenantconfig

Import this model from the entry point of its package:

```typescript
import { Reminderescalationtenantconfig } from '@sailpoint/angular-sdk/reminder_escalations';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | `string` | Tenant id taken from the authenticated request. | [readonly] [default to undefined]
**domainObjectType** | `string` | Domain object type this default applies to. | [default to undefined]
**rules** | `Reminderescalationruleset` |  | [default to undefined]
**schemaVersion** | `number` | Schema version assigned by the service. Clients do not set this field. | [readonly] [default to undefined]
**revision** | `number` | Optimistic-lock counter. Echo this value on update. | [default to undefined]
**createdAt** | `string` | When this tenant default was created. | [readonly] [default to undefined]
**updatedAt** | `string` | When this tenant default was last updated. | [readonly] [default to undefined]

