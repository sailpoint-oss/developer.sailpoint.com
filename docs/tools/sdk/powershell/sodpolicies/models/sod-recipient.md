# SodRecipient

# SodRecipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | SOD policy recipient DTO type. | [optional] 
**Id** | **String** | SOD policy recipient's identity ID. | [optional] 
**Name** | **String** | SOD policy recipient's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SodRecipient = Initialize-SodRecipient  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$SodRecipient | ConvertTo-JSON
```


[[Back to top]](#) 

