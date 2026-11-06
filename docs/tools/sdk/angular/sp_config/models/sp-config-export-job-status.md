# SpConfigExportJobStatus

# SpConfigExportJobStatus

Import this model from the entry point of its package:

```typescript
import { SpConfigExportJobStatus } from '@sailpoint/angular-sdk/sp_config';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | `string` | Unique id assigned to this job. | [default to undefined]
**status** | `string` | Status of the job. | [default to undefined]
**type** | `string` | Type of the job, either export or import. | [default to undefined]
**expiration** | **(optional)** `string` | The time until which the artifacts will be available for download. | [default to undefined]
**created** | `string` | The time the job was started. | [default to undefined]
**modified** | `string` | The time of the last update to the job. | [default to undefined]
**description** | **(optional)** `string` | Optional user defined description/name for export job. | [default to undefined]
**completed** | **(optional)** `string` | The time the job was completed. | [default to undefined]

