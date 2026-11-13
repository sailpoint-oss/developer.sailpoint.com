# DataAccess2

# DataAccess2

Import this model from the entry point of its package:

```typescript
import { DataAccess2 } from '@sailpoint/angular-sdk/gov_certification';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policies** | **(optional)** `Array<DataAccessPoliciesInner>` | List of classification policies that apply to resources the entitlement or group has access to. | [default to undefined]
**categories** | **(optional)** `Array<DataAccessCategoriesInner>` | List of classification categories that apply to resources the entitlement or group has access to. | [default to undefined]
**impactScore** | **(optional)** `DataAccessImpactScore` |  | [default to undefined]
**modified** | **(optional)** `string` | Modification date of Data Access | [default to undefined]

