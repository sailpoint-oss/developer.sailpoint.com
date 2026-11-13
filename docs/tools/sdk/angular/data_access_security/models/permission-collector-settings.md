# PermissionCollectorSettings

# PermissionCollectorSettings

Import this model from the entry point of its package:

```typescript
import { PermissionCollectorSettings } from '@sailpoint/angular-sdk/data_access_security';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isEnabled** | **(optional)** `boolean` | Indicates whether the feature or configuration is enabled. | [default to false]
**clusterId** | **(optional)** `string` | The identifier of the cluster associated with this configuration, if applicable. | [default to undefined]
**analyzeUniquePermissions** | **(optional)** `boolean` | Indicates whether unique permissions should be analyzed for resources. | [default to false]
**calculateEffectivePermissions** | **(optional)** `boolean` | Indicates whether effective permissions should be calculated. | [default to false]
**calculateRiskiestPermissions** | **(optional)** `boolean` | Indicates whether riskiest permissions should be calculated. | [default to false]
**effectivePermissionsSource** | **(optional)** `string` | Source for effective permissions calculation. | [default to undefined]

