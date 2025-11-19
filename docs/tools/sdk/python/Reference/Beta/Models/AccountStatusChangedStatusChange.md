---
id: beta-account-status-changed-status-change
title: AccountStatusChangedStatusChange
pagination_label: AccountStatusChangedStatusChange
sidebar_label: AccountStatusChangedStatusChange
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountStatusChangedStatusChange', 'BetaAccountStatusChangedStatusChange'] 
slug: /tools/sdk/python/beta/models/account-status-changed-status-change
tags: ['SDK', 'Software Development Kit', 'AccountStatusChangedStatusChange', 'BetaAccountStatusChangedStatusChange']
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
from sailpoint.beta.models.account_status_changed_status_change import AccountStatusChangedStatusChange

account_status_changed_status_change = AccountStatusChangedStatusChange(
previous_status='enabled',
new_status='disabled'
)

```
[[Back to top]](#) 

