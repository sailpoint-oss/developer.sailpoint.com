# ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox

# ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **String** | Version of the 'toolbox' process. | [required]
**Path** | **String** | Path to the 'toolbox' process. | [required]
**Description** | **String** | A brief description of the 'toolbox' process. | [required]
**RestartNeeded** | **Boolean** | Indicates whether the process needs to be restarted. | [required]

## Examples

- Prepare the resource
```powershell
$ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox = Initialize-ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox  -Version 3004 `
 -Path sailpoint/toolbox `
 -Description version of toolbox used by the va `
 -RestartNeeded true
```

- Convert the resource to JSON
```powershell
$ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox | ConvertTo-JSON
```


[[Back to top]](#) 

