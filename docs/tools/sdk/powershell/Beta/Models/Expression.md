---
id: expression
title: Expression
pagination_label: Expression
sidebar_label: Expression
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Expression'] 
slug: /tools/sdk/powershell/beta/models/expression
tags: ['SDK', 'Software Development Kit', 'Expression']
---


# Expression

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operator** |  Pointer to  **Enum** [  "AND",    "EQUALS" ] | Operator for the expression | [optional] 
**Attribute** |  Pointer to **String** | Name for the attribute | [optional] 
**Value** |  Pointer to [**Value**](value) |  | [optional] 
**Children** |  Pointer to [**[]Value**](value) | List of expressions | [optional] 

## Examples

- Prepare the resource
```powershell
$Expression = Initialize-BetaExpression  -Operator EQUALS `
 -Attribute location `
 -Value null `
 -Children []
```

- Convert the resource to JSON
```powershell
$Expression | ConvertTo-JSON
```


[[Back to top]](#) 

