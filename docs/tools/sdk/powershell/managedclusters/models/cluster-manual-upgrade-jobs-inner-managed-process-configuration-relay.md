# ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay

# ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **String** | Version of the 'relay' process. | [required]
**Path** | **String** | Path to the 'relay' process. | [required]
**Description** | **String** | A brief description of the 'relay' process. | [required]
**RestartNeeded** | **Boolean** | Indicates whether the process needs to be restarted. | [required]

## Examples

- Prepare the resource
```powershell
$ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay = Initialize-ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay  -Version 3000 `
 -Path sailpoint/relay `
 -Description version of relay used by the va `
 -RestartNeeded true
```

- Convert the resource to JSON
```powershell
$ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay | ConvertTo-JSON
```


[[Back to top]](#) 

