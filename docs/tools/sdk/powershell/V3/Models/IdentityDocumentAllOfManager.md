---
id: identity-document-all-of-manager
title: IdentityDocumentAllOfManager
pagination_label: IdentityDocumentAllOfManager
sidebar_label: IdentityDocumentAllOfManager
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityDocumentAllOfManager'] 
slug: /tools/sdk/powershell/v3/models/identity-document-all-of-manager
tags: ['SDK', 'Software Development Kit', 'IdentityDocumentAllOfManager']
---


# IdentityDocumentAllOfManager

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | ID of identity&#39;s manager. | [optional] 
**Name** |  Pointer to **String** | Name of identity&#39;s manager. | [optional] 
**DisplayName** |  Pointer to **String** | Display name of identity&#39;s manager. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityDocumentAllOfManager = Initialize-IdentityDocumentAllOfManager  -Id 2c9180867dfe694b017e208e27c05799 `
 -Name Amanda.Ross `
 -DisplayName Amanda.Ross
```

- Convert the resource to JSON
```powershell
$IdentityDocumentAllOfManager | ConvertTo-JSON
```


[[Back to top]](#) 

