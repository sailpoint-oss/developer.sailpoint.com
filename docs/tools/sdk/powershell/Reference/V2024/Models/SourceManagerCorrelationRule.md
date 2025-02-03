---
id: v2024-source-manager-correlation-rule
title: SourceManagerCorrelationRule
pagination_label: SourceManagerCorrelationRule
sidebar_label: SourceManagerCorrelationRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceManagerCorrelationRule', 'V2024SourceManagerCorrelationRule'] 
slug: /tools/sdk/powershell/v2024/models/source-manager-correlation-rule
tags: ['SDK', 'Software Development Kit', 'SourceManagerCorrelationRule', 'V2024SourceManagerCorrelationRule']
---


# SourceManagerCorrelationRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "RULE" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Rule ID. | [optional] 
**Name** | **String** | Rule's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceManagerCorrelationRule = Initialize-PSSailpoint.V2024SourceManagerCorrelationRule  -Type RULE `
 -Id 2c918085708c274401708c2a8a760001 `
 -Name Example Rule
```

- Convert the resource to JSON
```powershell
$SourceManagerCorrelationRule | ConvertTo-JSON
```


[[Back to top]](#) 

