# MachineAccountV2AllOfRisk

# MachineAccountV2AllOfRisk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Score** | **Double** | Risk score from 0 to 100. Null when only a severity has been recorded. | [optional] 
**Severity** |  **Enum** [  "UNKNOWN",    "LOW",    "MEDIUM",    "HIGH",    "CRITICAL" ] | Risk severity. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountV2AllOfRisk = Initialize-MachineAccountV2AllOfRisk  -Score 72.5 `
 -Severity HIGH
```

- Convert the resource to JSON
```powershell
$MachineAccountV2AllOfRisk | ConvertTo-JSON
```


[[Back to top]](#) 

