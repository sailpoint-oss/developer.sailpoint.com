---
id: source-account-correlation-rule
title: SourceAccountCorrelationRule
pagination_label: SourceAccountCorrelationRule
sidebar_label: SourceAccountCorrelationRule
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SourceAccountCorrelationRule'] 
slug: /tools/sdk/powershell/beta/models/source-account-correlation-rule
tags: ['SDK', 'Software Development Kit', 'SourceAccountCorrelationRule']
---


# SourceAccountCorrelationRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "RULE" ] | The type of object being referenced | [optional] 
**Id** |  Pointer to **String** | ID of the rule | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the rule | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceAccountCorrelationRule = Initialize-PSSailpointBetaSourceAccountCorrelationRule  -Type RULE `
 -Id 2c918085708c274401708c2a8a760001 `
 -Name Example Rule
```

- Convert the resource to JSON
```powershell
$SourceAccountCorrelationRule | ConvertTo-JSON
```


[[Back to top]](#) 

