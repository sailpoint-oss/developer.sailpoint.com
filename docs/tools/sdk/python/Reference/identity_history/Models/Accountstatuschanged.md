---
id: accountstatuschanged
title: Accountstatuschanged
pagination_label: Accountstatuschanged
sidebar_label: Accountstatuschanged
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountstatuschanged', 'Accountstatuschanged'] 
slug: /tools/sdk/python/identity-history/models/accountstatuschanged
tags: ['SDK', 'Software Development Kit', 'Accountstatuschanged', 'Accountstatuschanged']
---

# Accountstatuschanged


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_type** | **str** | the event type | [optional] 
**identity_id** | **str** | the identity id | [optional] 
**date_time** | **str** | the date of event | [optional] 
**account** | [**AccountstatuschangedAccount**](accountstatuschanged-account) |  | [required]
**status_change** | [**AccountstatuschangedStatusChange**](accountstatuschanged-status-change) |  | [required]
}

## Example

```python
from sailpoint.identity_history.models.accountstatuschanged import Accountstatuschanged

accountstatuschanged = Accountstatuschanged(
event_type='AccountStatusChanged',
identity_id='8a80828f643d484f01643e14202e206f',
date_time='2019-03-08T22:37:33.901Z',
account=sailpoint.identity_history.models.accountstatuschanged_account.accountstatuschanged_account(
                    id = '2c91808a77ff216301782327a50f09bf', 
                    native_identity = 'dr.arden.ogahn.d', 
                    display_name = 'Adam Archer', 
                    source_id = '8a80828f643d484f01643e14202e206f', 
                    source_name = 'JDBC Entitlements Source', 
                    entitlement_count = 2, 
                    access_type = 'account', ),
status_change=sailpoint.identity_history.models.accountstatuschanged_status_change.accountstatuschanged_statusChange(
                    previous_status = 'enabled', 
                    new_status = 'disabled', )
)

```
[[Back to top]](#) 

