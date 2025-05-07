---
id: v2025-selector-account-match-config
title: SelectorAccountMatchConfig
pagination_label: SelectorAccountMatchConfig
sidebar_label: SelectorAccountMatchConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SelectorAccountMatchConfig', 'V2025SelectorAccountMatchConfig'] 
slug: /tools/sdk/powershell/v2025/models/selector-account-match-config
tags: ['SDK', 'Software Development Kit', 'SelectorAccountMatchConfig', 'V2025SelectorAccountMatchConfig']
---


# SelectorAccountMatchConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MatchExpression** | [**SelectorAccountMatchConfigMatchExpression**](selector-account-match-config-match-expression) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SelectorAccountMatchConfig = Initialize-V2025SelectorAccountMatchConfig  -MatchExpression null
```

- Convert the resource to JSON
```powershell
$SelectorAccountMatchConfig | ConvertTo-JSON
```


[[Back to top]](#) 

