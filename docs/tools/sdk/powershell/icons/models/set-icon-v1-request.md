# SetIconV1Request

# SetIconV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Image** | **System.IO.FileInfo** | file with icon. Allowed mime-types ['image/png', 'image/jpeg'] | [required]

## Examples

- Prepare the resource
```powershell
$SetIconV1Request = Initialize-SetIconV1Request  -Image [B@547e29a4
```

- Convert the resource to JSON
```powershell
$SetIconV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

