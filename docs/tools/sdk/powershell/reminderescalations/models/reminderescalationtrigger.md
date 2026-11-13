# Reminderescalationtrigger

# Reminderescalationtrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TriggerType** |  **Enum** [  "ON_CRON",    "AFTER_REMINDER_COUNT" ] | How this escalation decides when to fire. | [required]
**Cron** | **String** | Five-field cron expression. Required when `triggerType` is `ON_CRON`. | [optional] [default to ""]
**BeforeDeadLine** | **String** | ISO-8601 duration relative to the deadline. Used when `triggerType` is `ON_CRON`. Mutually exclusive with `activeAfter`. | [optional] [default to ""]
**ActiveAfter** | **String** | ISO-8601 duration relative to workflow start. Used when `triggerType` is `ON_CRON`. Mutually exclusive with `beforeDeadLine`. | [optional] [default to ""]
**MaxFirings** | **Int32** | Maximum number of times an `ON_CRON` escalation fires. Null means no cap. | [optional] 
**Count** | **Int32** | Reminder count for the current assignee. Required when `triggerType` is `AFTER_REMINDER_COUNT`. Null when `triggerType` is `ON_CRON`. | [optional] 
**Delay** | **String** | ISO-8601 grace period before an `AFTER_REMINDER_COUNT` escalation fires. | [optional] [default to ""]

## Examples

- Prepare the resource
```powershell
$Reminderescalationtrigger = Initialize-Reminderescalationtrigger  -TriggerType AFTER_REMINDER_COUNT `
 -Cron 0 9 * * 1 `
 -BeforeDeadLine P7D `
 -ActiveAfter P14D `
 -MaxFirings 3 `
 -Count 3 `
 -Delay PT12H
```

- Convert the resource to JSON
```powershell
$Reminderescalationtrigger | ConvertTo-JSON
```


[[Back to top]](#) 

