---
id: datecompare
title: Datecompare
pagination_label: Datecompare
sidebar_label: Datecompare
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Datecompare', 'Datecompare'] 
slug: /tools/sdk/powershell/sources/models/datecompare
tags: ['SDK', 'Software Development Kit', 'Datecompare', 'Datecompare']
---


# Datecompare

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FirstDate** | [**DatecompareFirstDate**](datecompare-first-date) |  | [required]
**SecondDate** | [**DatecompareSecondDate**](datecompare-second-date) |  | [required]
**Operator** |  **Enum** [  "LT",    "LTE",    "GT",    "GTE" ] | This is the comparison to perform. | Operation | Description | | --------- | ------- | | LT        | Strictly less than: `firstDate < secondDate` | | LTE       | Less than or equal to: `firstDate <= secondDate` | | GT        | Strictly greater than: `firstDate > secondDate` | | GTE       | Greater than or equal to: `firstDate >= secondDate` |  | [required]
**PositiveCondition** | **String** | The output of the transform if the expression evalutes to true | [required]
**NegativeCondition** | **String** | The output of the transform if the expression evalutes to false | [required]
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Datecompare = Initialize-Datecompare  -FirstDate null `
 -SecondDate null `
 -Operator LT `
 -PositiveCondition true `
 -NegativeCondition false `
 -RequiresPeriodicRefresh false `
 -VarInput {"type":"accountAttribute","attributes":{"attributeName":"first_name","sourceName":"Source"}}
```

- Convert the resource to JSON
```powershell
$Datecompare | ConvertTo-JSON
```


[[Back to top]](#) 

