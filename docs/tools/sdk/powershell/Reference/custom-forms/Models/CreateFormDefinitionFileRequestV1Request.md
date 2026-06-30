---
id: create-form-definition-file-request-v1-request
title: CreateFormDefinitionFileRequestV1Request
pagination_label: CreateFormDefinitionFileRequestV1Request
sidebar_label: CreateFormDefinitionFileRequestV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateFormDefinitionFileRequestV1Request', 'CreateFormDefinitionFileRequestV1Request'] 
slug: /tools/sdk/powershell/customforms/models/create-form-definition-file-request-v1-request
tags: ['SDK', 'Software Development Kit', 'CreateFormDefinitionFileRequestV1Request', 'CreateFormDefinitionFileRequestV1Request']
---


# CreateFormDefinitionFileRequestV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** | File specifying the multipart | [required]

## Examples

- Prepare the resource
```powershell
$CreateFormDefinitionFileRequestV1Request = Initialize-CreateFormDefinitionFileRequestV1Request  -File null
```

- Convert the resource to JSON
```powershell
$CreateFormDefinitionFileRequestV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

