# Reminderescalationtrigger

# Reminderescalationtrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**triggerType** | `string` | How this escalation decides when to fire. | [default to undefined]
**cron** | **(optional)** `string` | Five-field cron expression. Required when `triggerType` is `ON_CRON`. | [default to '']
**beforeDeadLine** | **(optional)** `string` | ISO-8601 duration relative to the deadline. Used when `triggerType` is `ON_CRON`. Mutually exclusive with `activeAfter`. | [default to '']
**activeAfter** | **(optional)** `string` | ISO-8601 duration relative to workflow start. Used when `triggerType` is `ON_CRON`. Mutually exclusive with `beforeDeadLine`. | [default to '']
**maxFirings** | **(optional)** `number` | Maximum number of times an `ON_CRON` escalation fires. Null means no cap. | [default to undefined]
**count** | **(optional)** `number` | Reminder count for the current assignee. Required when `triggerType` is `AFTER_REMINDER_COUNT`. Null when `triggerType` is `ON_CRON`. | [default to undefined]
**delay** | **(optional)** `string` | ISO-8601 grace period before an `AFTER_REMINDER_COUNT` escalation fires. | [default to '']

