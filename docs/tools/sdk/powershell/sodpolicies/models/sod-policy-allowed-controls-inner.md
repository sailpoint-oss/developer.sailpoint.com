# SodPolicyAllowedControlsInner

# SodPolicyAllowedControlsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "COMPENSATING_CONTROL" ] | Control reference type. | [optional] 
**Id** | **String** | Control reference ID. | [optional] 
**Name** | **String** | Control reference name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SodPolicyAllowedControlsInner = Initialize-SodPolicyAllowedControlsInner  -Type COMPENSATING_CONTROL `
 -Id 2c9180a46faadee4016fb4e018 `
 -Name Mitigating Control 1
```

- Convert the resource to JSON
```powershell
$SodPolicyAllowedControlsInner | ConvertTo-JSON
```


[[Back to top]](#) 

