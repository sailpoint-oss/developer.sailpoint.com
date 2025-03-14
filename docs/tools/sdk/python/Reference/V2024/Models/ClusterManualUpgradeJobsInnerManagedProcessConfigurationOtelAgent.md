---
id: v2024-cluster-manual-upgrade-jobs-inner-managed-process-configuration-otel-agent
title: ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent
pagination_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent
sidebar_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent', 'V2024ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent'] 
slug: /tools/sdk/python/v2024/models/cluster-manual-upgrade-jobs-inner-managed-process-configuration-otel-agent
tags: ['SDK', 'Software Development Kit', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent', 'V2024ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent']
---

# ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent

Configuration details for the 'otel_agent' process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | Version of the 'otel_agent' process. | [required]
**path** | **str** | Path to the 'otel_agent' process. | [required]
**description** | **str** | A brief description of the 'otel_agent' process. | [required]
**restart_needed** | **bool** | Indicates whether the process needs to be restarted. | [required]
}

## Example

```python
from sailpoint.v2024.models.cluster_manual_upgrade_jobs_inner_managed_process_configuration_otel_agent import ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent

cluster_manual_upgrade_jobs_inner_managed_process_configuration_otel_agent = ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent(
version='3003',
path='sailpoint/otel_agent',
description='version of otel_agent used by the va',
restart_needed=True
)

```
[[Back to top]](#) 

