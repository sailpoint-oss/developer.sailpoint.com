# RoleGetAllBulkUpdateResponse

# RoleGetAllBulkUpdateResponse

Import this model from the entry point of its package:

```typescript
import { RoleGetAllBulkUpdateResponse } from '@sailpoint/angular-sdk/roles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | ID of the task which is executing the bulk update. This also used in to the bulk-update/_** API to track status. | [default to undefined]
**type** | **(optional)** `string` | Type of the bulk update object. | [default to undefined]
**status** | **(optional)** `string` | The status of the bulk update request, only list unfinished request\'s status, the status could also checked by getBulkUpdateStatus API | [default to undefined]
**created** | **(optional)** `string` | Time when the bulk update request was created | [default to undefined]

