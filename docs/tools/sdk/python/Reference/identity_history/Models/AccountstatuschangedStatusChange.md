---
id: accountstatuschanged-status-change
title: AccountstatuschangedStatusChange
pagination_label: AccountstatuschangedStatusChange
sidebar_label: AccountstatuschangedStatusChange
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountstatuschangedStatusChange', 'AccountstatuschangedStatusChange'] 
slug: /tools/sdk/python/identity-history/models/accountstatuschanged-status-change
tags: ['SDK', 'Software Development Kit', 'AccountstatuschangedStatusChange', 'AccountstatuschangedStatusChange']
---

# AccountstatuschangedStatusChange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**previous_status** |  **Enum** [  'enabled',    'disabled',    'locked' ] | the previous status of the account | [optional] 
**new_status** |  **Enum** [  'enabled',    'disabled',    'locked' ] | the new status of the account | [optional] 
}

## Example

```python
from sailpoint.identity_history.models.accountstatuschanged_status_change import AccountstatuschangedStatusChange

accountstatuschanged_status_change = AccountstatuschangedStatusChange(
previous_status='enabled',
new_status='disabled'
)

```
[[Back to top]](#) 

