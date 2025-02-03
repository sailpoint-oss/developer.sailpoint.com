---
id: v2024-selector-account-match-config
title: SelectorAccountMatchConfig
pagination_label: SelectorAccountMatchConfig
sidebar_label: SelectorAccountMatchConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SelectorAccountMatchConfig', 'V2024SelectorAccountMatchConfig'] 
slug: /tools/sdk/powershell/v2024/models/selector-account-match-config
tags: ['SDK', 'Software Development Kit', 'SelectorAccountMatchConfig', 'V2024SelectorAccountMatchConfig']
---


# SelectorAccountMatchConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MatchExpression** | [**SelectorAccountMatchConfigMatchExpression**](selector-account-match-config-match-expression) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SelectorAccountMatchConfig = Initialize-PSSailpoint.V2024SelectorAccountMatchConfig  -MatchExpression null
```

- Convert the resource to JSON
```powershell
$SelectorAccountMatchConfig | ConvertTo-JSON
```


[[Back to top]](#) 

