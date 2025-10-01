---
id: v2025-user-level-request
title: UserLevelRequest
pagination_label: UserLevelRequest
sidebar_label: UserLevelRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UserLevelRequest', 'V2025UserLevelRequest'] 
slug: /tools/sdk/powershell/v2025/models/user-level-request
tags: ['SDK', 'Software Development Kit', 'UserLevelRequest', 'V2025UserLevelRequest']
---


# UserLevelRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the user level. | [required]
**Description** | **String** | A brief description of the user level. | [required]
**Owner** | [**PublicIdentity**](public-identity) |  | [required]
**RightSets** | **[]String** | A list of rights associated with the user level. | [optional] 

## Examples

- Prepare the resource
```powershell
$UserLevelRequest = Initialize-V2025UserLevelRequest  -Name Custom User Level Name `
 -Description This is a description of the custom user level. `
 -Owner null `
 -RightSets [idn:ui-right-set-list-read-example, idn:ui-right-set-write-example]
```

- Convert the resource to JSON
```powershell
$UserLevelRequest | ConvertTo-JSON
```


[[Back to top]](#) 

