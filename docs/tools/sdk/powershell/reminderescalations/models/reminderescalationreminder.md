# Reminderescalationreminder

# Reminderescalationreminder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | **String** | Five-field cron expression, evaluated in UTC. | [required]
**BeforeDeadLine** | **String** | ISO-8601 duration. The reminder is active when `(deadline - now) <= beforeDeadLine`. A negative duration means the reminder starts after the deadline, for example `-P14D`. Mutually exclusive with `activeAfter`.  | [optional] [default to ""]
**ActiveAfter** | **String** | ISO-8601 duration. The reminder is active when `(now - workflowStart) >= activeAfter`. Mutually exclusive with `beforeDeadLine`.  | [optional] [default to ""]
**Template** | **String** | Notification template key. | [required]
**MaxFirings** | **Int32** | Maximum number of times this reminder fires before it deactivates. Null means the reminder keeps firing while its predicate is active. | [optional] 

## Examples

- Prepare the resource
```powershell
$Reminderescalationreminder = Initialize-Reminderescalationreminder  -Cron 0 9 * * * `
 -BeforeDeadLine P7D `
 -ActiveAfter P14D `
 -Template cert-reminder-daily `
 -MaxFirings 5
```

- Convert the resource to JSON
```powershell
$Reminderescalationreminder | ConvertTo-JSON
```


[[Back to top]](#) 

