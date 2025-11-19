---
id: v2024-certification-signed-off
title: CertificationSignedOff
pagination_label: CertificationSignedOff
sidebar_label: CertificationSignedOff
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CertificationSignedOff', 'V2024CertificationSignedOff'] 
slug: /tools/sdk/powershell/v2024/models/certification-signed-off
tags: ['SDK', 'Software Development Kit', 'CertificationSignedOff', 'V2024CertificationSignedOff']
---


# CertificationSignedOff

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Certification** | [**CertificationSignedOffCertification**](certification-signed-off-certification) |  | [required]

## Examples

- Prepare the resource
```powershell
$CertificationSignedOff = Initialize-V2024CertificationSignedOff  -Certification null
```

- Convert the resource to JSON
```powershell
$CertificationSignedOff | ConvertTo-JSON
```


[[Back to top]](#) 

