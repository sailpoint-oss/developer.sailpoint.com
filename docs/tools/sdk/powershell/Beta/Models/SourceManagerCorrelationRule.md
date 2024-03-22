---
id: source-manager-correlation-rule
title: SourceManagerCorrelationRule
pagination_label: SourceManagerCorrelationRule
sidebar_label: SourceManagerCorrelationRule
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SourceManagerCorrelationRule'] 
slug: /tools/sdk/powershell/beta/models/source-manager-correlation-rule
tags: ['SDK', 'Software Development Kit', 'SourceManagerCorrelationRule']
---


# SourceManagerCorrelationRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "RULE" ] | The type of object being referenced | [optional] 
**Id** |  Pointer to **String** | ID of the rule | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the rule | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceManagerCorrelationRule = Initialize-PSSailpointBetaSourceManagerCorrelationRule  -Type RULE `
 -Id 2c918085708c274401708c2a8a760001 `
 -Name Example Rule
```

- Convert the resource to JSON
```powershell
$SourceManagerCorrelationRule | ConvertTo-JSON
```


[[Back to top]](#) 

