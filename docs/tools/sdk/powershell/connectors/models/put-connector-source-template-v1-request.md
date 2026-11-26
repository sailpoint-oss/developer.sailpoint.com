# PutConnectorSourceTemplateV1Request

# PutConnectorSourceTemplateV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** | connector source template xml file | [required]

## Examples

- Prepare the resource
```powershell
$PutConnectorSourceTemplateV1Request = Initialize-PutConnectorSourceTemplateV1Request  -File null
```

- Convert the resource to JSON
```powershell
$PutConnectorSourceTemplateV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

