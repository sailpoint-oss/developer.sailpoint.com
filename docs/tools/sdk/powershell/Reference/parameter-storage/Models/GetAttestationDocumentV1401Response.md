---
id: get-attestation-document-v1401-response
title: GetAttestationDocumentV1401Response
pagination_label: GetAttestationDocumentV1401Response
sidebar_label: GetAttestationDocumentV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetAttestationDocumentV1401Response', 'GetAttestationDocumentV1401Response'] 
slug: /tools/sdk/powershell/parameterstorage/models/get-attestation-document-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetAttestationDocumentV1401Response', 'GetAttestationDocumentV1401Response']
---


# GetAttestationDocumentV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetAttestationDocumentV1401Response = Initialize-GetAttestationDocumentV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetAttestationDocumentV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

