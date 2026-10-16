# CreateUploadedConfigurationV1Request

# CreateUploadedConfigurationV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarData** | **System.IO.FileInfo** | JSON file containing the objects to be imported. | [required]
**Name** | **String** | Name that will be assigned to the uploaded configuration file. | [required]

## Examples

- Prepare the resource
```powershell
$CreateUploadedConfigurationV1Request = Initialize-CreateUploadedConfigurationV1Request  -VarData null `
 -Name null
```

- Convert the resource to JSON
```powershell
$CreateUploadedConfigurationV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

