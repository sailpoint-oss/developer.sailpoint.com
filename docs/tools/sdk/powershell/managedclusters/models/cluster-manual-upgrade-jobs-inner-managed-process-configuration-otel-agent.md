# ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent

# ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **String** | Version of the 'otel_agent' process. | [required]
**Path** | **String** | Path to the 'otel_agent' process. | [required]
**Description** | **String** | A brief description of the 'otel_agent' process. | [required]
**RestartNeeded** | **Boolean** | Indicates whether the process needs to be restarted. | [required]

## Examples

- Prepare the resource
```powershell
$ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent = Initialize-ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent  -Version 3003 `
 -Path sailpoint/otel_agent `
 -Description version of otel_agent used by the va `
 -RestartNeeded true
```

- Convert the resource to JSON
```powershell
$ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent | ConvertTo-JSON
```


[[Back to top]](#) 

