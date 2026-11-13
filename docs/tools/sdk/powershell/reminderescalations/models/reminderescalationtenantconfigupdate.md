# Reminderescalationtenantconfigupdate

# Reminderescalationtenantconfigupdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rules** | [**Reminderescalationruleset**](reminderescalationruleset) |  | [required]
**Revision** | **Int32** | Revision from a prior read of this ruleset. | [required]

## Examples

- Prepare the resource
```powershell
$Reminderescalationtenantconfigupdate = Initialize-Reminderescalationtenantconfigupdate  -Rules null `
 -Revision 1
```

- Convert the resource to JSON
```powershell
$Reminderescalationtenantconfigupdate | ConvertTo-JSON
```


[[Back to top]](#) 

