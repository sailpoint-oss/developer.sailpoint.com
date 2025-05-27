---
id: beta-tenant-configuration-request
title: TenantConfigurationRequest
pagination_label: TenantConfigurationRequest
sidebar_label: TenantConfigurationRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TenantConfigurationRequest', 'BetaTenantConfigurationRequest'] 
slug: /tools/sdk/powershell/beta/models/tenant-configuration-request
tags: ['SDK', 'Software Development Kit', 'TenantConfigurationRequest', 'BetaTenantConfigurationRequest']
---


# TenantConfigurationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfigDetails** | [**TenantConfigurationDetails**](tenant-configuration-details) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$TenantConfigurationRequest = Initialize-BetaTenantConfigurationRequest  -ConfigDetails null
```

- Convert the resource to JSON
```powershell
$TenantConfigurationRequest | ConvertTo-JSON
```


[[Back to top]](#) 

