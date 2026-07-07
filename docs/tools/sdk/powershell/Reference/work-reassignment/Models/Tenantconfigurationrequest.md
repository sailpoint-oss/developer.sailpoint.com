---
id: tenantconfigurationrequest
title: Tenantconfigurationrequest
pagination_label: Tenantconfigurationrequest
sidebar_label: Tenantconfigurationrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Tenantconfigurationrequest', 'Tenantconfigurationrequest'] 
slug: /tools/sdk/powershell/workreassignment/models/tenantconfigurationrequest
tags: ['SDK', 'Software Development Kit', 'Tenantconfigurationrequest', 'Tenantconfigurationrequest']
---


# Tenantconfigurationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfigDetails** | [**Tenantconfigurationdetails**](tenantconfigurationdetails) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Tenantconfigurationrequest = Initialize-Tenantconfigurationrequest  -ConfigDetails null
```

- Convert the resource to JSON
```powershell
$Tenantconfigurationrequest | ConvertTo-JSON
```


[[Back to top]](#) 

