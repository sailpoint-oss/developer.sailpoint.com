# MachineIdentityDailyCounts

# MachineIdentityDailyCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarFrom** | **System.DateTime** | First day (UTC) of the window, inclusive. | [optional] 
**To** | **System.DateTime** | Last day (UTC) of the window, inclusive. This is always the day before the current UTC date. | [optional] 
**Days** | [**[]MachineIdentityDailyCountsDay**](machine-identity-daily-counts-day) | One entry for each calendar day in the window, in ascending order. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineIdentityDailyCounts = Initialize-MachineIdentityDailyCounts  -VarFrom Wed May 27 00:00:00 UTC 2026 `
 -To Thu Jun 25 00:00:00 UTC 2026 `
 -Days null
```

- Convert the resource to JSON
```powershell
$MachineIdentityDailyCounts | ConvertTo-JSON
```


[[Back to top]](#) 

