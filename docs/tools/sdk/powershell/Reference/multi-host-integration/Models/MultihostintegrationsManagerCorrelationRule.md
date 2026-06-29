---
id: multihostintegrations-manager-correlation-rule
title: MultihostintegrationsManagerCorrelationRule
pagination_label: MultihostintegrationsManagerCorrelationRule
sidebar_label: MultihostintegrationsManagerCorrelationRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultihostintegrationsManagerCorrelationRule', 'MultihostintegrationsManagerCorrelationRule'] 
slug: /tools/sdk/powershell/multihostintegration/models/multihostintegrations-manager-correlation-rule
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsManagerCorrelationRule', 'MultihostintegrationsManagerCorrelationRule']
---


# MultihostintegrationsManagerCorrelationRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "RULE" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Rule ID. | [optional] 
**Name** | **String** | Rule's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultihostintegrationsManagerCorrelationRule = Initialize-MultihostintegrationsManagerCorrelationRule  -Type RULE `
 -Id 2c918085708c274401708c2a8a760001 `
 -Name Example Rule
```

- Convert the resource to JSON
```powershell
$MultihostintegrationsManagerCorrelationRule | ConvertTo-JSON
```


[[Back to top]](#) 

