# IdentityManagerRef

# IdentityManagerRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity's manager | [optional] 
**Id** | **String** | ID of identity's manager | [optional] 
**Name** | **String** | Human-readable display name of identity's manager | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityManagerRef = Initialize-IdentityManagerRef  -Type IDENTITY `
 -Id 2c4180a46faadee4016fb4e018c20626 `
 -Name Robert Robinson
```

- Convert the resource to JSON
```powershell
$IdentityManagerRef | ConvertTo-JSON
```


[[Back to top]](#) 

