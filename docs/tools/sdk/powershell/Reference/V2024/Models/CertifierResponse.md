---
id: v2024-certifier-response
title: CertifierResponse
pagination_label: CertifierResponse
sidebar_label: CertifierResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CertifierResponse', 'V2024CertifierResponse'] 
slug: /tools/sdk/powershell/v2024/models/certifier-response
tags: ['SDK', 'Software Development Kit', 'CertifierResponse', 'V2024CertifierResponse']
---


# CertifierResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the id of the certifier | [optional] 
**DisplayName** | **String** | the name of the certifier | [optional] 

## Examples

- Prepare the resource
```powershell
$CertifierResponse = Initialize-PSSailpoint.V2024CertifierResponse  -Id 8a80828f643d484f01643e14202e206f `
 -DisplayName John Snow
```

- Convert the resource to JSON
```powershell
$CertifierResponse | ConvertTo-JSON
```


[[Back to top]](#) 

