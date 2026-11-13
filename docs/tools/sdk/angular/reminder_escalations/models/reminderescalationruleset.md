# Reminderescalationruleset

# Reminderescalationruleset

Import this model from the entry point of its package:

```typescript
import { Reminderescalationruleset } from '@sailpoint/angular-sdk/reminder_escalations';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reminders** | **(optional)** `Array<Reminderescalationreminder>` | Independent reminder schedules. Every entry must use the same predicate, either `beforeDeadLine` or `activeAfter`. | [default to undefined]
**escalations** | **(optional)** `Array<Reminderescalationescalation>` | Independent escalations. Each entry has its own trigger. | [default to undefined]
**fallback** | **(optional)** `Reminderescalationfallback` |  | [default to undefined]

