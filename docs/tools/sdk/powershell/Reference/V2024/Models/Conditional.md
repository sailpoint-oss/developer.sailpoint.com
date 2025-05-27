---
id: v2024-conditional
title: Conditional
pagination_label: Conditional
sidebar_label: Conditional
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Conditional', 'V2024Conditional'] 
slug: /tools/sdk/powershell/v2024/models/conditional
tags: ['SDK', 'Software Development Kit', 'Conditional', 'V2024Conditional']
---


# Conditional

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Expression** | **String** | A comparison statement that follows the structure of `ValueA eq ValueB` where `ValueA` and `ValueB` are static strings or outputs of other transforms.   The `eq` operator is the only valid comparison | [required]
**PositiveCondition** | **String** | The output of the transform if the expression evalutes to true | [required]
**NegativeCondition** | **String** | The output of the transform if the expression evalutes to false | [required]
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Conditional = Initialize-V2024Conditional  -Expression ValueA eq ValueB `
 -PositiveCondition true `
 -NegativeCondition false `
 -RequiresPeriodicRefresh false `
 -VarInput {type=accountAttribute, attributes={attributeName=first_name, sourceName=Source}}
```

- Convert the resource to JSON
```powershell
$Conditional | ConvertTo-JSON
```


[[Back to top]](#) 

