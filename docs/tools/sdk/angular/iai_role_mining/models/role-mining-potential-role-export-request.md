# RoleMiningPotentialRoleExportRequest

# RoleMiningPotentialRoleExportRequest

Import this model from the entry point of its package:

```typescript
import { RoleMiningPotentialRoleExportRequest } from '@sailpoint/angular-sdk/iai_role_mining';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minEntitlementPopularity** | **(optional)** `number` | The minimum popularity among identities in the role which an entitlement must have to be included in the report | [default to undefined]
**includeCommonAccess** | **(optional)** `boolean` | If false, do not include entitlements that are highly popular among the entire orginization | [default to undefined]

