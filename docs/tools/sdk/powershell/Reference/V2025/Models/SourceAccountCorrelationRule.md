---
id: v2025-source-account-correlation-rule
title: SourceAccountCorrelationRule
pagination_label: SourceAccountCorrelationRule
sidebar_label: SourceAccountCorrelationRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceAccountCorrelationRule', 'V2025SourceAccountCorrelationRule'] 
slug: /tools/sdk/powershell/v2025/models/source-account-correlation-rule
tags: ['SDK', 'Software Development Kit', 'SourceAccountCorrelationRule', 'V2025SourceAccountCorrelationRule']
---


# SourceAccountCorrelationRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "RULE" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Rule ID. | [optional] 
**Name** | **String** | Rule's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceAccountCorrelationRule = Initialize-V2025SourceAccountCorrelationRule  -Type RULE `
 -Id 2c918085708c274401708c2a8a760001 `
 -Name Example Rule
```

- Convert the resource to JSON
```powershell
$SourceAccountCorrelationRule | ConvertTo-JSON
```


[[Back to top]](#) 

