# Reminderescalationruleset

# Reminderescalationruleset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reminders** | [**[]Reminderescalationreminder**](reminderescalationreminder) | Independent reminder schedules. Every entry must use the same predicate, either `beforeDeadLine` or `activeAfter`. | [optional] 
**Escalations** | [**[]Reminderescalationescalation**](reminderescalationescalation) | Independent escalations. Each entry has its own trigger. | [optional] 
**Fallback** | [**Reminderescalationfallback**](reminderescalationfallback) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Reminderescalationruleset = Initialize-Reminderescalationruleset  -Reminders null `
 -Escalations null `
 -Fallback null
```

- Convert the resource to JSON
```powershell
$Reminderescalationruleset | ConvertTo-JSON
```


[[Back to top]](#) 

