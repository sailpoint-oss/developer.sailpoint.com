---
id: passwordinfoaccount
title: Passwordinfoaccount
pagination_label: Passwordinfoaccount
sidebar_label: Passwordinfoaccount
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Passwordinfoaccount', 'Passwordinfoaccount'] 
slug: /tools/sdk/python/password-management/models/passwordinfoaccount
tags: ['SDK', 'Software Development Kit', 'Passwordinfoaccount', 'Passwordinfoaccount']
---

# Passwordinfoaccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of the account. This is specified per account schema in the source configuration. It is used to distinguish accounts. More info can be found here https://community.sailpoint.com/t5/IdentityNow-Connectors/How-do-I-designate-an-account-attribute-as-the-Account-ID-for-a/ta-p/80350 | [optional] 
**account_name** | **str** | Display name of the account. This is specified per account schema in the source configuration. It is used to display name of the account. More info can be found here https://community.sailpoint.com/t5/IdentityNow-Connectors/How-do-I-designate-an-account-attribute-as-the-Account-Name-for/ta-p/74008 | [optional] 
}

## Example

```python
from sailpoint.password_management.models.passwordinfoaccount import Passwordinfoaccount

passwordinfoaccount = Passwordinfoaccount(
account_id='CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com',
account_name='Abby.Smith'
)

```
[[Back to top]](#) 

