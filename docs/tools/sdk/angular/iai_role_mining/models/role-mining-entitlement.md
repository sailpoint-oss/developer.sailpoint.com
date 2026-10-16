# RoleMiningEntitlement

# RoleMiningEntitlement

Import this model from the entry point of its package:

```typescript
import { RoleMiningEntitlement } from '@sailpoint/angular-sdk/iai_role_mining';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlementRef** | **(optional)** `RoleMiningEntitlementRef` |  | [default to undefined]
**name** | **(optional)** `string` | Name of the entitlement | [default to undefined]
**applicationName** | **(optional)** `string` | Application name of the entitlement | [default to undefined]
**identityCount** | **(optional)** `number` | The number of identities with this entitlement in a role. | [default to undefined]
**popularity** | **(optional)** `number` | The % popularity of this entitlement in a role. | [default to undefined]
**popularityInOrg** | **(optional)** `number` | The % popularity of this entitlement in the org. | [default to undefined]
**sourceId** | **(optional)** `string` | The ID of the source/application. | [default to undefined]
**activitySourceState** | **(optional)** `string` | The status of activity data for the source.   Value is complete or notComplete. | [default to undefined]
**sourceUsagePercent** | **(optional)** `number` | The percentage of identities in the potential role that have usage of the source/application of this entitlement. | [default to undefined]

