---
id: v2025-password-info
title: PasswordInfo
pagination_label: PasswordInfo
sidebar_label: PasswordInfo
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PasswordInfo', 'V2025PasswordInfo'] 
slug: /tools/sdk/python/v2025/models/password-info
tags: ['SDK', 'Software Development Kit', 'PasswordInfo', 'V2025PasswordInfo']
---

# PasswordInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | Identity ID | [optional] 
**source_id** | **str** | source ID | [optional] 
**public_key_id** | **str** | public key ID | [optional] 
**public_key** | **str** | User's public key with Base64 encoding | [optional] 
**accounts** | [**[]PasswordInfoAccount**](password-info-account) | Account info related to queried identity and source | [optional] 
**policies** | **[]str** | Password constraints | [optional] 
}

## Example

```python
from sailpoint.v2025.models.password_info import PasswordInfo

password_info = PasswordInfo(
identity_id='2c918085744fec4301746f9a5bce4605',
source_id='2c918083746f642c01746f990884012a',
public_key_id='N2M1OTJiMGEtMDJlZS00ZWU3LTkyYTEtNjA5YmI5NWE3ZWVh',
public_key='MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuGFkWi2J75TztpbaPKd36bJnIB3J8gZ6UcoS9oSDYsqBzPpTsfZXYaEf4Y4BKGgJIXmE/lwhwuj7mU1itdZ2qTSNFtnXA8Fn75c3UUkk+h+wdZbkuSmqlsJo3R1OnJkwkJggcAy9Jvk9jlcrNLWorpQ1w9raUvxtvfgkSdq153KxotenQ1HciSyZ0nA/Kw0UaucLnho8xdRowZs11afXGXA9IT9H6D8T6zUdtSxm0nAyH+mluma5LdTfaM50W3l/L8q56Vrqmx2pZIiwdx/0+g3Y++jV70zom0ZBkC1MmSoLMrQYG5OICNjr72f78B2PaGXfarQHqARLjKpMVt9YIQIDAQAB',
accounts=[
                    sailpoint.v2025.models.password_info_account.PasswordInfoAccount(
                        account_id = 'CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com', 
                        account_name = 'Abby.Smith', )
                    ],
policies=[passwordRepeatedChar is 3, passwordMinAlpha is 1, passwordMinLength is 5, passwordMinNumeric is 1]
)

```
[[Back to top]](#) 

