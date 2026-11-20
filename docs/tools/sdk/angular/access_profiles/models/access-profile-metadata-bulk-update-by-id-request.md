# AccessProfileMetadataBulkUpdateByIdRequest

# AccessProfileMetadataBulkUpdateByIdRequest

Import this model from the entry point of its package:

```typescript
import { AccessProfileMetadataBulkUpdateByIdRequest } from '@sailpoint/angular-sdk/access_profiles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessProfiles** | `Array<string>` | The IDs of the access profiles to update. | [default to undefined]
**operation** | `string` | The operation to be performed | [default to undefined]
**replaceScope** | `string` | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the access profile. | [default to undefined]
**values** | `Array<AccessProfileMetadataBulkUpdateByIdRequestValuesInner>` | The metadata to be updated, including attribute key and value. | [default to undefined]

