---
id: beta-tenant-configuration-response
title: TenantConfigurationResponse
pagination_label: TenantConfigurationResponse
sidebar_label: TenantConfigurationResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TenantConfigurationResponse'] 
slug: /tools/sdk/powershell/beta/models/tenant-configuration-response
tags: ['SDK', 'Software Development Kit', 'TenantConfigurationResponse']
---


# TenantConfigurationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuditDetails** |  Pointer to [**AuditDetails**](audit-details) |  | [optional] 
**ConfigDetails** |  Pointer to [**TenantConfigurationDetails**](tenant-configuration-details) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$TenantConfigurationResponse = Initialize-PSSailpoint.BetaTenantConfigurationResponse  -AuditDetails null `
 -ConfigDetails null
```

- Convert the resource to JSON
```powershell
$TenantConfigurationResponse | ConvertTo-JSON
```


[[Back to top]](#) 

