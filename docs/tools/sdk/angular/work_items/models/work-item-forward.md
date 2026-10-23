# WorkItemForward

# WorkItemForward

Import this model from the entry point of its package:

```typescript
import { WorkItemForward } from '@sailpoint/angular-sdk/work_items';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**targetOwnerId** | `string` | The ID of the identity to forward this work item to. | [default to undefined]
**comment** | `string` | Comments to send to the target owner | [default to undefined]
**sendNotifications** | **(optional)** `boolean` | If true, send a notification to the target owner. | [default to true]

