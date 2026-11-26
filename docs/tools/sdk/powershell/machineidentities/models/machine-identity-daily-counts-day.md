# MachineIdentityDailyCountsDay

# MachineIdentityDailyCountsDay

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Day** | **System.DateTime** | Calendar day (UTC) the counts were recorded for. | [optional] 
**Metrics** | [**[]MachineIdentityDailyCountMetric**](machine-identity-daily-count-metric) | Counts for each entity type and subtype. The array is empty when no counts were recorded for the day. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineIdentityDailyCountsDay = Initialize-MachineIdentityDailyCountsDay  -Day Thu Jun 25 00:00:00 UTC 2026 `
 -Metrics null
```

- Convert the resource to JSON
```powershell
$MachineIdentityDailyCountsDay | ConvertTo-JSON
```


[[Back to top]](#) 

