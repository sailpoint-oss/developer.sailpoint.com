---
id: beta-tenant-configuration-details
title: TenantConfigurationDetails
pagination_label: TenantConfigurationDetails
sidebar_label: TenantConfigurationDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TenantConfigurationDetails'] 
slug: /tools/sdk/powershell/beta/models/tenant-configuration-details
tags: ['SDK', 'Software Development Kit', 'TenantConfigurationDetails']
---


# TenantConfigurationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Disabled** |  Pointer to **Boolean** | Flag to determine if Reassignment Configuration is enabled or disabled for a tenant.  When this flag is set to true, Reassignment Configuration is disabled. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$TenantConfigurationDetails = Initialize-PSSailpoint.BetaTenantConfigurationDetails  -Disabled true
```

- Convert the resource to JSON
```powershell
$TenantConfigurationDetails | ConvertTo-JSON
```


[[Back to top]](#) 

