---
id: transform-definition1
title: TransformDefinition1
pagination_label: TransformDefinition1
sidebar_label: TransformDefinition1
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'TransformDefinition1'] 
slug: /tools/sdk/powershell/beta/models/transform-definition1
tags: ['SDK', 'Software Development Kit', 'TransformDefinition1']
---


# TransformDefinition1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **String** | The type of the transform definition. | [optional] 
**Attributes** |  Pointer to [**map[string]TransformDefinition1AttributesValue**](transform-definition1-attributes-value) | Arbitrary key-value pairs to store any metadata for the object | [optional] 

## Examples

- Prepare the resource
```powershell
$TransformDefinition1 = Initialize-PSSailpointBetaTransformDefinition1  -Type accountAttribute `
 -Attributes {attributeName&#x3D;e-mail, sourceName&#x3D;MySource, sourceId&#x3D;2c9180877a826e68017a8c0b03da1a53}
```

- Convert the resource to JSON
```powershell
$TransformDefinition1 | ConvertTo-JSON
```


[[Back to top]](#) 

