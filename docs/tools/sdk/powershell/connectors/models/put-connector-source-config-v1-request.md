# PutConnectorSourceConfigV1Request

# PutConnectorSourceConfigV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** | connector source config xml file | [required]

## Examples

- Prepare the resource
```powershell
$PutConnectorSourceConfigV1Request = Initialize-PutConnectorSourceConfigV1Request  -File null
```

- Convert the resource to JSON
```powershell
$PutConnectorSourceConfigV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

