---
id: create-form-definition-file-request-request
title: CreateFormDefinitionFileRequestRequest
pagination_label: CreateFormDefinitionFileRequestRequest
sidebar_label: CreateFormDefinitionFileRequestRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CreateFormDefinitionFileRequestRequest'] 
slug: /tools/sdk/powershell/beta/models/create-form-definition-file-request-request
tags: ['SDK', 'Software Development Kit', 'CreateFormDefinitionFileRequestRequest']
---


# CreateFormDefinitionFileRequestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** |  **System.IO.FileInfo** | File specifying the multipart | 

## Examples

- Prepare the resource
```powershell
$CreateFormDefinitionFileRequestRequest = Initialize-BetaCreateFormDefinitionFileRequestRequest  -File null
```

- Convert the resource to JSON
```powershell
$CreateFormDefinitionFileRequestRequest | ConvertTo-JSON
```


[[Back to top]](#) 

