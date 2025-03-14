---
id: beta-password-info-account
title: PasswordInfoAccount
pagination_label: PasswordInfoAccount
sidebar_label: PasswordInfoAccount
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PasswordInfoAccount', 'BetaPasswordInfoAccount'] 
slug: /tools/sdk/python/beta/models/password-info-account
tags: ['SDK', 'Software Development Kit', 'PasswordInfoAccount', 'BetaPasswordInfoAccount']
---

# PasswordInfoAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of the account. This is specified per account schema in the source configuration. It is used to distinguish accounts. More info can be found here https://community.sailpoint.com/t5/IdentityNow-Connectors/How-do-I-designate-an-account-attribute-as-the-Account-ID-for-a/ta-p/80350 | [optional] 
**account_name** | **str** | Display name of the account. This is specified per account schema in the source configuration. It is used to display name of the account. More info can be found here https://community.sailpoint.com/t5/IdentityNow-Connectors/How-do-I-designate-an-account-attribute-as-the-Account-Name-for/ta-p/74008 | [optional] 
}

## Example

```python
from sailpoint.beta.models.password_info_account import PasswordInfoAccount

password_info_account = PasswordInfoAccount(
account_id='CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com',
account_name='Abby.Smith'
)

```
[[Back to top]](#) 

