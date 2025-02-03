---
id: v2024-selector-account-match-config-match-expression
title: SelectorAccountMatchConfigMatchExpression
pagination_label: SelectorAccountMatchConfigMatchExpression
sidebar_label: SelectorAccountMatchConfigMatchExpression
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SelectorAccountMatchConfigMatchExpression', 'V2024SelectorAccountMatchConfigMatchExpression'] 
slug: /tools/sdk/powershell/v2024/models/selector-account-match-config-match-expression
tags: ['SDK', 'Software Development Kit', 'SelectorAccountMatchConfigMatchExpression', 'V2024SelectorAccountMatchConfigMatchExpression']
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
$SelectorAccountMatchConfigMatchExpression = Initialize-PSSailpoint.V2024SelectorAccountMatchConfigMatchExpression  -MatchTerms [{name&#x3D;, value&#x3D;, op&#x3D;null, container&#x3D;true, and&#x3D;false, children&#x3D;[{name&#x3D;businessCategory, value&#x3D;Service, op&#x3D;eq, container&#x3D;false, and&#x3D;false, children&#x3D;null}]}] `
 -And true
```

- Convert the resource to JSON
```powershell
$SelectorAccountMatchConfigMatchExpression | ConvertTo-JSON
```


[[Back to top]](#) 

