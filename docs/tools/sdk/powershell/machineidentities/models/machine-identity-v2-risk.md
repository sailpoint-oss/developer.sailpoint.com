# MachineIdentityV2Risk

# MachineIdentityV2Risk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Score** | **Double** | Normalised risk score 0.0-100.0. | [optional] 
**Severity** |  **Enum** [  "CRITICAL",    "HIGH",    "MEDIUM",    "LOW" ] | Risk severity bucket. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineIdentityV2Risk = Initialize-MachineIdentityV2Risk  -Score 72.5 `
 -Severity HIGH
```

- Convert the resource to JSON
```powershell
$MachineIdentityV2Risk | ConvertTo-JSON
```


[[Back to top]](#) 

