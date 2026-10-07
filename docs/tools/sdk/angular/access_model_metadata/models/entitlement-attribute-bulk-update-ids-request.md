# EntitlementAttributeBulkUpdateIdsRequest

# EntitlementAttributeBulkUpdateIdsRequest

Import this model from the entry point of its package:

```typescript
import { EntitlementAttributeBulkUpdateIdsRequest } from '@sailpoint/angular-sdk/access_model_metadata';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlements** | **(optional)** `Array<string>` | List of entitlement IDs to update. | [default to undefined]
**operation** | **(optional)** `string` | Operation to perform on the attributes in the bulk update request. | [default to undefined]
**replaceScope** | **(optional)** `string` | The choice of update scope. | [default to undefined]
**values** | **(optional)** `Array<BulkUpdateAMMKeyValueInner>` | The metadata to be updated, including attribute and values. | [default to undefined]

