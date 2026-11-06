# ApprovalIdentity

# ApprovalIdentity

Import this model from the entry point of its package:

```typescript
import { ApprovalIdentity } from '@sailpoint/angular-sdk/approvals';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **(optional)** `string` | Email address. | [default to undefined]
**identityID** | **(optional)** `string` | Identity ID of the type of identity defined in the \'type\' field. | [default to undefined]
**members** | **(optional)** `Array<ApprovalIdentityMembersInner>` | List of members of a governance group. Will be omitted if the identity is not a governance group. | [default to undefined]
**name** | **(optional)** `string` | Name of the identity. | [default to undefined]
**ownerOf** | **(optional)** `Array<ApprovalIdentityOwnerOfInner>` | List of owned items. For example, will show the items in which a ROLE_OWNER owns. Omitted if not an owner of anything. | [default to undefined]
**serialOrder** | **(optional)** `number` | The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0. | [default to undefined]
**type** | **(optional)** `string` | Type of identityID. | [default to undefined]

