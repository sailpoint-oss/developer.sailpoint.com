# Reminderescalationescalation

# Reminderescalationescalation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Trigger** | [**Reminderescalationtrigger**](reminderescalationtrigger) |  | [required]
**Targets** | [**[]Reminderescalationtarget**](reminderescalationtarget) |  | [required]
**Template** | **String** | Notification template key. | [required]

## Examples

- Prepare the resource
```powershell
$Reminderescalationescalation = Initialize-Reminderescalationescalation  -Trigger null `
 -Targets null `
 -Template cert-escalation-mgr
```

- Convert the resource to JSON
```powershell
$Reminderescalationescalation | ConvertTo-JSON
```


[[Back to top]](#) 

