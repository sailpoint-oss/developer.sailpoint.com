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
**Table** |  [**map[string]AnyType**](any-type) | This is a JSON object of key-value pairs. The key is the string that will attempt to be matched to the input, and the value is the output string that should be returned if the key is matched   &gt;**Note** the use of the optional default key value here; if none of the three countries in the above example match the input string, the transform will return &quot;&quot;Unknown Region&quot;&quot; for the attribute that is mapped to this transform.  | 
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [**map[string]AnyType**](any-type) | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Lookup = Initialize-PSSailpointLookup  -Table {USA&#x3D;Americas, FRA&#x3D;EMEA, AUS&#x3D;APAC, default&#x3D;Unknown Region} `
 -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$Lookup | ConvertTo-JSON
```


[[Back to top]](#) 

