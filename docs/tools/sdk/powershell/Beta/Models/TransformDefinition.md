---
id: transform-definition
title: TransformDefinition
pagination_label: TransformDefinition
sidebar_label: TransformDefinition
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'TransformDefinition'] 
slug: /tools/sdk/powershell/beta/models/transform-definition
tags: ['SDK', 'Software Development Kit', 'TransformDefinition']
---


# TransformDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **String** | The type of the transform definition. | [optional] 
**Attributes** |  Pointer to [**map[string]AnyType**](any-type) | Arbitrary key-value pairs to store any metadata for the object | [optional] 

## Examples

- Prepare the resource
```powershell
$TransformDefinition = Initialize-PSSailpointBetaTransformDefinition  -Type accountAttribute `
 -Attributes {attributeName&#x3D;e-mail, sourceName&#x3D;MySource, sourceId&#x3D;2c9180877a826e68017a8c0b03da1a53}
```

- Convert the resource to JSON
```powershell
$TransformDefinition | ConvertTo-JSON
```


[[Back to top]](#) 

