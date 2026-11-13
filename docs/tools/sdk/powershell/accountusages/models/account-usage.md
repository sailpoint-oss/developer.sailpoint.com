# AccountUsage

# AccountUsage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | **System.DateTime** | The first day of the month for which activity is aggregated. | [optional] 
**Count** | **Int64** | The number of days within the month that the account was active in a source. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountUsage = Initialize-AccountUsage  -Date Fri Apr 21 00:00:00 UTC 2023 `
 -Count 10
```

- Convert the resource to JSON
```powershell
$AccountUsage | ConvertTo-JSON
```


[[Back to top]](#) 

