---
id: identitydocument-all-of-source
title: IdentitydocumentAllOfSource
pagination_label: IdentitydocumentAllOfSource
sidebar_label: IdentitydocumentAllOfSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentitydocumentAllOfSource', 'IdentitydocumentAllOfSource'] 
slug: /tools/sdk/powershell/search/models/identitydocument-all-of-source
tags: ['SDK', 'Software Development Kit', 'IdentitydocumentAllOfSource', 'IdentitydocumentAllOfSource']
---


# IdentitydocumentAllOfSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of identity's source. | [optional] 
**Name** | **String** | Display name of identity's source. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentitydocumentAllOfSource = Initialize-IdentitydocumentAllOfSource  -Id 2c91808b6e9e6fb8016eec1a2b6f7b5f `
 -Name ODS-HR-Employees
```

- Convert the resource to JSON
```powershell
$IdentitydocumentAllOfSource | ConvertTo-JSON
```


[[Back to top]](#) 

