# VAClusterStatusChangeEvent

# VAClusterStatusChangeEvent

Import this model from the entry point of its package:

```typescript
import { VAClusterStatusChangeEvent } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | `string` | The date and time the status change occurred. | [default to undefined]
**type** | `string` | The type of the object that initiated this event. | [default to undefined]
**application** | `VAClusterStatusChangeEventApplication` |  | [default to undefined]
**healthCheckResult** | `VAClusterStatusChangeEventHealthCheckResult` |  | [default to undefined]
**previousHealthCheckResult** | `VAClusterStatusChangeEventPreviousHealthCheckResult` |  | [default to undefined]

