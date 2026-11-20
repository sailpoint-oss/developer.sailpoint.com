# QueuedCheckConfigDetails

# QueuedCheckConfigDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProvisioningStatusCheckIntervalMinutes** | **String** | Interval in minutes between status checks | [required]
**ProvisioningMaxStatusCheckDays** | **String** | Maximum number of days to check | [required]

## Examples

- Prepare the resource
```powershell
$QueuedCheckConfigDetails = Initialize-QueuedCheckConfigDetails  -ProvisioningStatusCheckIntervalMinutes 30 `
 -ProvisioningMaxStatusCheckDays 2
```

- Convert the resource to JSON
```powershell
$QueuedCheckConfigDetails | ConvertTo-JSON
```


[[Back to top]](#) 

