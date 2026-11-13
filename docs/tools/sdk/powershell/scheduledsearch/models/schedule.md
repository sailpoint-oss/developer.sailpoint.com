# Schedule

# Schedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **ScheduleType** |  | [required]
**Months** | [**ScheduleMonths**](schedule-months) |  | [optional] 
**Days** | [**ScheduleDays**](schedule-days) |  | [optional] 
**Hours** | [**ScheduleHours**](schedule-hours) |  | [required]
**Expiration** | **System.DateTime** | A date-time in ISO-8601 format | [optional] 
**TimeZoneId** | **String** | The canonical TZ identifier the schedule will run in (ex. America/New_York).  If no timezone is specified, the org's default timezone is used. | [optional] 

## Examples

- Prepare the resource
```powershell
$Schedule = Initialize-Schedule  -Type null `
 -Months null `
 -Days null `
 -Hours null `
 -Expiration 2018-06-25T20:22:28.104Z `
 -TimeZoneId America/Chicago
```

- Convert the resource to JSON
```powershell
$Schedule | ConvertTo-JSON
```


[[Back to top]](#) 

