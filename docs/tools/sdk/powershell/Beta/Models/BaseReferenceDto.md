---
id: base-reference-dto
title: BaseReferenceDto
pagination_label: BaseReferenceDto
sidebar_label: BaseReferenceDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'BaseReferenceDto'] 
slug: /tools/sdk/powershell/beta/models/base-reference-dto
tags: ['SDK', 'Software Development Kit', 'BaseReferenceDto']
---


# BaseReferenceDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | the application ID | [optional] 
**Name** |  Pointer to **String** | the application name | [optional] 

## Examples

- Prepare the resource
```powershell
$BaseReferenceDto = Initialize-PSSailpointBetaBaseReferenceDto  -Id ff8081814d977c21014da056804a0af3 `
 -Name Github
```

- Convert the resource to JSON
```powershell
$BaseReferenceDto | ConvertTo-JSON
```


[[Back to top]](#) 

