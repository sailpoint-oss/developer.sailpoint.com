---
id: v2024-expression-children-inner
title: ExpressionChildrenInner
pagination_label: ExpressionChildrenInner
sidebar_label: ExpressionChildrenInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ExpressionChildrenInner', 'V2024ExpressionChildrenInner'] 
slug: /tools/sdk/powershell/v2024/models/expression-children-inner
tags: ['SDK', 'Software Development Kit', 'ExpressionChildrenInner', 'V2024ExpressionChildrenInner']
---


# ExpressionChildrenInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operator** |  **Enum** [  "AND",    "EQUALS" ] | Operator for the expression | [optional] 
**Attribute** | **String** | Name for the attribute | [optional] 
**Value** | [**Value**](value) |  | [optional] 
**Children** | **String** | There cannot be anymore nested children. This will always be null. | [optional] 

## Examples

- Prepare the resource
```powershell
$ExpressionChildrenInner = Initialize-V2024ExpressionChildrenInner  -Operator EQUALS `
 -Attribute location `
 -Value null `
 -Children null
```

- Convert the resource to JSON
```powershell
$ExpressionChildrenInner | ConvertTo-JSON
```


[[Back to top]](#) 

