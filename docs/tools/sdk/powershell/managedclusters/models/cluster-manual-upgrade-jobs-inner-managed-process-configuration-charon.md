# ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon

# ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **String** | Version of the 'charon' process. | [required]
**Path** | **String** | Path to the 'charon' process. | [required]
**Description** | **String** | A brief description of the 'charon' process. | [required]
**RestartNeeded** | **Boolean** | Indicates whether the process needs to be restarted. | [required]

## Examples

- Prepare the resource
```powershell
$ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon = Initialize-ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon  -Version 3047 `
 -Path sailpoint/charon `
 -Description version of charon used by the va `
 -RestartNeeded true
```

- Convert the resource to JSON
```powershell
$ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon | ConvertTo-JSON
```


[[Back to top]](#) 

