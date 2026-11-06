# ClusterManualUpgradeJobsInnerManagedProcessConfiguration

# ClusterManualUpgradeJobsInnerManagedProcessConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Charon** | [**ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon**](cluster-manual-upgrade-jobs-inner-managed-process-configuration-charon) |  | [optional] 
**Ccg** | [**ClusterManualUpgradeJobsInnerManagedProcessConfigurationCcg**](cluster-manual-upgrade-jobs-inner-managed-process-configuration-ccg) |  | [optional] 
**OtelAgent** | [**ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent**](cluster-manual-upgrade-jobs-inner-managed-process-configuration-otel-agent) |  | [optional] 
**Relay** | [**ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay**](cluster-manual-upgrade-jobs-inner-managed-process-configuration-relay) |  | [optional] 
**Toolbox** | [**ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox**](cluster-manual-upgrade-jobs-inner-managed-process-configuration-toolbox) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ClusterManualUpgradeJobsInnerManagedProcessConfiguration = Initialize-ClusterManualUpgradeJobsInnerManagedProcessConfiguration  -Charon null `
 -Ccg null `
 -OtelAgent null `
 -Relay null `
 -Toolbox null
```

- Convert the resource to JSON
```powershell
$ClusterManualUpgradeJobsInnerManagedProcessConfiguration | ConvertTo-JSON
```


[[Back to top]](#) 

