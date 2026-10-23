# ApprovalIdentityRecord

# ApprovalIdentityRecord

Import this model from the entry point of its package:

```typescript
import { ApprovalIdentityRecord } from '@sailpoint/angular-sdk/approvals';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityID** | **(optional)** `string` | Identity ID. | [default to undefined]
**type** | **(optional)** `string` | Type of identity. | [default to undefined]
**name** | **(optional)** `string` | Name of the identity. | [default to undefined]
**actionedAs** | **(optional)** `Array<ApprovalReference>` | List of references representing actions taken by the identity. | [default to undefined]
**members** | **(optional)** `Array<ApprovalReference>` | List of references representing members of the identity. | [default to undefined]
**decisionDate** | **(optional)** `string` | Date when the decision was made. | [default to undefined]
**email** | **(optional)** `string` | Email associated with the identity. | [default to undefined]

