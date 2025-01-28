---
id: v2024-entitlement1-access-model-metadata
title: Entitlement1AccessModelMetadata
pagination_label: Entitlement1AccessModelMetadata
sidebar_label: Entitlement1AccessModelMetadata
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlement1AccessModelMetadata', 'V2024Entitlement1AccessModelMetadata'] 
slug: /tools/sdk/powershell/v2024/models/entitlement1-access-model-metadata
tags: ['SDK', 'Software Development Kit', 'Entitlement1AccessModelMetadata', 'V2024Entitlement1AccessModelMetadata']
---


# Entitlement1AccessModelMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** |  Pointer to [**[]AttributeDTO**](attribute-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlement1AccessModelMetadata = Initialize-PSSailpoint.V2024Entitlement1AccessModelMetadata  -Attributes [{key&#x3D;iscPrivacy, name&#x3D;Privacy, multiselect&#x3D;false, status&#x3D;active, type&#x3D;governance, objectTypes&#x3D;[all], description&#x3D;Specifies the level of privacy associated with an access item., values&#x3D;[{value&#x3D;public, name&#x3D;Public, status&#x3D;active}]}]
```

- Convert the resource to JSON
```powershell
$Entitlement1AccessModelMetadata | ConvertTo-JSON
```


[[Back to top]](#) 

