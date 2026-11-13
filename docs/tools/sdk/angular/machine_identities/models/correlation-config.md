# CorrelationConfig

# CorrelationConfig

Import this model from the entry point of its package:

```typescript
import { CorrelationConfig } from '@sailpoint/angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | System-generated unique ID of the correlation config. | [default to undefined]
**sourceId** | `string` | The source ID this config belongs to. | [default to undefined]
**resourceId** | `string` | The source resource identifier for this config scope. | [default to undefined]
**type** | `string` | The correlation config type. | [default to undefined]
**attributes** |  | JSON object of config attributes. May include syncPrimaryToMachineAccounts (boolean) on OWNER_PRIMARY only. | [default to undefined]
**rules** | `Array<CorrelationRule>` | The ordered set of correlation rules for this config. | [default to undefined]
**created** | **(optional)** `string` | Creation date of the config. | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the config. | [readonly] [default to undefined]

