---
id: beta-transform-definition1
title: TransformDefinition1
pagination_label: TransformDefinition1
sidebar_label: TransformDefinition1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TransformDefinition1', 'BetaTransformDefinition1'] 
slug: /tools/sdk/powershell/beta/models/transform-definition1
tags: ['SDK', 'Software Development Kit', 'TransformDefinition1', 'BetaTransformDefinition1']
---


# TransformDefinition1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Transform definition type. | [optional] 
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Arbitrary key-value pairs to store any metadata for the object | [optional] 

## Examples

- Prepare the resource
```powershell
$TransformDefinition1 = Initialize-PSSailpoint.BetaTransformDefinition1  -Type accountAttribute `
 -Attributes {attributeName=e-mail, sourceName=MySource, sourceId=2c9180877a826e68017a8c0b03da1a53}
```

- Convert the resource to JSON
```powershell
$TransformDefinition1 | ConvertTo-JSON
```


[[Back to top]](#) 

