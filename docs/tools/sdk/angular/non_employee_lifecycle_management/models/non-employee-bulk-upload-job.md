# NonEmployeeBulkUploadJob

# NonEmployeeBulkUploadJob

Import this model from the entry point of its package:

```typescript
import { NonEmployeeBulkUploadJob } from '@sailpoint/angular-sdk/non_employee_lifecycle_management';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The bulk upload job\'s ID. (UUID) | [default to undefined]
**sourceId** | **(optional)** `string` | The ID of the source to bulk-upload non-employees to. (UUID) | [default to undefined]
**created** | **(optional)** `string` | The date-time the job was submitted. | [default to undefined]
**modified** | **(optional)** `string` | The date-time that the job was last updated. | [default to undefined]
**status** | **(optional)** `string` | Returns the following values indicating the progress or result of the bulk upload job. \"PENDING\" means the job is queued and waiting to be processed. \"IN_PROGRESS\" means the job is currently being processed. \"COMPLETED\" means the job has been completed without any errors. \"ERROR\" means the job failed to process with errors.  | [default to undefined]

