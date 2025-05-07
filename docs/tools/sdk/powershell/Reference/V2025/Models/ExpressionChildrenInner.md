---
id: v2025-expression-children-inner
title: ExpressionChildrenInner
pagination_label: ExpressionChildrenInner
sidebar_label: ExpressionChildrenInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ExpressionChildrenInner', 'V2025ExpressionChildrenInner'] 
slug: /tools/sdk/powershell/v2025/models/expression-children-inner
tags: ['SDK', 'Software Development Kit', 'ExpressionChildrenInner', 'V2025ExpressionChildrenInner']
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
$ExpressionChildrenInner = Initialize-V2025ExpressionChildrenInner  -Operator EQUALS `
 -Attribute location `
 -Value null `
 -Children null
```

- Convert the resource to JSON
```powershell
$ExpressionChildrenInner | ConvertTo-JSON
```


[[Back to top]](#) 

