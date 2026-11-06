# CreateFormDefinitionFileRequestV1Request

# CreateFormDefinitionFileRequestV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** | File specifying the multipart | [required]

## Examples

- Prepare the resource
```powershell
$CreateFormDefinitionFileRequestV1Request = Initialize-CreateFormDefinitionFileRequestV1Request  -File null
```

- Convert the resource to JSON
```powershell
$CreateFormDefinitionFileRequestV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

