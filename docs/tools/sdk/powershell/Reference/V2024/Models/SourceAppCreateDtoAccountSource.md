---
id: v2024-source-app-create-dto-account-source
title: SourceAppCreateDtoAccountSource
pagination_label: SourceAppCreateDtoAccountSource
sidebar_label: SourceAppCreateDtoAccountSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceAppCreateDtoAccountSource', 'V2024SourceAppCreateDtoAccountSource'] 
slug: /tools/sdk/powershell/v2024/models/source-app-create-dto-account-source
tags: ['SDK', 'Software Development Kit', 'SourceAppCreateDtoAccountSource', 'V2024SourceAppCreateDtoAccountSource']
---


# SourceAppCreateDtoAccountSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The source ID | [required]
**Type** | **String** | The source type, will always be ""SOURCE"" | [optional] 
**Name** | **String** | The source name | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceAppCreateDtoAccountSource = Initialize-V2024SourceAppCreateDtoAccountSource  -Id 2c9180827ca885d7017ca8ce28a000eb `
 -Type SOURCE `
 -Name ODS-AD-Source
```

- Convert the resource to JSON
```powershell
$SourceAppCreateDtoAccountSource | ConvertTo-JSON
```


[[Back to top]](#) 

