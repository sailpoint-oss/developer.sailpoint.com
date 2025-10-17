---
id: v2025-parameter-storage-attestation-document
title: ParameterStorageAttestationDocument
pagination_label: ParameterStorageAttestationDocument
sidebar_label: ParameterStorageAttestationDocument
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ParameterStorageAttestationDocument', 'V2025ParameterStorageAttestationDocument'] 
slug: /tools/sdk/powershell/v2025/models/parameter-storage-attestation-document
tags: ['SDK', 'Software Development Kit', 'ParameterStorageAttestationDocument', 'V2025ParameterStorageAttestationDocument']
---


# ParameterStorageAttestationDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttestationDocument** | **String** | The Base64Url encoded attestation document. | [optional] 

## Examples

- Prepare the resource
```powershell
$ParameterStorageAttestationDocument = Initialize-V2025ParameterStorageAttestationDocument  -AttestationDocument YmFzZTY0IGVuY29kZWQgYXR0ZXN0YXRpb24gZG9jdW1lbnQgZ29lcyBoZXJlLg==
```

- Convert the resource to JSON
```powershell
$ParameterStorageAttestationDocument | ConvertTo-JSON
```


[[Back to top]](#) 

