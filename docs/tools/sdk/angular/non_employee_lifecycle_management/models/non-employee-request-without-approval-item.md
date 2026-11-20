# NonEmployeeRequestWithoutApprovalItem

# NonEmployeeRequestWithoutApprovalItem

Import this model from the entry point of its package:

```typescript
import { NonEmployeeRequestWithoutApprovalItem } from '@sailpoint/angular-sdk/non_employee_lifecycle_management';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Non-Employee request id. | [default to undefined]
**requester** | **(optional)** `NonEmployeeIdentityReferenceWithId` |  | [default to undefined]
**accountName** | **(optional)** `string` | Requested identity account name. | [default to undefined]
**firstName** | **(optional)** `string` | Non-Employee\'s first name. | [default to undefined]
**lastName** | **(optional)** `string` | Non-Employee\'s last name. | [default to undefined]
**email** | **(optional)** `string` | Non-Employee\'s email. | [default to undefined]
**phone** | **(optional)** `string` | Non-Employee\'s phone. | [default to undefined]
**manager** | **(optional)** `string` | The account ID of a valid identity to serve as this non-employee\'s manager. | [default to undefined]
**nonEmployeeSource** | **(optional)** `NonEmployeeSourceLiteWithSchemaAttributes` |  | [default to undefined]
**data** | **(optional)**  | Additional attributes for a non-employee. Up to 10 custom attributes can be added. | [default to undefined]
**approvalStatus** | **(optional)** `ApprovalStatus` |  | [default to undefined]
**comment** | **(optional)** `string` | Comment of requester | [default to undefined]
**completionDate** | **(optional)** `string` | When the request was completely approved. | [default to undefined]
**startDate** | **(optional)** `string` | Non-Employee employment start date. | [default to undefined]
**endDate** | **(optional)** `string` | Non-Employee employment end date. | [default to undefined]
**modified** | **(optional)** `string` | When the request was last modified. | [default to undefined]
**created** | **(optional)** `string` | When the request was created. | [default to undefined]

