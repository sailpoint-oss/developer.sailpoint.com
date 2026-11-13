# ImportAccountsV1Request

# ImportAccountsV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** | The CSV file containing the source accounts to aggregate. | [optional] 
**DisableOptimization** | **String** | Use this flag to reprocess every account whether or not the data has changed. | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportAccountsV1Request = Initialize-ImportAccountsV1Request  -File null `
 -DisableOptimization true
```

- Convert the resource to JSON
```powershell
$ImportAccountsV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

