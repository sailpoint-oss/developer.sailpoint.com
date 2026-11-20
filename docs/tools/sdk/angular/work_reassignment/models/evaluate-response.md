# EvaluateResponse

# EvaluateResponse

Import this model from the entry point of its package:

```typescript
import { EvaluateResponse } from '@sailpoint/angular-sdk/work_reassignment';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reassignToId** | **(optional)** `string` | The Identity ID which should be the recipient of any work items sent to a specific identity & work type | [default to undefined]
**lookupTrail** | **(optional)** `Array<LookupStep>` | List of Reassignments found by looking up the next `TargetIdentity` in a ReassignmentConfiguration | [default to undefined]

