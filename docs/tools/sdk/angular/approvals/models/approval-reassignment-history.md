# ApprovalReassignmentHistory

# ApprovalReassignmentHistory

Import this model from the entry point of its package:

```typescript
import { ApprovalReassignmentHistory } from '@sailpoint/angular-sdk/approvals';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commentID** | **(optional)** `string` | Unique identifier for the comment associated with the reassignment. | [default to undefined]
**reassignedFrom** | **(optional)** `ApprovalIdentity` |  | [default to undefined]
**reassignedTo** | **(optional)** `ApprovalIdentity` |  | [default to undefined]
**reassigner** | **(optional)** `ApprovalIdentity` |  | [default to undefined]
**reassignmentDate** | **(optional)** `string` | Date and time when the reassignment occurred. | [default to undefined]
**reassignmentType** | **(optional)** `string` | Type of reassignment, such as escalation or manual reassignment. | [default to undefined]

