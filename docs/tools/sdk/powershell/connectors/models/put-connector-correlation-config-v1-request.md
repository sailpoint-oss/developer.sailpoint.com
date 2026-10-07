# PutConnectorCorrelationConfigV1Request

# PutConnectorCorrelationConfigV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** | connector correlation config xml file | [required]

## Examples

- Prepare the resource
```powershell
$PutConnectorCorrelationConfigV1Request = Initialize-PutConnectorCorrelationConfigV1Request  -File null
```

- Convert the resource to JSON
```powershell
$PutConnectorCorrelationConfigV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

