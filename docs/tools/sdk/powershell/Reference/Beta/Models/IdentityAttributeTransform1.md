---
id: beta-identity-attribute-transform1
title: IdentityAttributeTransform1
pagination_label: IdentityAttributeTransform1
sidebar_label: IdentityAttributeTransform1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAttributeTransform1', 'BetaIdentityAttributeTransform1'] 
slug: /tools/sdk/powershell/beta/models/identity-attribute-transform1
tags: ['SDK', 'Software Development Kit', 'IdentityAttributeTransform1', 'BetaIdentityAttributeTransform1']
---


# IdentityAttributeTransform1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityAttributeName** | **String** | Identity attribute's name. | [optional] 
**TransformDefinition** | [**TransformDefinition1**](transform-definition1) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttributeTransform1 = Initialize-BetaIdentityAttributeTransform1  -IdentityAttributeName email `
 -TransformDefinition null
```

- Convert the resource to JSON
```powershell
$IdentityAttributeTransform1 | ConvertTo-JSON
```


[[Back to top]](#) 

