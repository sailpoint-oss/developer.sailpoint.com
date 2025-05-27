---
id: date-compare
title: DateCompare
pagination_label: DateCompare
sidebar_label: DateCompare
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DateCompare', 'DateCompare'] 
slug: /tools/sdk/powershell/v3/models/date-compare
tags: ['SDK', 'Software Development Kit', 'DateCompare', 'DateCompare']
---


# DateCompare

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FirstDate** | [**DateCompareFirstDate**](date-compare-first-date) |  | [required]
**SecondDate** | [**DateCompareSecondDate**](date-compare-second-date) |  | [required]
**Operator** |  **Enum** [  "LT",    "LTE",    "GT",    "GTE" ] | This is the comparison to perform. | Operation | Description | | --------- | ------- | | LT        | Strictly less than: `firstDate < secondDate` | | LTE       | Less than or equal to: `firstDate <= secondDate` | | GT        | Strictly greater than: `firstDate > secondDate` | | GTE       | Greater than or equal to: `firstDate >= secondDate` |  | [required]
**PositiveCondition** | **String** | The output of the transform if the expression evalutes to true | [required]
**NegativeCondition** | **String** | The output of the transform if the expression evalutes to false | [required]
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$DateCompare = Initialize-DateCompare  -FirstDate null `
 -SecondDate null `
 -Operator LT `
 -PositiveCondition true `
 -NegativeCondition false `
 -RequiresPeriodicRefresh false `
 -VarInput {type=accountAttribute, attributes={attributeName=first_name, sourceName=Source}}
```

- Convert the resource to JSON
```powershell
$DateCompare | ConvertTo-JSON
```


[[Back to top]](#) 

