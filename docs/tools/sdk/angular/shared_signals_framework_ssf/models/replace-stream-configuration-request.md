# ReplaceStreamConfigurationRequest

# ReplaceStreamConfigurationRequest

Import this model from the entry point of its package:

```typescript
import { ReplaceStreamConfigurationRequest } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_id** | `string` | ID of the stream to replace. | [default to undefined]
**delivery** | `ReplaceStreamConfigurationRequestDelivery` |  | [default to undefined]
**events_requested** | **(optional)** `Array<string>` | Event types the receiver wants. Use CAEP event-type URIs. | [default to undefined]
**description** | **(optional)** `string` | Optional human-readable description of the stream. | [default to undefined]

