---
id: beta-correlation-config
title: CorrelationConfig
pagination_label: CorrelationConfig
sidebar_label: CorrelationConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CorrelationConfig', 'BetaCorrelationConfig'] 
slug: /tools/sdk/powershell/beta/models/correlation-config
tags: ['SDK', 'Software Development Kit', 'CorrelationConfig', 'BetaCorrelationConfig']
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
$CorrelationConfig = Initialize-BetaCorrelationConfig  -Id 2c9180835d191a86015d28455b4a2329 `
 -Name Source [source] Account Correlation `
 -AttributeAssignments null
```

- Convert the resource to JSON
```powershell
$CorrelationConfig | ConvertTo-JSON
```


[[Back to top]](#) 

