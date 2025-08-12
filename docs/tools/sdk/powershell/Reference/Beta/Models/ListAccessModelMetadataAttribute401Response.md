---
id: beta-list-access-model-metadata-attribute401-response
title: ListAccessModelMetadataAttribute401Response
pagination_label: ListAccessModelMetadataAttribute401Response
sidebar_label: ListAccessModelMetadataAttribute401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListAccessModelMetadataAttribute401Response', 'BetaListAccessModelMetadataAttribute401Response'] 
slug: /tools/sdk/powershell/beta/models/list-access-model-metadata-attribute401-response
tags: ['SDK', 'Software Development Kit', 'ListAccessModelMetadataAttribute401Response', 'BetaListAccessModelMetadataAttribute401Response']
---


# ListAccessModelMetadataAttribute401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListAccessModelMetadataAttribute401Response = Initialize-BetaListAccessModelMetadataAttribute401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListAccessModelMetadataAttribute401Response | ConvertTo-JSON
```


[[Back to top]](#) 

