---
id: beta-conditional
title: Conditional
pagination_label: Conditional
sidebar_label: Conditional
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Conditional', 'BetaConditional'] 
slug: /tools/sdk/powershell/beta/models/conditional
tags: ['SDK', 'Software Development Kit', 'Conditional', 'BetaConditional']
---


# Conditional

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Expression** |  **String** | A comparison statement that follows the structure of `ValueA eq ValueB` where `ValueA` and `ValueB` are static strings or outputs of other transforms.   The `eq` operator is the only valid comparison | [required]
**PositiveCondition** |  **String** | The output of the transform if the expression evalutes to true | [required]
**NegativeCondition** |  **String** | The output of the transform if the expression evalutes to false | [required]
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Conditional = Initialize-PSSailpoint.BetaConditional  -Expression ValueA eq ValueB `
 -PositiveCondition true `
 -NegativeCondition false `
 -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$Conditional | ConvertTo-JSON
```


[[Back to top]](#) 

