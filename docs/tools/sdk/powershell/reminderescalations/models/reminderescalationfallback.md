# Reminderescalationfallback

# Reminderescalationfallback

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Targets** | [**[]Reminderescalationtarget**](reminderescalationtarget) | Last-resort recipients for this fallback. Each entry resolves to a manager, identity, governance group, entitlement owner, or source owner. At least one target is required. | [required]
**Template** | **String** | Notification template key. | [required]

## Examples

- Prepare the resource
```powershell
$Reminderescalationfallback = Initialize-Reminderescalationfallback  -Targets null `
 -Template cert-escalation-fallback-admin
```

- Convert the resource to JSON
```powershell
$Reminderescalationfallback | ConvertTo-JSON
```


[[Back to top]](#) 

