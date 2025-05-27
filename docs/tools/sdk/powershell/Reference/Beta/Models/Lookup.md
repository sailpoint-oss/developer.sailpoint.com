---
id: beta-lookup
title: Lookup
pagination_label: Lookup
sidebar_label: Lookup
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Lookup', 'BetaLookup'] 
slug: /tools/sdk/powershell/beta/models/lookup
tags: ['SDK', 'Software Development Kit', 'Lookup', 'BetaLookup']
---


# Lookup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Table** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is a JSON object of key-value pairs. The key is the string that will attempt to be matched to the input, and the value is the output string that should be returned if the key is matched   >**Note** the use of the optional default key value here; if none of the three countries in the above example match the input string, the transform will return ""Unknown Region"" for the attribute that is mapped to this transform.  | [required]
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Lookup = Initialize-BetaLookup  -Table {USA=Americas, FRA=EMEA, AUS=APAC, default=Unknown Region} `
 -RequiresPeriodicRefresh false `
 -VarInput {type=accountAttribute, attributes={attributeName=first_name, sourceName=Source}}
```

- Convert the resource to JSON
```powershell
$Lookup | ConvertTo-JSON
```


[[Back to top]](#) 

