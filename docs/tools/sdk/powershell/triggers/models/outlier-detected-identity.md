# OutlierDetectedIdentity

# OutlierDetectedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Identity's DTO type. | [required]
**Id** | **String** | Identity's unique ID. | [required]
**Name** | **String** | Identity's name. | [required]

## Examples

- Prepare the resource
```powershell
$OutlierDetectedIdentity = Initialize-OutlierDetectedIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$OutlierDetectedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

