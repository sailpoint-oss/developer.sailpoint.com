---
id: managedcluster-update-preferences
title: ManagedclusterUpdatePreferences
pagination_label: ManagedclusterUpdatePreferences
sidebar_label: ManagedclusterUpdatePreferences
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManagedclusterUpdatePreferences', 'ManagedclusterUpdatePreferences'] 
slug: /tools/sdk/python/managed-clusters/models/managedcluster-update-preferences
tags: ['SDK', 'Software Development Kit', 'ManagedclusterUpdatePreferences', 'ManagedclusterUpdatePreferences']
---

# ManagedclusterUpdatePreferences

The preference for applying updates for the cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**process_groups** | **str** | The processGroups for updatePreferences | [optional] 
**update_state** |  **Enum** [  'AUTO',    'DISABLED' ] | The current updateState for the cluster | [optional] 
**notification_email** | **str** | The mail id to which new releases will be notified | [optional] 
}

## Example

```python
from sailpoint.managed_clusters.models.managedcluster_update_preferences import ManagedclusterUpdatePreferences

managedcluster_update_preferences = ManagedclusterUpdatePreferences(
process_groups='processGroup1',
update_state='DISABLED',
notification_email='test@mail.com'
)

```
[[Back to top]](#) 

