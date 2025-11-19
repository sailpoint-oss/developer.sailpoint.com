---
id: beta-multi-host-sources-manager-correlation-rule
title: MultiHostSourcesManagerCorrelationRule
pagination_label: MultiHostSourcesManagerCorrelationRule
sidebar_label: MultiHostSourcesManagerCorrelationRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostSourcesManagerCorrelationRule', 'BetaMultiHostSourcesManagerCorrelationRule'] 
slug: /tools/sdk/powershell/beta/models/multi-host-sources-manager-correlation-rule
tags: ['SDK', 'Software Development Kit', 'MultiHostSourcesManagerCorrelationRule', 'BetaMultiHostSourcesManagerCorrelationRule']
---


# MultiHostSourcesManagerCorrelationRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "RULE" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Rule ID. | [optional] 
**Name** | **String** | Rule's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostSourcesManagerCorrelationRule = Initialize-BetaMultiHostSourcesManagerCorrelationRule  -Type RULE `
 -Id 2c918085708c274401708c2a8a760001 `
 -Name Example Rule
```

- Convert the resource to JSON
```powershell
$MultiHostSourcesManagerCorrelationRule | ConvertTo-JSON
```


[[Back to top]](#) 

