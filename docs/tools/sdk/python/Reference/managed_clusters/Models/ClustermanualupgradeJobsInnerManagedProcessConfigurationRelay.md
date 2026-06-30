---
id: clustermanualupgrade-jobs-inner-managed-process-configuration-relay
title: ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay
pagination_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay
sidebar_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay'] 
slug: /tools/sdk/python/managed-clusters/models/clustermanualupgrade-jobs-inner-managed-process-configuration-relay
tags: ['SDK', 'Software Development Kit', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay']
---

# ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay

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
from sailpoint.managed_clusters.models.clustermanualupgrade_jobs_inner_managed_process_configuration_relay import ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay

clustermanualupgrade_jobs_inner_managed_process_configuration_relay = ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay(
version='3000',
path='sailpoint/relay',
description='version of relay used by the va',
restart_needed=True
)

```
[[Back to top]](#) 

