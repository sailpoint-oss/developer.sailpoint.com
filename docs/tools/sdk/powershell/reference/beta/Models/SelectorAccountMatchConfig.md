---
id: beta-selector-account-match-config
title: SelectorAccountMatchConfig
pagination_label: SelectorAccountMatchConfig
sidebar_label: SelectorAccountMatchConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SelectorAccountMatchConfig', 'BetaSelectorAccountMatchConfig'] 
slug: /tools/sdk/powershell/beta/models/selector-account-match-config
tags: ['SDK', 'Software Development Kit', 'SelectorAccountMatchConfig', 'BetaSelectorAccountMatchConfig']
---


# SelectorAccountMatchConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MatchExpression** |  Pointer to [**SelectorAccountMatchConfigMatchExpression**](selector-account-match-config-match-expression) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SelectorAccountMatchConfig = Initialize-PSSailpoint.BetaSelectorAccountMatchConfig  -MatchExpression null
```

- Convert the resource to JSON
```powershell
$SelectorAccountMatchConfig | ConvertTo-JSON
```


[[Back to top]](#) 

