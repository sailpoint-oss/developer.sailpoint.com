---
id: sourceappcreatedto-account-source
title: SourceappcreatedtoAccountSource
pagination_label: SourceappcreatedtoAccountSource
sidebar_label: SourceappcreatedtoAccountSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceappcreatedtoAccountSource', 'SourceappcreatedtoAccountSource'] 
slug: /tools/sdk/powershell/apps/models/sourceappcreatedto-account-source
tags: ['SDK', 'Software Development Kit', 'SourceappcreatedtoAccountSource', 'SourceappcreatedtoAccountSource']
---


# SourceappcreatedtoAccountSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The source ID | [required]
**Type** | **String** | The source type, will always be ""SOURCE"" | [optional] 
**Name** | **String** | The source name | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceappcreatedtoAccountSource = Initialize-SourceappcreatedtoAccountSource  -Id 2c9180827ca885d7017ca8ce28a000eb `
 -Type SOURCE `
 -Name ODS-AD-Source
```

- Convert the resource to JSON
```powershell
$SourceappcreatedtoAccountSource | ConvertTo-JSON
```


[[Back to top]](#) 

