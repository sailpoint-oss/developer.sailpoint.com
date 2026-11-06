# ScheduledActionResponseContentBackupOptionsObjectOptionsValue

# ScheduledActionResponseContentBackupOptionsObjectOptionsValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludedNames** | **[]String** | Set of names to be included. | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduledActionResponseContentBackupOptionsObjectOptionsValue = Initialize-ScheduledActionResponseContentBackupOptionsObjectOptionsValue  -IncludedNames ["Admin Role","User Role"]
```

- Convert the resource to JSON
```powershell
$ScheduledActionResponseContentBackupOptionsObjectOptionsValue | ConvertTo-JSON
```


[[Back to top]](#) 

