---
id: v2025-auth-user-levels-identity-count
title: AuthUserLevelsIdentityCount
pagination_label: AuthUserLevelsIdentityCount
sidebar_label: AuthUserLevelsIdentityCount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AuthUserLevelsIdentityCount', 'V2025AuthUserLevelsIdentityCount'] 
slug: /tools/sdk/powershell/v2025/models/auth-user-levels-identity-count
tags: ['SDK', 'Software Development Kit', 'AuthUserLevelsIdentityCount', 'V2025AuthUserLevelsIdentityCount']
---


# AuthUserLevelsIdentityCount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique identifier of the user level. | [optional] 
**Count** | **Int32** | Number of identities having this user level. | [optional] 

## Examples

- Prepare the resource
```powershell
$AuthUserLevelsIdentityCount = Initialize-V2025AuthUserLevelsIdentityCount  -Id idn:access-request-administrator `
 -Count 10
```

- Convert the resource to JSON
```powershell
$AuthUserLevelsIdentityCount | ConvertTo-JSON
```


[[Back to top]](#) 

