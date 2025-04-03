---
id: v2025-cluster-manual-upgrade-jobs-inner-managed-process-configuration-charon
title: ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon
pagination_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon
sidebar_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon', 'V2025ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon'] 
slug: /tools/sdk/python/v2025/models/cluster-manual-upgrade-jobs-inner-managed-process-configuration-charon
tags: ['SDK', 'Software Development Kit', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon', 'V2025ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon']
---

# ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon

Configuration details for the 'charon' process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | Version of the 'charon' process. | [required]
**path** | **str** | Path to the 'charon' process. | [required]
**description** | **str** | A brief description of the 'charon' process. | [required]
**restart_needed** | **bool** | Indicates whether the process needs to be restarted. | [required]
}

## Example

```python
from sailpoint.v2025.models.cluster_manual_upgrade_jobs_inner_managed_process_configuration_charon import ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon

cluster_manual_upgrade_jobs_inner_managed_process_configuration_charon = ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon(
version='3047',
path='sailpoint/charon',
description='version of charon used by the va',
restart_needed=True
)

```
[[Back to top]](#) 

