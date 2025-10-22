---
id: v2025-auth-user-slim-response
title: AuthUserSlimResponse
pagination_label: AuthUserSlimResponse
sidebar_label: AuthUserSlimResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AuthUserSlimResponse', 'V2025AuthUserSlimResponse'] 
slug: /tools/sdk/powershell/v2025/models/auth-user-slim-response
tags: ['SDK', 'Software Development Kit', 'AuthUserSlimResponse', 'V2025AuthUserSlimResponse']
---


# AuthUserSlimResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identity ID. | [optional] 
**Uid** | **String** | Identity unique identifier. | [optional] 
**Alias** | **String** | Identity alias. | [optional] 
**DisplayName** | **String** | Identity name in display format. | [optional] 

## Examples

- Prepare the resource
```powershell
$AuthUserSlimResponse = Initialize-V2025AuthUserSlimResponse  -Id eea1c52bc51c4f7d95565f4f8d6c1e41 `
 -Uid john.doe@testmail.identitysoon.com `
 -Alias john.doe `
 -DisplayName John Doe
```

- Convert the resource to JSON
```powershell
$AuthUserSlimResponse | ConvertTo-JSON
```


[[Back to top]](#) 

