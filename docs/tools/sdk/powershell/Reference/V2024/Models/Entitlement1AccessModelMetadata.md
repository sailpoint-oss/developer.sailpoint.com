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
**Attributes** | [**[]AttributeDTO**](attribute-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlement1AccessModelMetadata = Initialize-PSSailpoint.V2024Entitlement1AccessModelMetadata  -Attributes [{key=iscPrivacy, name=Privacy, multiselect=false, status=active, type=governance, objectTypes=[all], description=Specifies the level of privacy associated with an access item., values=[{value=public, name=Public, status=active}]}]
```

- Convert the resource to JSON
```powershell
$Entitlement1AccessModelMetadata | ConvertTo-JSON
```


[[Back to top]](#) 

