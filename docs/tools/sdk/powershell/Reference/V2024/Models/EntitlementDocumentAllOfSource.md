---
id: v2024-entitlement-document-all-of-source
title: EntitlementDocumentAllOfSource
pagination_label: EntitlementDocumentAllOfSource
sidebar_label: EntitlementDocumentAllOfSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementDocumentAllOfSource', 'V2024EntitlementDocumentAllOfSource'] 
slug: /tools/sdk/powershell/v2024/models/entitlement-document-all-of-source
tags: ['SDK', 'Software Development Kit', 'EntitlementDocumentAllOfSource', 'V2024EntitlementDocumentAllOfSource']
---


# EntitlementDocumentAllOfSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of entitlement's source. | [optional] 
**Name** | **String** | Display name of entitlement's source. | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementDocumentAllOfSource = Initialize-PSSailpoint.V2024EntitlementDocumentAllOfSource  -Id 2c91808b6e9e6fb8016eec1a2b6f7b5f `
 -Name ODS-HR-Employees
```

- Convert the resource to JSON
```powershell
$EntitlementDocumentAllOfSource | ConvertTo-JSON
```


[[Back to top]](#) 

