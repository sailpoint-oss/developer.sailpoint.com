# SourceClassificationStatusAllOfCounts

# SourceClassificationStatusAllOfCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EXPECTED** | **Int64** | total number of source accounts | [required]
**RECEIVED** | **Int64** | number of accounts that have been sent for processing (should be the same as expected when all accounts are collected) | [required]
**COMPLETED** | **Int64** | number of accounts that have been classified | [required]

## Examples

- Prepare the resource
```powershell
$SourceClassificationStatusAllOfCounts = Initialize-SourceClassificationStatusAllOfCounts  -EXPECTED 1000 `
 -RECEIVED 800 `
 -COMPLETED 500
```

- Convert the resource to JSON
```powershell
$SourceClassificationStatusAllOfCounts | ConvertTo-JSON
```


[[Back to top]](#) 

