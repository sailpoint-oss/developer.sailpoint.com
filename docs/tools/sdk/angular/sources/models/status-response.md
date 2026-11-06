# StatusResponse

# StatusResponse

Import this model from the entry point of its package:

```typescript
import { StatusResponse } from '@sailpoint/angular-sdk/sources';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | ID of the source | [readonly] [default to undefined]
**name** | **(optional)** `string` | Name of the source | [readonly] [default to undefined]
**status** | **(optional)** `string` | The status of the health check. | [readonly] [default to undefined]
**elapsedMillis** | **(optional)** `number` | The number of milliseconds spent on the entire request. | [readonly] [default to undefined]
**details** | **(optional)** `object` | The document contains the results of the health check. The schema of this document depends on the type of source used.  | [readonly] [default to undefined]

