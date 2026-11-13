# ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox

# ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox

Configuration details for the 'toolbox' process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | Version of the 'toolbox' process. | [required]
**path** | **str** | Path to the 'toolbox' process. | [required]
**description** | **str** | A brief description of the 'toolbox' process. | [required]
**restart_needed** | **bool** | Indicates whether the process needs to be restarted. | [required]
\}

## Example

```python
from sailpoint.managed_clusters.models.cluster_manual_upgrade_jobs_inner_managed_process_configuration_toolbox import ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox

cluster_manual_upgrade_jobs_inner_managed_process_configuration_toolbox = ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox(
version='3004',
path='sailpoint/toolbox',
description='version of toolbox used by the va',
restart_needed=True
)

```
[[Back to top]](#) 

