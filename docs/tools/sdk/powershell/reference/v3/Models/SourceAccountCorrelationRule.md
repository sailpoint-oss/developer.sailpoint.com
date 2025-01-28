---
id: source-account-correlation-rule
title: SourceAccountCorrelationRule
pagination_label: SourceAccountCorrelationRule
sidebar_label: SourceAccountCorrelationRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceAccountCorrelationRule', 'SourceAccountCorrelationRule'] 
slug: /tools/sdk/powershell/v3/models/source-account-correlation-rule
tags: ['SDK', 'Software Development Kit', 'SourceAccountCorrelationRule', 'SourceAccountCorrelationRule']
---


# SourceAccountCorrelationRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "RULE" ] | Type of object being referenced. | [optional] 
**Id** |  Pointer to **String** | Rule ID. | [optional] 
**Name** |  Pointer to **String** | Rule's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceAccountCorrelationRule = Initialize-PSSailpoint.V3SourceAccountCorrelationRule  -Type RULE `
 -Id 2c918085708c274401708c2a8a760001 `
 -Name Example Rule
```

- Convert the resource to JSON
```powershell
$SourceAccountCorrelationRule | ConvertTo-JSON
```


[[Back to top]](#) 

