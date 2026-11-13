# CorrelationReprocessStatus

# CorrelationReprocessStatus

Import this model from the entry point of its package:

```typescript
import { CorrelationReprocessStatus } from '@sailpoint/angular-sdk/sources';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceId** | **(optional)** `string` | ID of the source the run applies to. | [default to undefined]
**resourceId** | **(optional)** `string` | ID of the source resource the run applies to. | [default to undefined]
**type** | **(optional)** `string` | Kind of correlation the run reprocesses. | [default to undefined]
**status** | **(optional)** `string` | Status of the run. `STARTED` means the run is planning or processing. `COMPLETED` means every object was evaluated. `COMPLETED_WITH_ERRORS` means the run finished but part of the work could not be processed. `FAILED` means the run could not be planned. `ABORTED_AGGREGATION_STARTED` means the run stopped because an aggregation started on the same resource. | [default to undefined]
**total** | **(optional)** `number` | Number of objects in scope for the run. `null` until planning finishes; after that it does not change, so you can compute progress as `processed` divided by `total`. | [default to undefined]
**processed** | **(optional)** `number` | Number of objects evaluated so far. | [default to undefined]
**updated** | **(optional)** `number` | Number of evaluated objects whose owner changed. | [default to undefined]
**errored** | **(optional)** `number` | Number of objects that could not be processed. Individual errors do not fail the run. | [default to undefined]
**startedAt** | **(optional)** `string` | Date and time when the run was accepted. | [default to undefined]
**finishedAt** | **(optional)** `string` | Date and time when the run reached a final status. `null` while the run is in progress. | [default to undefined]
**startedBy** | **(optional)** `CorrelationReprocessStatusStartedBy` |  | [default to undefined]

