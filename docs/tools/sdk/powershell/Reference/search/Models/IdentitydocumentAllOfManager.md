---
id: identitydocument-all-of-manager
title: IdentitydocumentAllOfManager
pagination_label: IdentitydocumentAllOfManager
sidebar_label: IdentitydocumentAllOfManager
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentitydocumentAllOfManager', 'IdentitydocumentAllOfManager'] 
slug: /tools/sdk/powershell/search/models/identitydocument-all-of-manager
tags: ['SDK', 'Software Development Kit', 'IdentitydocumentAllOfManager', 'IdentitydocumentAllOfManager']
---


# IdentitydocumentAllOfManager

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of identity's manager. | [optional] 
**Name** | **String** | Name of identity's manager. | [optional] 
**DisplayName** | **String** | Display name of identity's manager. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentitydocumentAllOfManager = Initialize-IdentitydocumentAllOfManager  -Id 2c9180867dfe694b017e208e27c05799 `
 -Name Amanda.Ross `
 -DisplayName Amanda.Ross
```

- Convert the resource to JSON
```powershell
$IdentitydocumentAllOfManager | ConvertTo-JSON
```


[[Back to top]](#) 

