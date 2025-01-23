---
id: certification-signed-off
title: CertificationSignedOff
pagination_label: CertificationSignedOff
sidebar_label: CertificationSignedOff
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CertificationSignedOff'] 
slug: /tools/sdk/powershell/v2024/models/certification-signed-off
tags: ['SDK', 'Software Development Kit', 'CertificationSignedOff']
---


# CertificationSignedOff

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Certification** |  [**CertificationSignedOffCertification**](certification-signed-off-certification) |  | [required]

## Examples

- Prepare the resource
```powershell
$CertificationSignedOff = Initialize-PSSailpoint.V2024CertificationSignedOff  -Certification null
```

- Convert the resource to JSON
```powershell
$CertificationSignedOff | ConvertTo-JSON
```


[[Back to top]](#) 

