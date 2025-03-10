---
id: v2024-account-status-changed
title: AccountStatusChanged
pagination_label: AccountStatusChanged
sidebar_label: AccountStatusChanged
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountStatusChanged', 'V2024AccountStatusChanged'] 
slug: /tools/sdk/python/v2024/models/account-status-changed
tags: ['SDK', 'Software Development Kit', 'AccountStatusChanged', 'V2024AccountStatusChanged']
---

# AccountStatusChanged


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_type** | **str** | the event type | [optional] 
**identity_id** | **str** | the identity id | [optional] 
**dt** | **str** | the date of event | [optional] 
**account** | [**AccountStatusChangedAccount**](account-status-changed-account) |  | [optional] 
**status_change** | [**AccountStatusChangedStatusChange**](account-status-changed-status-change) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.account_status_changed import AccountStatusChanged

account_status_changed = AccountStatusChanged(
event_type='',
identity_id='',
dt='',
account=sailpoint.v2024.models.account_status_changed_account.AccountStatusChanged_account(
                    id = '', 
                    native_identity = '', 
                    display_name = '', 
                    source_id = '', 
                    source_name = '', 
                    entitlement_count = 56, 
                    access_type = '', ),
status_change=sailpoint.v2024.models.account_status_changed_status_change.AccountStatusChanged_statusChange(
                    previous_status = 'enabled', 
                    new_status = 'enabled', )
)

```
[[Back to top]](#) 

