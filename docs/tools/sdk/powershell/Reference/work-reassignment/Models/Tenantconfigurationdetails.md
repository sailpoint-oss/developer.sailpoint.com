---
id: tenantconfigurationdetails
title: Tenantconfigurationdetails
pagination_label: Tenantconfigurationdetails
sidebar_label: Tenantconfigurationdetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Tenantconfigurationdetails', 'Tenantconfigurationdetails'] 
slug: /tools/sdk/powershell/workreassignment/models/tenantconfigurationdetails
tags: ['SDK', 'Software Development Kit', 'Tenantconfigurationdetails', 'Tenantconfigurationdetails']
---


# Tenantconfigurationdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Disabled** | **Boolean** | Flag to determine if Reassignment Configuration is enabled or disabled for a tenant.  When this flag is set to true, Reassignment Configuration is disabled. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Tenantconfigurationdetails = Initialize-Tenantconfigurationdetails  -Disabled true
```

- Convert the resource to JSON
```powershell
$Tenantconfigurationdetails | ConvertTo-JSON
```


[[Back to top]](#) 

