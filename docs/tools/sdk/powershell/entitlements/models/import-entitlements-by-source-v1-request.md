# ImportEntitlementsBySourceV1Request

# ImportEntitlementsBySourceV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CsvFile** | **System.IO.FileInfo** | The CSV file containing the source entitlements to aggregate. | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportEntitlementsBySourceV1Request = Initialize-ImportEntitlementsBySourceV1Request  -CsvFile null
```

- Convert the resource to JSON
```powershell
$ImportEntitlementsBySourceV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

