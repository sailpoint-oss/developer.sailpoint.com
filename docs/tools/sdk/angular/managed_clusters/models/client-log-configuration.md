# ClientLogConfiguration

# ClientLogConfiguration

Import this model from the entry point of its package:

```typescript
import { ClientLogConfiguration } from '@sailpoint/angular-sdk/managed_clusters';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **(optional)** `string` | Log configuration\'s client ID | [default to undefined]
**durationMinutes** | **(optional)** `number` | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [default to 240]
**expiration** | **(optional)** `string` | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [default to undefined]
**rootLevel** | `StandardLevel` |  | [default to undefined]
**logLevels** | **(optional)**  | Mapping of identifiers to Standard Log Level values | [default to undefined]

