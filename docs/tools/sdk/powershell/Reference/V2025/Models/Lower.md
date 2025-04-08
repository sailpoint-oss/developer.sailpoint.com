---
id: v2025-lower
title: Lower
pagination_label: Lower
sidebar_label: Lower
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Lower', 'V2025Lower'] 
slug: /tools/sdk/powershell/v2025/models/lower
tags: ['SDK', 'Software Development Kit', 'Lower', 'V2025Lower']
---


# Lower

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Lower = Initialize-PSSailpoint.V2025Lower  -RequiresPeriodicRefresh false `
 -VarInput {type=accountAttribute, attributes={attributeName=first_name, sourceName=Source}}
```

- Convert the resource to JSON
```powershell
$Lower | ConvertTo-JSON
```


[[Back to top]](#) 

