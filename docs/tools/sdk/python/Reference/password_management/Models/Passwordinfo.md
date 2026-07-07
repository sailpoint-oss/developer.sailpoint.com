---
id: passwordinfo
title: Passwordinfo
pagination_label: Passwordinfo
sidebar_label: Passwordinfo
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Passwordinfo', 'Passwordinfo'] 
slug: /tools/sdk/python/password-management/models/passwordinfo
tags: ['SDK', 'Software Development Kit', 'Passwordinfo', 'Passwordinfo']
---

# Passwordinfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | Identity ID | [optional] 
**source_id** | **str** | source ID | [optional] 
**public_key_id** | **str** | public key ID | [optional] 
**public_key** | **str** | User's public key with Base64 encoding | [optional] 
**accounts** | [**[]Passwordinfoaccount**](passwordinfoaccount) | Account info related to queried identity and source | [optional] 
**policies** | **[]str** | Password constraints | [optional] 
}

## Example

```python
from sailpoint.password_management.models.passwordinfo import Passwordinfo

passwordinfo = Passwordinfo(
identity_id='2c918085744fec4301746f9a5bce4605',
source_id='2c918083746f642c01746f990884012a',
public_key_id='N2M1OTJiMGEtMDJlZS00ZWU3LTkyYTEtNjA5YmI5NWE3ZWVh',
public_key='MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuGFkWi2J75TztpbaPKd36bJnIB3J8gZ6UcoS9oSDYsqBzPpTsfZXYaEf4Y4BKGgJIXmE/lwhwuj7mU1itdZ2qTSNFtnXA8Fn75c3UUkk+h+wdZbkuSmqlsJo3R1OnJkwkJggcAy9Jvk9jlcrNLWorpQ1w9raUvxtvfgkSdq153KxotenQ1HciSyZ0nA/Kw0UaucLnho8xdRowZs11afXGXA9IT9H6D8T6zUdtSxm0nAyH+mluma5LdTfaM50W3l/L8q56Vrqmx2pZIiwdx/0+g3Y++jV70zom0ZBkC1MmSoLMrQYG5OICNjr72f78B2PaGXfarQHqARLjKpMVt9YIQIDAQAB',
accounts=[
                    sailpoint.password_management.models.password_info_account.Password Info Account(
                        account_id = 'CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com', 
                        account_name = 'Abby.Smith', )
                    ],
policies=["passwordRepeatedChar is 3","passwordMinAlpha is 1","passwordMinLength is 5","passwordMinNumeric is 1"]
)

```
[[Back to top]](#) 

