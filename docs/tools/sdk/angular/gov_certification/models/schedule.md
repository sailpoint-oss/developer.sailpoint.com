# Schedule

# Schedule

Import this model from the entry point of its package:

```typescript
import { Schedule } from '@sailpoint/angular-sdk/gov_certification';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `string` | Determines the overall schedule cadence. In general, all time period fields smaller than the chosen type can be configured. For example, a DAILY schedule can have \'hours\' set, but not \'days\'; a WEEKLY schedule can have both \'hours\' and \'days\' set. | [default to undefined]
**months** | **(optional)** `Selector` |  | [default to undefined]
**days** | **(optional)** `Selector` |  | [default to undefined]
**hours** | **(optional)** `Selector` |  | [default to undefined]
**expiration** | **(optional)** `string` | Specifies the time after which this schedule will no longer occur. | [default to undefined]
**timeZoneId** | **(optional)** `string` | The time zone to use when running the schedule. For instance, if the schedule is scheduled to run at 1AM, and this field is set to \"CST\", the schedule will run at 1AM CST. | [default to undefined]

