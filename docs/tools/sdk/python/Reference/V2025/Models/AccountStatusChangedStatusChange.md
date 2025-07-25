---
id: v2025-account-status-changed-status-change
title: AccountStatusChangedStatusChange
pagination_label: AccountStatusChangedStatusChange
sidebar_label: AccountStatusChangedStatusChange
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountStatusChangedStatusChange', 'V2025AccountStatusChangedStatusChange'] 
slug: /tools/sdk/python/v2025/models/account-status-changed-status-change
tags: ['SDK', 'Software Development Kit', 'AccountStatusChangedStatusChange', 'V2025AccountStatusChangedStatusChange']
---

# AccountStatusChangedStatusChange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**previous_status** |  **Enum** [  'enabled',    'disabled',    'locked' ] | the previous status of the account | [optional] 
**new_status** |  **Enum** [  'enabled',    'disabled',    'locked' ] | the new status of the account | [optional] 
}

## Example

```python
from sailpoint.v2025.models.account_status_changed_status_change import AccountStatusChangedStatusChange

account_status_changed_status_change = AccountStatusChangedStatusChange(
previous_status='enabled',
new_status='disabled'
)

```
[[Back to top]](#) 

