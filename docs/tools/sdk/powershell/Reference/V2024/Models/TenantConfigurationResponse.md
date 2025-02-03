---
id: v2024-tenant-configuration-response
title: TenantConfigurationResponse
pagination_label: TenantConfigurationResponse
sidebar_label: TenantConfigurationResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TenantConfigurationResponse', 'V2024TenantConfigurationResponse'] 
slug: /tools/sdk/powershell/v2024/models/tenant-configuration-response
tags: ['SDK', 'Software Development Kit', 'TenantConfigurationResponse', 'V2024TenantConfigurationResponse']
---


# TenantConfigurationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuditDetails** | [**AuditDetails**](audit-details) |  | [optional] 
**ConfigDetails** | [**TenantConfigurationDetails**](tenant-configuration-details) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$TenantConfigurationResponse = Initialize-PSSailpoint.V2024TenantConfigurationResponse  -AuditDetails null `
 -ConfigDetails null
```

- Convert the resource to JSON
```powershell
$TenantConfigurationResponse | ConvertTo-JSON
```


[[Back to top]](#) 

