---
id: v2025-identity-document-all-of-manager
title: IdentityDocumentAllOfManager
pagination_label: IdentityDocumentAllOfManager
sidebar_label: IdentityDocumentAllOfManager
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityDocumentAllOfManager', 'V2025IdentityDocumentAllOfManager'] 
slug: /tools/sdk/powershell/v2025/models/identity-document-all-of-manager
tags: ['SDK', 'Software Development Kit', 'IdentityDocumentAllOfManager', 'V2025IdentityDocumentAllOfManager']
---


# IdentityDocumentAllOfManager

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of identity's manager. | [optional] 
**Name** | **String** | Name of identity's manager. | [optional] 
**DisplayName** | **String** | Display name of identity's manager. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityDocumentAllOfManager = Initialize-PSSailpoint.V2025IdentityDocumentAllOfManager  -Id 2c9180867dfe694b017e208e27c05799 `
 -Name Amanda.Ross `
 -DisplayName Amanda.Ross
```

- Convert the resource to JSON
```powershell
$IdentityDocumentAllOfManager | ConvertTo-JSON
```


[[Back to top]](#) 

