---
id: multi-host-sources-account-correlation-rule
title: MultiHostSourcesAccountCorrelationRule
pagination_label: MultiHostSourcesAccountCorrelationRule
sidebar_label: MultiHostSourcesAccountCorrelationRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostSourcesAccountCorrelationRule'] 
slug: /tools/sdk/powershell/beta/models/multi-host-sources-account-correlation-rule
tags: ['SDK', 'Software Development Kit', 'MultiHostSourcesAccountCorrelationRule']
---


# MultiHostSourcesAccountCorrelationRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "RULE" ] | Type of object being referenced. | [optional] 
**Id** |  Pointer to **String** | Rule ID. | [optional] 
**Name** |  Pointer to **String** | Rule's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostSourcesAccountCorrelationRule = Initialize-PSSailpoint.BetaMultiHostSourcesAccountCorrelationRule  -Type RULE `
 -Id 2c918085708c274401708c2a8a760001 `
 -Name Example Rule
```

- Convert the resource to JSON
```powershell
$MultiHostSourcesAccountCorrelationRule | ConvertTo-JSON
```


[[Back to top]](#) 

