# ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent

# ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent

Configuration details for the 'otel_agent' process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | Version of the 'otel_agent' process. | [required]
**path** | **str** | Path to the 'otel_agent' process. | [required]
**description** | **str** | A brief description of the 'otel_agent' process. | [required]
**restart_needed** | **bool** | Indicates whether the process needs to be restarted. | [required]
\}

## Example

```python
from sailpoint.managed_clusters.models.cluster_manual_upgrade_jobs_inner_managed_process_configuration_otel_agent import ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent

cluster_manual_upgrade_jobs_inner_managed_process_configuration_otel_agent = ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent(
version='3003',
path='sailpoint/otel_agent',
description='version of otel_agent used by the va',
restart_needed=True
)

```
[[Back to top]](#) 

