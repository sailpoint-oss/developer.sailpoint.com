---
id: split
title: Split
pagination_label: Split
sidebar_label: Split
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Split'] 
slug: /tools/sdk/powershell/v3/models/split
tags: ['SDK', 'Software Development Kit', 'Split']
---


# Split

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Delimiter** |  **String** | This can be either a single character or a regex expression, and is used by the transform to identify the break point between two substrings in the incoming data | [required]
**Index** |  **String** | An integer value for the desired array element after the incoming data has been split into a list; the array is a 0-based object, so the first array element would be index 0, the second element would be index 1, etc. | [required]
**Throws** |  Pointer to **Boolean** | A boolean (true/false) value which indicates whether an exception should be thrown and returned as an output when an index is out of bounds with the resultant array (i.e., the provided index value is larger than the size of the array)   `true` - The transform should return ""IndexOutOfBoundsException""   `false` - The transform should return null   If not provided, the transform will default to false and return a null  | [optional] [default to $false]
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Split = Initialize-PSSailpoint.V3Split  -Delimiter , `
 -Index 5 `
 -Throws true `
 -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$Split | ConvertTo-JSON
```


[[Back to top]](#) 

