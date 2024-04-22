---
id: form-definition-file-upload-response
title: FormDefinitionFileUploadResponse
pagination_label: FormDefinitionFileUploadResponse
sidebar_label: FormDefinitionFileUploadResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'FormDefinitionFileUploadResponse'] 
slug: /tools/sdk/powershell/beta/models/form-definition-file-upload-response
tags: ['SDK', 'Software Development Kit', 'FormDefinitionFileUploadResponse']
---


# FormDefinitionFileUploadResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** |  Pointer to **String** | Created is the date the file was uploaded | [optional] 
**FileId** |  Pointer to **String** | fileId is a unique ULID that serves as an identifier for the form definition file | [optional] 
**FormDefinitionId** |  Pointer to **String** | FormDefinitionID is a unique guid identifying this form definition | [optional] 

## Examples

- Prepare the resource
```powershell
$FormDefinitionFileUploadResponse = Initialize-BetaFormDefinitionFileUploadResponse  -Created 2023-07-12T20:14:57.74486Z `
 -FileId 01FHZXHK8PTP9FVK99Z66GXQTX.png `
 -FormDefinitionId 00000000-0000-0000-0000-000000000000
```

- Convert the resource to JSON
```powershell
$FormDefinitionFileUploadResponse | ConvertTo-JSON
```


[[Back to top]](#) 

