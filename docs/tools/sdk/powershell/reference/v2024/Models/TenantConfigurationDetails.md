---
id: v2024-tenant-configuration-details
title: TenantConfigurationDetails
pagination_label: TenantConfigurationDetails
sidebar_label: TenantConfigurationDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TenantConfigurationDetails', 'V2024TenantConfigurationDetails'] 
slug: /tools/sdk/powershell/v2024/models/tenant-configuration-details
tags: ['SDK', 'Software Development Kit', 'TenantConfigurationDetails', 'V2024TenantConfigurationDetails']
---


# TenantConfigurationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Disabled** |  Pointer to **Boolean** | Flag to determine if Reassignment Configuration is enabled or disabled for a tenant.  When this flag is set to true, Reassignment Configuration is disabled. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$TenantConfigurationDetails = Initialize-PSSailpoint.V2024TenantConfigurationDetails  -Disabled true
```

- Convert the resource to JSON
```powershell
$TenantConfigurationDetails | ConvertTo-JSON
```


[[Back to top]](#) 

