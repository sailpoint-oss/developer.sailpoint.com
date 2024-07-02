---
id: lookup
title: Lookup
pagination_label: Lookup
sidebar_label: Lookup
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Lookup'] 
slug: /tools/sdk/powershell/v3/models/lookup
tags: ['SDK', 'Software Development Kit', 'Lookup']
---


# Lookup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Table** |  [map[string] **Any**] | This is a JSON object of key-value pairs. The key is the string that will attempt to be matched to the input, and the value is the output string that should be returned if the key is matched   &gt;**Note** the use of the optional default key value here; if none of the three countries in the above example match the input string, the transform will return &quot;&quot;Unknown Region&quot;&quot; for the attribute that is mapped to this transform.  | 
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [map[string] **Any**] | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Lookup = Initialize-Lookup  -Table {USA=Americas, FRA=EMEA, AUS=APAC, default=Unknown Region} `
 -RequiresPeriodicRefresh false `
 -VarInput {type=accountAttribute, attributes={attributeName=first_name, sourceName=Source}}
```

- Convert the resource to JSON
```powershell
$Lookup | ConvertTo-JSON
```


[[Back to top]](#) 

