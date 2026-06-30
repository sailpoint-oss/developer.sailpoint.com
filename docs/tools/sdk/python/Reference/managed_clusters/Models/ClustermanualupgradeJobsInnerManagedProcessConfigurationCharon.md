---
id: clustermanualupgrade-jobs-inner-managed-process-configuration-charon
title: ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon
pagination_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon
sidebar_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon'] 
slug: /tools/sdk/python/managed-clusters/models/clustermanualupgrade-jobs-inner-managed-process-configuration-charon
tags: ['SDK', 'Software Development Kit', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon']
---

# ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon

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
from sailpoint.managed_clusters.models.clustermanualupgrade_jobs_inner_managed_process_configuration_charon import ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon

clustermanualupgrade_jobs_inner_managed_process_configuration_charon = ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon(
version='3047',
path='sailpoint/charon',
description='version of charon used by the va',
restart_needed=True
)

```
[[Back to top]](#) 

