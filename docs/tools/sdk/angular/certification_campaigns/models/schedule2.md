# Schedule2

# Schedule2

Import this model from the entry point of its package:

```typescript
import { Schedule2 } from '@sailpoint/angular-sdk/certification_campaigns';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `string` | Determines the overall schedule cadence. In general, all time period fields smaller than the chosen type can be configured. For example, a DAILY schedule can have \'hours\' set, but not \'days\'; a WEEKLY schedule can have both \'hours\' and \'days\' set. | [default to undefined]
**months** | **(optional)** `Schedule2Months` |  | [default to undefined]
**days** | **(optional)** `Schedule2Days` |  | [default to undefined]
**hours** | `Schedule2Hours` |  | [default to undefined]
**expiration** | **(optional)** `string` | Specifies the time after which this schedule will no longer occur. | [default to undefined]
**timeZoneId** | **(optional)** `string` | The time zone to use when running the schedule. For instance, if the schedule is scheduled to run at 1AM, and this field is set to \"CST\", the schedule will run at 1AM CST. | [default to undefined]

