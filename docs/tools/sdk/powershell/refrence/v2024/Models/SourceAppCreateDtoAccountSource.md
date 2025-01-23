---
id: source-app-create-dto-account-source
title: SourceAppCreateDtoAccountSource
pagination_label: SourceAppCreateDtoAccountSource
sidebar_label: SourceAppCreateDtoAccountSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceAppCreateDtoAccountSource'] 
slug: /tools/sdk/powershell/v2024/models/source-app-create-dto-account-source
tags: ['SDK', 'Software Development Kit', 'SourceAppCreateDtoAccountSource']
---


# SourceAppCreateDtoAccountSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The source ID | [required]
**Type** |  Pointer to **String** | The source type, will always be ""SOURCE"" | [optional] 
**Name** |  Pointer to **String** | The source name | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceAppCreateDtoAccountSource = Initialize-PSSailpoint.V2024SourceAppCreateDtoAccountSource  -Id 2c9180827ca885d7017ca8ce28a000eb `
 -Type SOURCE `
 -Name ODS-AD-Source
```

- Convert the resource to JSON
```powershell
$SourceAppCreateDtoAccountSource | ConvertTo-JSON
```


[[Back to top]](#) 

