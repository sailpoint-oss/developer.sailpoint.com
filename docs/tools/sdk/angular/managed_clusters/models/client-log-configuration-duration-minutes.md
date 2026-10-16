# ClientLogConfigurationDurationMinutes

# ClientLogConfigurationDurationMinutes

Import this model from the entry point of its package:

```typescript
import { ClientLogConfigurationDurationMinutes } from '@sailpoint/angular-sdk/managed_clusters';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **(optional)** `string` | Log configuration\'s client ID | [default to undefined]
**durationMinutes** | **(optional)** `number` | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [default to 240]
**rootLevel** | `StandardLevel` |  | [default to undefined]
**logLevels** | **(optional)**  | Mapping of identifiers to Standard Log Level values | [default to undefined]

