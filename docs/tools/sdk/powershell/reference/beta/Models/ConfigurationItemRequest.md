---
id: beta-configuration-item-request
title: ConfigurationItemRequest
pagination_label: ConfigurationItemRequest
sidebar_label: ConfigurationItemRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConfigurationItemRequest'] 
slug: /tools/sdk/powershell/beta/models/configuration-item-request
tags: ['SDK', 'Software Development Kit', 'ConfigurationItemRequest']
---


# ConfigurationItemRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReassignedFromId** |  Pointer to **String** | The identity id to reassign an item from | [optional] 
**ReassignedToId** |  Pointer to **String** | The identity id to reassign an item to | [optional] 
**ConfigType** |  Pointer to [**ConfigTypeEnum**](config-type-enum) |  | [optional] 
**StartDate** |  Pointer to **System.DateTime** | The date from which to start reassigning work items | [optional] 
**EndDate** |  Pointer to **System.DateTime** | The date from which to stop reassigning work items.  If this is an null string it indicates a permanent reassignment. | [optional] 

## Examples

- Prepare the resource
```powershell
$ConfigurationItemRequest = Initialize-PSSailpoint.BetaConfigurationItemRequest  -ReassignedFromId 2c91808781a71ddb0181b9090b5c504e `
 -ReassignedToId 2c91808781a71ddb0181b9090b53504a `
 -ConfigType null `
 -StartDate 2022-07-21T11:13:12.345Z `
 -EndDate 2022-07-30T17:00Z
```

- Convert the resource to JSON
```powershell
$ConfigurationItemRequest | ConvertTo-JSON
```


[[Back to top]](#) 

