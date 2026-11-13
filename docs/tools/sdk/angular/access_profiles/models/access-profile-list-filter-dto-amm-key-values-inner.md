# AccessProfileListFilterDTOAmmKeyValuesInner

# AccessProfileListFilterDTOAmmKeyValuesInner

Import this model from the entry point of its package:

```typescript
import { AccessProfileListFilterDTOAmmKeyValuesInner } from '@sailpoint/angular-sdk/access_profiles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **(optional)** `string` | The technical name of the metadata attribute. A blank or missing value is rejected with a 400 error. | [default to undefined]
**values** | **(optional)** `Array<string>` | The attribute values used to filter access profiles. If the list is empty, results are filtered by attribute key only. | [default to undefined]

