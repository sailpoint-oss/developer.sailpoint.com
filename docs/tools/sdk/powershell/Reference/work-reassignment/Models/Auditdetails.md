---
id: auditdetails
title: Auditdetails
pagination_label: Auditdetails
sidebar_label: Auditdetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Auditdetails', 'Auditdetails'] 
slug: /tools/sdk/powershell/workreassignment/models/auditdetails
tags: ['SDK', 'Software Development Kit', 'Auditdetails', 'Auditdetails']
---


# Auditdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | **System.DateTime** | Initial date and time when the record was created | [optional] 
**CreatedBy** | [**Identity2**](identity2) |  | [optional] 
**Modified** | **System.DateTime** | Last modified date and time for the record | [optional] 
**ModifiedBy** | [**Identity2**](identity2) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Auditdetails = Initialize-Auditdetails  -Created 2022-07-21T11:13:12.345Z `
 -CreatedBy null `
 -Modified 2022-07-21T11:13:12.345Z `
 -ModifiedBy null
```

- Convert the resource to JSON
```powershell
$Auditdetails | ConvertTo-JSON
```


[[Back to top]](#) 

