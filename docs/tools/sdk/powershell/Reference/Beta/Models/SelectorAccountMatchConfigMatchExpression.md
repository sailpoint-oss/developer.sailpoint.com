---
id: beta-selector-account-match-config-match-expression
title: SelectorAccountMatchConfigMatchExpression
pagination_label: SelectorAccountMatchConfigMatchExpression
sidebar_label: SelectorAccountMatchConfigMatchExpression
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SelectorAccountMatchConfigMatchExpression', 'BetaSelectorAccountMatchConfigMatchExpression'] 
slug: /tools/sdk/powershell/beta/models/selector-account-match-config-match-expression
tags: ['SDK', 'Software Development Kit', 'SelectorAccountMatchConfigMatchExpression', 'BetaSelectorAccountMatchConfigMatchExpression']
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
$SelectorAccountMatchConfigMatchExpression = Initialize-PSSailpoint.BetaSelectorAccountMatchConfigMatchExpression  -MatchTerms [{name=, value=, op=null, container=true, and=false, children=[{name=businessCategory, value=Service, op=eq, container=false, and=false, children=null}]}] `
 -And true
```

- Convert the resource to JSON
```powershell
$SelectorAccountMatchConfigMatchExpression | ConvertTo-JSON
```


[[Back to top]](#) 

