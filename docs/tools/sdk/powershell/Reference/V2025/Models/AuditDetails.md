---
id: v2025-audit-details
title: AuditDetails
pagination_label: AuditDetails
sidebar_label: AuditDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AuditDetails', 'V2025AuditDetails'] 
slug: /tools/sdk/powershell/v2025/models/audit-details
tags: ['SDK', 'Software Development Kit', 'AuditDetails', 'V2025AuditDetails']
---


# AuditDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | **System.DateTime** | Initial date and time when the record was created | [optional] 
**CreatedBy** | [**Identity1**](identity1) |  | [optional] 
**Modified** | **System.DateTime** | Last modified date and time for the record | [optional] 
**ModifiedBy** | [**Identity1**](identity1) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AuditDetails = Initialize-PSSailpoint.V2025AuditDetails  -Created 2022-07-21T11:13:12.345Z `
 -CreatedBy null `
 -Modified 2022-07-21T11:13:12.345Z `
 -ModifiedBy null
```

- Convert the resource to JSON
```powershell
$AuditDetails | ConvertTo-JSON
```


[[Back to top]](#) 

