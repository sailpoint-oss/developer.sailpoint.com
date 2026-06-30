---
id: tenantconfigurationresponse
title: Tenantconfigurationresponse
pagination_label: Tenantconfigurationresponse
sidebar_label: Tenantconfigurationresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Tenantconfigurationresponse', 'Tenantconfigurationresponse'] 
slug: /tools/sdk/powershell/workreassignment/models/tenantconfigurationresponse
tags: ['SDK', 'Software Development Kit', 'Tenantconfigurationresponse', 'Tenantconfigurationresponse']
---


# Tenantconfigurationresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuditDetails** | [**Auditdetails**](auditdetails) |  | [optional] 
**ConfigDetails** | [**Tenantconfigurationdetails**](tenantconfigurationdetails) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Tenantconfigurationresponse = Initialize-Tenantconfigurationresponse  -AuditDetails null `
 -ConfigDetails null
```

- Convert the resource to JSON
```powershell
$Tenantconfigurationresponse | ConvertTo-JSON
```


[[Back to top]](#) 

