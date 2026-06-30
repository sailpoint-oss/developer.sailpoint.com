---
id: multihostintegrations-account-correlation-rule
title: MultihostintegrationsAccountCorrelationRule
pagination_label: MultihostintegrationsAccountCorrelationRule
sidebar_label: MultihostintegrationsAccountCorrelationRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultihostintegrationsAccountCorrelationRule', 'MultihostintegrationsAccountCorrelationRule'] 
slug: /tools/sdk/powershell/multihostintegration/models/multihostintegrations-account-correlation-rule
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsAccountCorrelationRule', 'MultihostintegrationsAccountCorrelationRule']
---


# MultihostintegrationsAccountCorrelationRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "RULE" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Rule ID. | [optional] 
**Name** | **String** | Rule's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultihostintegrationsAccountCorrelationRule = Initialize-MultihostintegrationsAccountCorrelationRule  -Type RULE `
 -Id 2c918085708c274401708c2a8a760001 `
 -Name Example Rule
```

- Convert the resource to JSON
```powershell
$MultihostintegrationsAccountCorrelationRule | ConvertTo-JSON
```


[[Back to top]](#) 

