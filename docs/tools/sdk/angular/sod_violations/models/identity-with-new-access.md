# IdentityWithNewAccess

# IdentityWithNewAccess

Import this model from the entry point of its package:

```typescript
import { IdentityWithNewAccess } from '@sailpoint/angular-sdk/sod_violations';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityId** | `string` | Identity id to be checked. | [default to undefined]
**accessRefs** | `Array<IdentityWithNewAccessAccessRefsInner>` | The list of access items to consider for possible violations in a preventive check. Supported types are ENTITLEMENT, ACCESS_PROFILE, and ROLE. | [default to undefined]

