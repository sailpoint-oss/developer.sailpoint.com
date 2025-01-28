---
id: v2024-expression-children-inner
title: ExpressionChildrenInner
pagination_label: ExpressionChildrenInner
sidebar_label: ExpressionChildrenInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ExpressionChildrenInner'] 
slug: /tools/sdk/powershell/v2024/models/expression-children-inner
tags: ['SDK', 'Software Development Kit', 'ExpressionChildrenInner']
---


# ExpressionChildrenInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operator** |  Pointer to  **Enum** [  "AND",    "EQUALS" ] | Operator for the expression | [optional] 
**Attribute** |  Pointer to **String** | Name for the attribute | [optional] 
**Value** |  Pointer to [**Value**](value) |  | [optional] 
**Children** |  Pointer to **String** | There cannot be anymore nested children. This will always be null. | [optional] 

## Examples

- Prepare the resource
```powershell
$ExpressionChildrenInner = Initialize-PSSailpoint.V2024ExpressionChildrenInner  -Operator EQUALS `
 -Attribute location `
 -Value null `
 -Children null
```

- Convert the resource to JSON
```powershell
$ExpressionChildrenInner | ConvertTo-JSON
```


[[Back to top]](#) 

