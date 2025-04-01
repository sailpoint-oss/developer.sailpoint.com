---
id: v2025-form-definition-file-upload-response
title: FormDefinitionFileUploadResponse
pagination_label: FormDefinitionFileUploadResponse
sidebar_label: FormDefinitionFileUploadResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormDefinitionFileUploadResponse', 'V2025FormDefinitionFileUploadResponse'] 
slug: /tools/sdk/powershell/v2025/models/form-definition-file-upload-response
tags: ['SDK', 'Software Development Kit', 'FormDefinitionFileUploadResponse', 'V2025FormDefinitionFileUploadResponse']
---


# FormDefinitionFileUploadResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | **String** | Created is the date the file was uploaded | [optional] 
**FileId** | **String** | fileId is a unique ULID that serves as an identifier for the form definition file | [optional] 
**FormDefinitionId** | **String** | FormDefinitionID is a unique guid identifying this form definition | [optional] 

## Examples

- Prepare the resource
```powershell
$FormDefinitionFileUploadResponse = Initialize-PSSailpoint.V2025FormDefinitionFileUploadResponse  -Created 2023-07-12T20:14:57.74486Z `
 -FileId 01FHZXHK8PTP9FVK99Z66GXQTX.png `
 -FormDefinitionId 00000000-0000-0000-0000-000000000000
```

- Convert the resource to JSON
```powershell
$FormDefinitionFileUploadResponse | ConvertTo-JSON
```


[[Back to top]](#) 

