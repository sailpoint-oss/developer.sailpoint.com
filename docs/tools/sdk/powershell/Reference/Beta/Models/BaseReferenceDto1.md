---
id: beta-base-reference-dto1
title: BaseReferenceDto1
pagination_label: BaseReferenceDto1
sidebar_label: BaseReferenceDto1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BaseReferenceDto1', 'BetaBaseReferenceDto1'] 
slug: /tools/sdk/powershell/beta/models/base-reference-dto1
tags: ['SDK', 'Software Development Kit', 'BaseReferenceDto1', 'BetaBaseReferenceDto1']
---


# BaseReferenceDto1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the application ID | [optional] 
**Name** | **String** | the application name | [optional] 

## Examples

- Prepare the resource
```powershell
$BaseReferenceDto1 = Initialize-PSSailpoint.BetaBaseReferenceDto1  -Id ff8081814d977c21014da056804a0af3 `
 -Name Github
```

- Convert the resource to JSON
```powershell
$BaseReferenceDto1 | ConvertTo-JSON
```


[[Back to top]](#) 

