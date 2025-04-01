---
id: v2025-access-model-metadata
title: AccessModelMetadata
pagination_label: AccessModelMetadata
sidebar_label: AccessModelMetadata
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessModelMetadata', 'V2025AccessModelMetadata'] 
slug: /tools/sdk/powershell/v2025/models/access-model-metadata
tags: ['SDK', 'Software Development Kit', 'AccessModelMetadata', 'V2025AccessModelMetadata']
---


# AccessModelMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | Unique identifier for the metadata type | [optional] 
**Name** | **String** | Human readable name of the metadata type | [optional] 
**Multiselect** | **Boolean** | Allows selecting multiple values | [optional] [default to $false]
**Status** | **String** | The state of the metadata item | [optional] 
**Type** | **String** | The type of the metadata item | [optional] 
**ObjectTypes** | **[]String** | The types of objects | [optional] 
**Description** | **String** | Describes the metadata item | [optional] 
**Values** | [**[]AccessModelMetadataValuesInner**](access-model-metadata-values-inner) | The value to assign to the metadata item | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessModelMetadata = Initialize-PSSailpoint.V2025AccessModelMetadata  -Key iscCsp `
 -Name CSP `
 -Multiselect true `
 -Status active `
 -Type governance `
 -ObjectTypes null `
 -Description Indicates the type of deployment environment of an access item. `
 -Values null
```

- Convert the resource to JSON
```powershell
$AccessModelMetadata | ConvertTo-JSON
```


[[Back to top]](#) 

