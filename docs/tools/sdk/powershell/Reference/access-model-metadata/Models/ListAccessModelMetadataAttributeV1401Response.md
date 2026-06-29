---
id: list-access-model-metadata-attribute-v1401-response
title: ListAccessModelMetadataAttributeV1401Response
pagination_label: ListAccessModelMetadataAttributeV1401Response
sidebar_label: ListAccessModelMetadataAttributeV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListAccessModelMetadataAttributeV1401Response', 'ListAccessModelMetadataAttributeV1401Response'] 
slug: /tools/sdk/powershell/accessmodelmetadata/models/list-access-model-metadata-attribute-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListAccessModelMetadataAttributeV1401Response', 'ListAccessModelMetadataAttributeV1401Response']
---


# ListAccessModelMetadataAttributeV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListAccessModelMetadataAttributeV1401Response = Initialize-ListAccessModelMetadataAttributeV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListAccessModelMetadataAttributeV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

