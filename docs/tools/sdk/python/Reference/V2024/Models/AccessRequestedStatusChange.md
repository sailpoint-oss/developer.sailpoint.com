---
id: v2024-access-requested-status-change
title: AccessRequestedStatusChange
pagination_label: AccessRequestedStatusChange
sidebar_label: AccessRequestedStatusChange
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestedStatusChange', 'V2024AccessRequestedStatusChange'] 
slug: /tools/sdk/python/v2024/models/access-requested-status-change
tags: ['SDK', 'Software Development Kit', 'AccessRequestedStatusChange', 'V2024AccessRequestedStatusChange']
---

# AccessRequestedStatusChange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**previous_status** |  **Enum** [  'enabled',    'disabled',    'locked' ] | the previous status of the account | [optional] 
**new_status** |  **Enum** [  'enabled',    'disabled',    'locked' ] | the new status of the account | [optional] 
}

## Example

```python
from sailpoint.v2024.models.access_requested_status_change import AccessRequestedStatusChange

access_requested_status_change = AccessRequestedStatusChange(
previous_status='enabled',
new_status='disabled'
)

```
[[Back to top]](#) 

