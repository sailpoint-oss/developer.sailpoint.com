---
id: parameterstorageattestationdocument
title: Parameterstorageattestationdocument
pagination_label: Parameterstorageattestationdocument
sidebar_label: Parameterstorageattestationdocument
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Parameterstorageattestationdocument', 'Parameterstorageattestationdocument'] 
slug: /tools/sdk/powershell/parameterstorage/models/parameterstorageattestationdocument
tags: ['SDK', 'Software Development Kit', 'Parameterstorageattestationdocument', 'Parameterstorageattestationdocument']
---


# Parameterstorageattestationdocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttestationDocument** | **String** | The Base64Url encoded attestation document. | [optional] 

## Examples

- Prepare the resource
```powershell
$Parameterstorageattestationdocument = Initialize-Parameterstorageattestationdocument  -AttestationDocument YmFzZTY0IGVuY29kZWQgYXR0ZXN0YXRpb24gZG9jdW1lbnQgZ29lcyBoZXJlLg==
```

- Convert the resource to JSON
```powershell
$Parameterstorageattestationdocument | ConvertTo-JSON
```


[[Back to top]](#) 

