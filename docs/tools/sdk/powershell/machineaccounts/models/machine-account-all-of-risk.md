# MachineAccountAllOfRisk

# MachineAccountAllOfRisk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Score** | **Double** | Risk score. Null for Entro-only severity. | [optional] 
**Severity** |  **Enum** [  "UNKNOWN",    "LOW",    "MEDIUM",    "HIGH",    "CRITICAL" ] | Risk severity. A null stored severity can render as UNKNOWN when that behavior is enabled. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountAllOfRisk = Initialize-MachineAccountAllOfRisk  -Score 72.5 `
 -Severity HIGH
```

- Convert the resource to JSON
```powershell
$MachineAccountAllOfRisk | ConvertTo-JSON
```


[[Back to top]](#) 

