---
id: v2024-cluster-manual-upgrade-jobs-inner-managed-process-configuration-relay
title: ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay
pagination_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay
sidebar_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay', 'V2024ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay'] 
slug: /tools/sdk/python/v2024/models/cluster-manual-upgrade-jobs-inner-managed-process-configuration-relay
tags: ['SDK', 'Software Development Kit', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay', 'V2024ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay']
---

# ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay

Configuration details for the 'relay' process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | Version of the 'relay' process. | [required]
**path** | **str** | Path to the 'relay' process. | [required]
**description** | **str** | A brief description of the 'relay' process. | [required]
**restart_needed** | **bool** | Indicates whether the process needs to be restarted. | [required]
}

## Example

```python
from sailpoint.v2024.models.cluster_manual_upgrade_jobs_inner_managed_process_configuration_relay import ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay

cluster_manual_upgrade_jobs_inner_managed_process_configuration_relay = ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay(
version='3000',
path='sailpoint/relay',
description='version of relay used by the va',
restart_needed=True
)

```
[[Back to top]](#) 

