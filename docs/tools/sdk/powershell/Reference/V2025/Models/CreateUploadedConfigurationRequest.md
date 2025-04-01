---
id: v2025-create-uploaded-configuration-request
title: CreateUploadedConfigurationRequest
pagination_label: CreateUploadedConfigurationRequest
sidebar_label: CreateUploadedConfigurationRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateUploadedConfigurationRequest', 'V2025CreateUploadedConfigurationRequest'] 
slug: /tools/sdk/powershell/v2025/models/create-uploaded-configuration-request
tags: ['SDK', 'Software Development Kit', 'CreateUploadedConfigurationRequest', 'V2025CreateUploadedConfigurationRequest']
---


# CreateUploadedConfigurationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarData** | **System.IO.FileInfo** | JSON file containing the objects to be imported. | [required]
**Name** | **String** | Name that will be assigned to the uploaded configuration file. | [required]

## Examples

- Prepare the resource
```powershell
$CreateUploadedConfigurationRequest = Initialize-PSSailpoint.V2025CreateUploadedConfigurationRequest  -VarData null `
 -Name null
```

- Convert the resource to JSON
```powershell
$CreateUploadedConfigurationRequest | ConvertTo-JSON
```


[[Back to top]](#) 

