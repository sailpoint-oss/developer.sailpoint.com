---
id: v2024-create-form-definition-file-request-request
title: CreateFormDefinitionFileRequestRequest
pagination_label: CreateFormDefinitionFileRequestRequest
sidebar_label: CreateFormDefinitionFileRequestRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateFormDefinitionFileRequestRequest', 'V2024CreateFormDefinitionFileRequestRequest'] 
slug: /tools/sdk/powershell/v2024/models/create-form-definition-file-request-request
tags: ['SDK', 'Software Development Kit', 'CreateFormDefinitionFileRequestRequest', 'V2024CreateFormDefinitionFileRequestRequest']
---


# CreateFormDefinitionFileRequestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** |  **System.IO.FileInfo** | File specifying the multipart | [required]

## Examples

- Prepare the resource
```powershell
$CreateFormDefinitionFileRequestRequest = Initialize-PSSailpoint.V2024CreateFormDefinitionFileRequestRequest  -File null
```

- Convert the resource to JSON
```powershell
$CreateFormDefinitionFileRequestRequest | ConvertTo-JSON
```


[[Back to top]](#) 

