---
id: create-uploaded-configuration-v1-request
title: CreateUploadedConfigurationV1Request
pagination_label: CreateUploadedConfigurationV1Request
sidebar_label: CreateUploadedConfigurationV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateUploadedConfigurationV1Request', 'CreateUploadedConfigurationV1Request'] 
slug: /tools/sdk/powershell/configurationhub/models/create-uploaded-configuration-v1-request
tags: ['SDK', 'Software Development Kit', 'CreateUploadedConfigurationV1Request', 'CreateUploadedConfigurationV1Request']
---


# CreateUploadedConfigurationV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarData** | **System.IO.FileInfo** | JSON file containing the objects to be imported. | [required]
**Name** | **String** | Name that will be assigned to the uploaded configuration file. | [required]

## Examples

- Prepare the resource
```powershell
$CreateUploadedConfigurationV1Request = Initialize-CreateUploadedConfigurationV1Request  -VarData null `
 -Name null
```

- Convert the resource to JSON
```powershell
$CreateUploadedConfigurationV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

