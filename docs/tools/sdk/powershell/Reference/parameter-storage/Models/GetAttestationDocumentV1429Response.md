---
id: get-attestation-document-v1429-response
title: GetAttestationDocumentV1429Response
pagination_label: GetAttestationDocumentV1429Response
sidebar_label: GetAttestationDocumentV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetAttestationDocumentV1429Response', 'GetAttestationDocumentV1429Response'] 
slug: /tools/sdk/powershell/parameterstorage/models/get-attestation-document-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetAttestationDocumentV1429Response', 'GetAttestationDocumentV1429Response']
---


# GetAttestationDocumentV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetAttestationDocumentV1429Response = Initialize-GetAttestationDocumentV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetAttestationDocumentV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

