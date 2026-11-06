# CertificationTask

# CertificationTask

Import this model from the entry point of its package:

```typescript
import { CertificationTask } from '@sailpoint/angular-sdk/gov_certification';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The ID of the task | [default to undefined]
**targetId** | **(optional)** `string` | ID of the item for which the task is targeting | [default to undefined]
**type** | **(optional)** `string` | Type of the task | [default to undefined]
**targetType** | **(optional)** `string` | Type of the item being targeted by the task | [default to undefined]
**status** | **(optional)** `string` | Status of the task | [default to undefined]
**errors** | **(optional)** `Array<ErrorMessageDto>` | Generic localized reason for error | [default to undefined]
**reassignmentTrails** | **(optional)** `Array<ReassignmentTrail>` | Reassignment trails that lead to self certification during the reassignment | [default to undefined]
**created** | **(optional)** `string` | Created time of the task | [readonly] [default to undefined]

