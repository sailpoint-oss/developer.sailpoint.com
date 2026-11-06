# MachineIdentityDailyCountsDay

# MachineIdentityDailyCountsDay

Import this model from the entry point of its package:

```typescript
import { MachineIdentityDailyCountsDay } from '@sailpoint/angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day** | **(optional)** `string` | Calendar day (UTC) the counts were recorded for. | [default to undefined]
**metrics** | **(optional)** `Array<MachineIdentityDailyCountMetric>` | Counts for each entity type and subtype. The array is empty when no counts were recorded for the day. | [default to undefined]

