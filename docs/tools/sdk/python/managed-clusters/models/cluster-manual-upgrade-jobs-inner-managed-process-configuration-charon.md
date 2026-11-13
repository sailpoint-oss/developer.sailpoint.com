# ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon

# ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon

Configuration details for the 'charon' process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | Version of the 'charon' process. | [required]
**path** | **str** | Path to the 'charon' process. | [required]
**description** | **str** | A brief description of the 'charon' process. | [required]
**restart_needed** | **bool** | Indicates whether the process needs to be restarted. | [required]
\}

## Example

```python
from sailpoint.managed_clusters.models.cluster_manual_upgrade_jobs_inner_managed_process_configuration_charon import ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon

cluster_manual_upgrade_jobs_inner_managed_process_configuration_charon = ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon(
version='3047',
path='sailpoint/charon',
description='version of charon used by the va',
restart_needed=True
)

```
[[Back to top]](#) 

