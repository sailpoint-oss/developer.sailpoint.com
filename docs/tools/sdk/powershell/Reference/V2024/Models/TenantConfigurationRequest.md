---
id: v2024-tenant-configuration-request
title: TenantConfigurationRequest
pagination_label: TenantConfigurationRequest
sidebar_label: TenantConfigurationRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TenantConfigurationRequest', 'V2024TenantConfigurationRequest'] 
slug: /tools/sdk/powershell/v2024/models/tenant-configuration-request
tags: ['SDK', 'Software Development Kit', 'TenantConfigurationRequest', 'V2024TenantConfigurationRequest']
---


# TenantConfigurationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfigDetails** | [**TenantConfigurationDetails**](tenant-configuration-details) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$TenantConfigurationRequest = Initialize-V2024TenantConfigurationRequest  -ConfigDetails null
```

- Convert the resource to JSON
```powershell
$TenantConfigurationRequest | ConvertTo-JSON
```


[[Back to top]](#) 

