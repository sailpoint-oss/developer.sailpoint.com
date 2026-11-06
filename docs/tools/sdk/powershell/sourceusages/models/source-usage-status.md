# SourceUsageStatus

# SourceUsageStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** |  **Enum** [  "COMPLETE",    "INCOMPLETE" ] | Source Usage Status. Acceptable values are:   - COMPLETE       - This status means that an activity data source has been setup and usage insights are available for the source.   - INCOMPLETE       - This status means that an activity data source has not been setup and usage insights are not available for the source. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceUsageStatus = Initialize-SourceUsageStatus  -Status COMPLETE
```

- Convert the resource to JSON
```powershell
$SourceUsageStatus | ConvertTo-JSON
```


[[Back to top]](#) 

