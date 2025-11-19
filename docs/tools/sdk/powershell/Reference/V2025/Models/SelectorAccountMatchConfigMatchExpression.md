---
id: v2025-selector-account-match-config-match-expression
title: SelectorAccountMatchConfigMatchExpression
pagination_label: SelectorAccountMatchConfigMatchExpression
sidebar_label: SelectorAccountMatchConfigMatchExpression
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SelectorAccountMatchConfigMatchExpression', 'V2025SelectorAccountMatchConfigMatchExpression'] 
slug: /tools/sdk/powershell/v2025/models/selector-account-match-config-match-expression
tags: ['SDK', 'Software Development Kit', 'SelectorAccountMatchConfigMatchExpression', 'V2025SelectorAccountMatchConfigMatchExpression']
---


# SelectorAccountMatchConfigMatchExpression

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MatchTerms** | [**[]MatchTerm**](match-term) |  | [optional] 
**And** | **Boolean** | If it is AND operators for match terms | [optional] [default to $true]

## Examples

- Prepare the resource
```powershell
$SelectorAccountMatchConfigMatchExpression = Initialize-V2025SelectorAccountMatchConfigMatchExpression  -MatchTerms [{name=, value=, op=null, container=true, and=false, children=[{name=businessCategory, value=Service, op=eq, container=false, and=false, children=null}]}] `
 -And true
```

- Convert the resource to JSON
```powershell
$SelectorAccountMatchConfigMatchExpression | ConvertTo-JSON
```


[[Back to top]](#) 

