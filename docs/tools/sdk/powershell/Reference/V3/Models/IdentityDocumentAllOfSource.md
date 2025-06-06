---
id: identity-document-all-of-source
title: IdentityDocumentAllOfSource
pagination_label: IdentityDocumentAllOfSource
sidebar_label: IdentityDocumentAllOfSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityDocumentAllOfSource', 'IdentityDocumentAllOfSource'] 
slug: /tools/sdk/powershell/v3/models/identity-document-all-of-source
tags: ['SDK', 'Software Development Kit', 'IdentityDocumentAllOfSource', 'IdentityDocumentAllOfSource']
---


# IdentityDocumentAllOfSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of identity's source. | [optional] 
**Name** | **String** | Display name of identity's source. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityDocumentAllOfSource = Initialize-IdentityDocumentAllOfSource  -Id 2c91808b6e9e6fb8016eec1a2b6f7b5f `
 -Name ODS-HR-Employees
```

- Convert the resource to JSON
```powershell
$IdentityDocumentAllOfSource | ConvertTo-JSON
```


[[Back to top]](#) 

