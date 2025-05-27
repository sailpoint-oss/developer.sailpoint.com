---
id: v2024-password-info
title: PasswordInfo
pagination_label: PasswordInfo
sidebar_label: PasswordInfo
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordInfo', 'V2024PasswordInfo'] 
slug: /tools/sdk/powershell/v2024/models/password-info
tags: ['SDK', 'Software Development Kit', 'PasswordInfo', 'V2024PasswordInfo']
---


# PasswordInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | Identity ID | [optional] 
**SourceId** | **String** | source ID | [optional] 
**PublicKeyId** | **String** | public key ID | [optional] 
**PublicKey** | **String** | User's public key with Base64 encoding | [optional] 
**Accounts** | [**[]PasswordInfoAccount**](password-info-account) | Account info related to queried identity and source | [optional] 
**Policies** | **[]String** | Password constraints | [optional] 

## Examples

- Prepare the resource
```powershell
$PasswordInfo = Initialize-V2024PasswordInfo  -IdentityId 2c918085744fec4301746f9a5bce4605 `
 -SourceId 2c918083746f642c01746f990884012a `
 -PublicKeyId N2M1OTJiMGEtMDJlZS00ZWU3LTkyYTEtNjA5YmI5NWE3ZWVh `
 -PublicKey MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuGFkWi2J75TztpbaPKd36bJnIB3J8gZ6UcoS9oSDYsqBzPpTsfZXYaEf4Y4BKGgJIXmE/lwhwuj7mU1itdZ2qTSNFtnXA8Fn75c3UUkk+h+wdZbkuSmqlsJo3R1OnJkwkJggcAy9Jvk9jlcrNLWorpQ1w9raUvxtvfgkSdq153KxotenQ1HciSyZ0nA/Kw0UaucLnho8xdRowZs11afXGXA9IT9H6D8T6zUdtSxm0nAyH+mluma5LdTfaM50W3l/L8q56Vrqmx2pZIiwdx/0+g3Y++jV70zom0ZBkC1MmSoLMrQYG5OICNjr72f78B2PaGXfarQHqARLjKpMVt9YIQIDAQAB `
 -Accounts null `
 -Policies [passwordRepeatedChar is 3, passwordMinAlpha is 1, passwordMinLength is 5, passwordMinNumeric is 1]
```

- Convert the resource to JSON
```powershell
$PasswordInfo | ConvertTo-JSON
```


[[Back to top]](#) 

