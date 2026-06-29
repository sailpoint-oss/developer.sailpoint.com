---
id: activityconfigurationsettings
title: Activityconfigurationsettings
pagination_label: Activityconfigurationsettings
sidebar_label: Activityconfigurationsettings
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Activityconfigurationsettings', 'Activityconfigurationsettings'] 
slug: /tools/sdk/python/data-access-security/models/activityconfigurationsettings
tags: ['SDK', 'Software Development Kit', 'Activityconfigurationsettings', 'Activityconfigurationsettings']
---

# Activityconfigurationsettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_enabled** | **bool** | Indicates whether the feature or configuration is enabled. | [optional] [default to False]
**cluster_id** | **str** | The identifier of the cluster associated with this configuration, if applicable. | [optional] 
**retention_time_period** | **int** | The time period for retaining activity logs. | [optional] 
**retention_time_type** | **str** | The type of retention period (e.g., days, months, years). | [optional] 
**exclude_users** | **[]str** | List of user identifiers to exclude from activity tracking. | [optional] 
**exclude_folders** | **[]str** | List of folder paths to exclude from activity tracking. | [optional] 
**exclude_file_extensions** | **[]str** | List of file extensions to exclude from activity tracking. | [optional] 
**exclude_actions** | **[]str** | List of actions to exclude from activity tracking. | [optional] 
}

## Example

```python
from sailpoint.data_access_security.models.activityconfigurationsettings import Activityconfigurationsettings

activityconfigurationsettings = Activityconfigurationsettings(
is_enabled=True,
cluster_id='cluster-001',
retention_time_period=30,
retention_time_type='days',
exclude_users=["user1","user2"],
exclude_folders=["/tmp","/archive"],
exclude_file_extensions=[".log",".bak"],
exclude_actions=["delete","move"]
)

```
[[Back to top]](#) 

