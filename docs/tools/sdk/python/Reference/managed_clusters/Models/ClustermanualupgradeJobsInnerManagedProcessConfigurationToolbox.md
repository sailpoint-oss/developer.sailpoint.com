---
id: clustermanualupgrade-jobs-inner-managed-process-configuration-toolbox
title: ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox
pagination_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox
sidebar_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox'] 
slug: /tools/sdk/python/managed-clusters/models/clustermanualupgrade-jobs-inner-managed-process-configuration-toolbox
tags: ['SDK', 'Software Development Kit', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox']
---

# ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox

Configuration details for the 'toolbox' process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | Version of the 'toolbox' process. | [required]
**path** | **str** | Path to the 'toolbox' process. | [required]
**description** | **str** | A brief description of the 'toolbox' process. | [required]
**restart_needed** | **bool** | Indicates whether the process needs to be restarted. | [required]
}

## Example

```python
from sailpoint.managed_clusters.models.clustermanualupgrade_jobs_inner_managed_process_configuration_toolbox import ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox

clustermanualupgrade_jobs_inner_managed_process_configuration_toolbox = ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox(
version='3004',
path='sailpoint/toolbox',
description='version of toolbox used by the va',
restart_needed=True
)

```
[[Back to top]](#) 

