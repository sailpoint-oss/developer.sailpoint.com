---
id: transform-definition
title: TransformDefinition
pagination_label: TransformDefinition
sidebar_label: TransformDefinition
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TransformDefinition'] 
slug: /tools/sdk/powershell/v3/models/transform-definition
tags: ['SDK', 'Software Development Kit', 'TransformDefinition']
---


# TransformDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **String** | The type of the transform definition. | [optional] 
**Attributes** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Arbitrary key-value pairs to store any metadata for the object | [optional] 

## Examples

- Prepare the resource
```powershell
$TransformDefinition = Initialize-PSSailpoint.V3TransformDefinition  -Type accountAttribute `
 -Attributes {attributeName&#x3D;e-mail, sourceName&#x3D;MySource, sourceId&#x3D;2c9180877a826e68017a8c0b03da1a53}
```

- Convert the resource to JSON
```powershell
$TransformDefinition | ConvertTo-JSON
```


[[Back to top]](#) 

