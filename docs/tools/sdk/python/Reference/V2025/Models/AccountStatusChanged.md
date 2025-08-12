---
id: v2025-account-status-changed
title: AccountStatusChanged
pagination_label: AccountStatusChanged
sidebar_label: AccountStatusChanged
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountStatusChanged', 'V2025AccountStatusChanged'] 
slug: /tools/sdk/python/v2025/models/account-status-changed
tags: ['SDK', 'Software Development Kit', 'AccountStatusChanged', 'V2025AccountStatusChanged']
---

# AccountStatusChanged


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_type** | **str** | the event type | [optional] 
**identity_id** | **str** | the identity id | [optional] 
**date_time** | **str** | the date of event | [optional] 
**account** | [**AccountStatusChangedAccount**](account-status-changed-account) |  | [required]
**status_change** | [**AccountStatusChangedStatusChange**](account-status-changed-status-change) |  | [required]
}

## Example

```python
from sailpoint.v2025.models.account_status_changed import AccountStatusChanged

account_status_changed = AccountStatusChanged(
event_type='AccountStatusChanged',
identity_id='8a80828f643d484f01643e14202e206f',
date_time='2019-03-08T22:37:33.901Z',
account=sailpoint.v2025.models.account_status_changed_account.AccountStatusChanged_account(
                    id = '2c91808a77ff216301782327a50f09bf', 
                    native_identity = 'dr.arden.ogahn.d', 
                    display_name = 'Adam Archer', 
                    source_id = '8a80828f643d484f01643e14202e206f', 
                    source_name = 'JDBC Entitlements Source', 
                    entitlement_count = 2, 
                    access_type = 'account', ),
status_change=sailpoint.v2025.models.account_status_changed_status_change.AccountStatusChanged_statusChange(
                    previous_status = 'enabled', 
                    new_status = 'disabled', )
)

```
[[Back to top]](#) 

