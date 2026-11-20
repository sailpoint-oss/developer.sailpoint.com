# Schedule

# Schedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "DAILY",    "WEEKLY",    "MONTHLY",    "ANNUALLY",    "CALENDAR" ] | Determines the overall schedule cadence. In general, all time period fields smaller than the chosen type can be configured. For example, a DAILY schedule can have 'hours' set, but not 'days'; a WEEKLY schedule can have both 'hours' and 'days' set. | [required]
**Months** | [**Selector**](selector) |  | [optional] 
**Days** | [**Selector**](selector) |  | [optional] 
**Hours** | [**Selector**](selector) |  | [optional] 
**Expiration** | **System.DateTime** | Specifies the time after which this schedule will no longer occur. | [optional] 
**TimeZoneId** | **String** | The time zone to use when running the schedule. For instance, if the schedule is scheduled to run at 1AM, and this field is set to ""CST"", the schedule will run at 1AM CST. | [optional] 

## Examples

- Prepare the resource
```powershell
$Schedule = Initialize-Schedule  -Type DAILY `
 -Months null `
 -Days null `
 -Hours null `
 -Expiration 2025-09-15T16:00Z `
 -TimeZoneId America/Chicago
```

- Convert the resource to JSON
```powershell
$Schedule | ConvertTo-JSON
```


[[Back to top]](#) 

