# DeleteNonEmployeeRecordsInBulkV1Request

# DeleteNonEmployeeRecordsInBulkV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | List of non-employee ids. | [required]

## Examples

- Prepare the resource
```powershell
$DeleteNonEmployeeRecordsInBulkV1Request = Initialize-DeleteNonEmployeeRecordsInBulkV1Request  -Ids ["2b838de9-db9b-abcf-e646-d4f274ad4238","2d838de9-db9b-abcf-e646-d4f274ad4238"]
```

- Convert the resource to JSON
```powershell
$DeleteNonEmployeeRecordsInBulkV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

