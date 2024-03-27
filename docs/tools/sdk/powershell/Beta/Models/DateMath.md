---
id: date-math
title: DateMath
pagination_label: DateMath
sidebar_label: DateMath
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'DateMath'] 
slug: /tools/sdk/powershell/beta/models/date-math
tags: ['SDK', 'Software Development Kit', 'DateMath']
---


# DateMath

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Expression** |  **String** | A string value of the date and time components to operation on, along with the math operations to execute.  | 
**RoundUp** |  Pointer to **Boolean** | A boolean value to indicate whether the transform should round up or down when a rounding &#x60;/&#x60; operation is defined in the expression.    If not provided, the transform will default to &#x60;false&#x60;   &#x60;true&#x60; indicates the transform should round up (i.e., truncate the fractional date/time component indicated and then add one unit of that component)   &#x60;false&#x60; indicates the transform should round down (i.e., truncate the fractional date/time component indicated)  | [optional] [default to $false]
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [map[string] **Any**] | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$DateMath = Initialize-PSSailpointBetaDateMath  -Expression now+1w `
 -RoundUp false `
 -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$DateMath | ConvertTo-JSON
```


[[Back to top]](#) 

