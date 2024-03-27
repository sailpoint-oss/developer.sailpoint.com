---
id: identity-attribute-transform1
title: IdentityAttributeTransform1
pagination_label: IdentityAttributeTransform1
sidebar_label: IdentityAttributeTransform1
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityAttributeTransform1'] 
slug: /tools/sdk/powershell/beta/models/identity-attribute-transform1
tags: ['SDK', 'Software Development Kit', 'IdentityAttributeTransform1']
---


# IdentityAttributeTransform1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityAttributeName** |  Pointer to **String** | Name of the identity attribute. | [optional] 
**TransformDefinition** |  Pointer to [**TransformDefinition1**](transform-definition1) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttributeTransform1 = Initialize-PSSailpointBetaIdentityAttributeTransform1  -IdentityAttributeName email `
 -TransformDefinition null
```

- Convert the resource to JSON
```powershell
$IdentityAttributeTransform1 | ConvertTo-JSON
```


[[Back to top]](#) 

