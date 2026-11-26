# ApprovalDetails

# ApprovalDetails

Import this model from the entry point of its package:

```typescript
import { ApprovalDetails } from '@sailpoint/angular-sdk/account_deletion_requests';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approver** | **(optional)** `ApproverDto` |  | [default to undefined]
**approverComments** | **(optional)** `string` | Comments added by approver while rejecting or approving the account deletion request. | [default to undefined]
**decisionDate** | **(optional)** `string` | Decision date of approval rejected or approved. | [readonly] [default to undefined]
**serialOrder** | **(optional)** `number` | SerialOrder of approval details. | [default to undefined]
**status** | **(optional)** `AccountRequestPhaseState` |  | [default to undefined]

