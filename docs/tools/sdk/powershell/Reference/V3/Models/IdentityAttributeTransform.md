---
id: identity-attribute-transform
title: IdentityAttributeTransform
pagination_label: IdentityAttributeTransform
sidebar_label: IdentityAttributeTransform
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAttributeTransform', 'IdentityAttributeTransform'] 
slug: /tools/sdk/powershell/v3/models/identity-attribute-transform
tags: ['SDK', 'Software Development Kit', 'IdentityAttributeTransform', 'IdentityAttributeTransform']
---


# IdentityAttributeTransform

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityAttributeName** | **String** | Name of the identity attribute. | [optional] 
**TransformDefinition** | [**TransformDefinition**](transform-definition) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttributeTransform = Initialize-PSSailpoint.V3IdentityAttributeTransform  -IdentityAttributeName email `
 -TransformDefinition null
```

- Convert the resource to JSON
```powershell
$IdentityAttributeTransform | ConvertTo-JSON
```


[[Back to top]](#) 

