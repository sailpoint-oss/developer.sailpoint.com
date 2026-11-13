# ImportSpConfigV1Request

# ImportSpConfigV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarData** | **System.IO.FileInfo** | JSON file containing the objects to be imported. | [required]
**Options** | [**ImportOptions**](import-options) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportSpConfigV1Request = Initialize-ImportSpConfigV1Request  -VarData null `
 -Options null
```

- Convert the resource to JSON
```powershell
$ImportSpConfigV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

