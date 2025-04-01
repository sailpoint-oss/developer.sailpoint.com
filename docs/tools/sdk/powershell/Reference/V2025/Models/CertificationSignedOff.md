---
id: v2025-certification-signed-off
title: CertificationSignedOff
pagination_label: CertificationSignedOff
sidebar_label: CertificationSignedOff
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CertificationSignedOff', 'V2025CertificationSignedOff'] 
slug: /tools/sdk/powershell/v2025/models/certification-signed-off
tags: ['SDK', 'Software Development Kit', 'CertificationSignedOff', 'V2025CertificationSignedOff']
---


# CertificationSignedOff

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Certification** | [**CertificationSignedOffCertification**](certification-signed-off-certification) |  | [required]

## Examples

- Prepare the resource
```powershell
$CertificationSignedOff = Initialize-PSSailpoint.V2025CertificationSignedOff  -Certification null
```

- Convert the resource to JSON
```powershell
$CertificationSignedOff | ConvertTo-JSON
```


[[Back to top]](#) 

