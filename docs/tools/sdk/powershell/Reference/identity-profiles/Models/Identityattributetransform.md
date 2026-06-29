---
id: identityattributetransform
title: Identityattributetransform
pagination_label: Identityattributetransform
sidebar_label: Identityattributetransform
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identityattributetransform', 'Identityattributetransform'] 
slug: /tools/sdk/powershell/identityprofiles/models/identityattributetransform
tags: ['SDK', 'Software Development Kit', 'Identityattributetransform', 'Identityattributetransform']
---


# Identityattributetransform

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityAttributeName** | **String** | Identity attribute's name. | [optional] 
**TransformDefinition** | [**Transformdefinition**](transformdefinition) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Identityattributetransform = Initialize-Identityattributetransform  -IdentityAttributeName email `
 -TransformDefinition null
```

- Convert the resource to JSON
```powershell
$Identityattributetransform | ConvertTo-JSON
```


[[Back to top]](#) 

