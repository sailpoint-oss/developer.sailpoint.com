---
id: beta-account-toggle-request
title: AccountToggleRequest
pagination_label: AccountToggleRequest
sidebar_label: AccountToggleRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountToggleRequest', 'BetaAccountToggleRequest'] 
slug: /tools/sdk/python/beta/models/account-toggle-request
tags: ['SDK', 'Software Development Kit', 'AccountToggleRequest', 'BetaAccountToggleRequest']
---

# AccountToggleRequest

Request used for account enable/disable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_verification_id** | **str** | If set, an external process validates that the user wants to proceed with this request. | [optional] 
**force_provisioning** | **bool** | If set, provisioning updates the account attribute at the source.   This option is used when the account is not synced to ensure the attribute is updated. | [optional] 
}

## Example

```python
from sailpoint.beta.models.account_toggle_request import AccountToggleRequest

account_toggle_request = AccountToggleRequest(
external_verification_id='3f9180835d2e5168015d32f890ca1581',
force_provisioning=False
)

```
[[Back to top]](#) 

