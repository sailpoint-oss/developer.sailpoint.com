---
id: beta-configuration-details-response
title: ConfigurationDetailsResponse
pagination_label: ConfigurationDetailsResponse
sidebar_label: ConfigurationDetailsResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConfigurationDetailsResponse', 'BetaConfigurationDetailsResponse'] 
slug: /tools/sdk/powershell/beta/models/configuration-details-response
tags: ['SDK', 'Software Development Kit', 'ConfigurationDetailsResponse', 'BetaConfigurationDetailsResponse']
---


# ConfigurationDetailsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfigType** | [**ConfigTypeEnum**](config-type-enum) |  | [optional] 
**TargetIdentity** | [**Identity1**](identity1) |  | [optional] 
**StartDate** | **System.DateTime** | The date from which to start reassigning work items | [optional] 
**EndDate** | **System.DateTime** | The date from which to stop reassigning work items.  If this is an empty string it indicates a permanent reassignment. | [optional] 
**AuditDetails** | [**AuditDetails**](audit-details) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ConfigurationDetailsResponse = Initialize-BetaConfigurationDetailsResponse  -ConfigType null `
 -TargetIdentity null `
 -StartDate 2022-07-21T11:13:12.345Z `
 -EndDate 0001-01-01T00:00Z `
 -AuditDetails null
```

- Convert the resource to JSON
```powershell
$ConfigurationDetailsResponse | ConvertTo-JSON
```


[[Back to top]](#) 

