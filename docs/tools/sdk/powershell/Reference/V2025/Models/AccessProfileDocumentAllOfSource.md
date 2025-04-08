---
id: v2025-access-profile-document-all-of-source
title: AccessProfileDocumentAllOfSource
pagination_label: AccessProfileDocumentAllOfSource
sidebar_label: AccessProfileDocumentAllOfSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileDocumentAllOfSource', 'V2025AccessProfileDocumentAllOfSource'] 
slug: /tools/sdk/powershell/v2025/models/access-profile-document-all-of-source
tags: ['SDK', 'Software Development Kit', 'AccessProfileDocumentAllOfSource', 'V2025AccessProfileDocumentAllOfSource']
---


# AccessProfileDocumentAllOfSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Source's ID. | [optional] 
**Name** | **String** | Source's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileDocumentAllOfSource = Initialize-PSSailpoint.V2025AccessProfileDocumentAllOfSource  -Id ff8081815757d4fb0157588f3d9d008f `
 -Name Employees
```

- Convert the resource to JSON
```powershell
$AccessProfileDocumentAllOfSource | ConvertTo-JSON
```


[[Back to top]](#) 

