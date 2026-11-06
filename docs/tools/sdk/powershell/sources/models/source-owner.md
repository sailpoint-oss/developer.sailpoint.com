# SourceOwner

# SourceOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Owner identity's ID. | [optional] 
**Name** | **String** | Owner identity's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceOwner = Initialize-SourceOwner  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name MyName
```

- Convert the resource to JSON
```powershell
$SourceOwner | ConvertTo-JSON
```


[[Back to top]](#) 

