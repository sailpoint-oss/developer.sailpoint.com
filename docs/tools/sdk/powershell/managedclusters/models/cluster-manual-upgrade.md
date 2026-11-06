# ClusterManualUpgrade

# ClusterManualUpgrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Jobs** | [**[]ClusterManualUpgradeJobsInner**](cluster-manual-upgrade-jobs-inner) | List of job objects for the upgrade request. | [optional] 

## Examples

- Prepare the resource
```powershell
$ClusterManualUpgrade = Initialize-ClusterManualUpgrade  -Jobs null
```

- Convert the resource to JSON
```powershell
$ClusterManualUpgrade | ConvertTo-JSON
```


[[Back to top]](#) 

