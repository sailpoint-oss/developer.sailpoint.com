---
id: v2025-create-form-definition-file-request-request
title: CreateFormDefinitionFileRequestRequest
pagination_label: CreateFormDefinitionFileRequestRequest
sidebar_label: CreateFormDefinitionFileRequestRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateFormDefinitionFileRequestRequest', 'V2025CreateFormDefinitionFileRequestRequest'] 
slug: /tools/sdk/powershell/v2025/models/create-form-definition-file-request-request
tags: ['SDK', 'Software Development Kit', 'CreateFormDefinitionFileRequestRequest', 'V2025CreateFormDefinitionFileRequestRequest']
---


# CreateFormDefinitionFileRequestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** | File specifying the multipart | [required]

## Examples

- Prepare the resource
```powershell
$CreateFormDefinitionFileRequestRequest = Initialize-V2025CreateFormDefinitionFileRequestRequest  -File null
```

- Convert the resource to JSON
```powershell
$CreateFormDefinitionFileRequestRequest | ConvertTo-JSON
```


[[Back to top]](#) 

