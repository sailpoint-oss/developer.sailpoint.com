# ReviewableAccessProfile

# ReviewableAccessProfile

Import this model from the entry point of its package:

```typescript
import { ReviewableAccessProfile } from '@sailpoint/angular-sdk/certifications';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The id of the Access Profile | [default to undefined]
**name** | **(optional)** `string` | Name of the Access Profile | [default to undefined]
**description** | **(optional)** `string` | Information about the Access Profile | [default to undefined]
**privileged** | **(optional)** `boolean` | Indicates if the entitlement is a privileged entitlement | [default to undefined]
**cloudGoverned** | **(optional)** `boolean` | True if the entitlement is cloud governed | [default to undefined]
**endDate** | **(optional)** `string` | The date at which a user\'s access expires | [default to undefined]
**owner** | **(optional)** `IdentityReferenceWithNameAndEmail` |  | [default to undefined]
**entitlements** | **(optional)** `Array<ReviewableEntitlement>` | A list of entitlements associated with this Access Profile | [default to undefined]
**created** | **(optional)** `string` | Date the Access Profile was created. | [default to undefined]
**modified** | **(optional)** `string` | Date the Access Profile was last modified. | [default to undefined]

