# StreamStatusResponse

# StreamStatusResponse

Import this model from the entry point of its package:

```typescript
import { StreamStatusResponse } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_id** | **(optional)** `string` | Stream identifier. | [default to undefined]
**status** | **(optional)** `string` | Operational status of the stream (enabled, paused, or disabled). | [default to undefined]
**reason** | **(optional)** `string` | Optional reason for the current status (e.g. set when status is updated). | [default to undefined]

