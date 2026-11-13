# ImportEntitlementsV1Request

# ImportEntitlementsV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** | The CSV file containing the source entitlements to aggregate. | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportEntitlementsV1Request = Initialize-ImportEntitlementsV1Request  -File null
```

- Convert the resource to JSON
```powershell
$ImportEntitlementsV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

