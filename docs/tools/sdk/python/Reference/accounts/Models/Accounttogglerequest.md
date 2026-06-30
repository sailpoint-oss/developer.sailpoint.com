---
id: accounttogglerequest
title: Accounttogglerequest
pagination_label: Accounttogglerequest
sidebar_label: Accounttogglerequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accounttogglerequest', 'Accounttogglerequest'] 
slug: /tools/sdk/python/accounts/models/accounttogglerequest
tags: ['SDK', 'Software Development Kit', 'Accounttogglerequest', 'Accounttogglerequest']
---

# Accounttogglerequest

Request used for account enable/disable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_verification_id** | **str** | If set, an external process validates that the user wants to proceed with this request. | [optional] 
**force_provisioning** | **bool** | If set, provisioning updates the account attribute at the source.   This option is used when the account is not synced to ensure the attribute is updated. Providing 'true' for an unlocked account will add and process 'Unlock' operation by the workflow. | [optional] 
}

## Example

```python
from sailpoint.accounts.models.accounttogglerequest import Accounttogglerequest

accounttogglerequest = Accounttogglerequest(
external_verification_id='3f9180835d2e5168015d32f890ca1581',
force_provisioning=False
)

```
[[Back to top]](#) 

