---
id: v2024-config-type
title: ConfigType
pagination_label: ConfigType
sidebar_label: ConfigType
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConfigType', 'V2024ConfigType'] 
slug: /tools/sdk/powershell/v2024/models/config-type
tags: ['SDK', 'Software Development Kit', 'ConfigType', 'V2024ConfigType']
---


# ConfigType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Priority** | **Int32** |  | [optional] 
**InternalName** | [**ConfigTypeEnumCamel**](config-type-enum-camel) |  | [optional] 
**InternalNameCamel** | [**ConfigTypeEnum**](config-type-enum) |  | [optional] 
**DisplayName** | **String** | Human readable display name of the type to be shown on UI | [optional] 
**Description** | **String** | Description of the type of work to be reassigned, displayed by the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$ConfigType = Initialize-V2024ConfigType  -Priority 1 `
 -InternalName null `
 -InternalNameCamel null `
 -DisplayName Access Requests `
 -Description Reassign Access Request Work Items for an identity
```

- Convert the resource to JSON
```powershell
$ConfigType | ConvertTo-JSON
```


[[Back to top]](#) 

