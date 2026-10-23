# IdentityV2Manager

# IdentityV2Manager

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the identity's manager. | [optional] 
**Name** | **String** | Display name of the identity's manager. | [optional] 
**Type** | **String** | DTO type of the identity's manager. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityV2Manager = Initialize-IdentityV2Manager  -Id 2c4180a46faadee4016fb4e018c20626 `
 -Name Robert Robinson `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$IdentityV2Manager | ConvertTo-JSON
```


[[Back to top]](#) 

