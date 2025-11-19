---
id: v2025-correlation-config
title: CorrelationConfig
pagination_label: CorrelationConfig
sidebar_label: CorrelationConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CorrelationConfig', 'V2025CorrelationConfig'] 
slug: /tools/sdk/powershell/v2025/models/correlation-config
tags: ['SDK', 'Software Development Kit', 'CorrelationConfig', 'V2025CorrelationConfig']
---


# CorrelationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the correlation configuration. | [optional] 
**Name** | **String** | The name of the correlation configuration. | [optional] 
**AttributeAssignments** | [**[]CorrelationConfigAttributeAssignmentsInner**](correlation-config-attribute-assignments-inner) | The list of attribute assignments of the correlation configuration. | [optional] 

## Examples

- Prepare the resource
```powershell
$CorrelationConfig = Initialize-V2025CorrelationConfig  -Id 2c9180835d191a86015d28455b4a2329 `
 -Name Source [source] Account Correlation `
 -AttributeAssignments null
```

- Convert the resource to JSON
```powershell
$CorrelationConfig | ConvertTo-JSON
```


[[Back to top]](#) 

