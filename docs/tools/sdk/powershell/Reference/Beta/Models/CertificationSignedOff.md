---
id: beta-certification-signed-off
title: CertificationSignedOff
pagination_label: CertificationSignedOff
sidebar_label: CertificationSignedOff
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CertificationSignedOff', 'BetaCertificationSignedOff'] 
slug: /tools/sdk/powershell/beta/models/certification-signed-off
tags: ['SDK', 'Software Development Kit', 'CertificationSignedOff', 'BetaCertificationSignedOff']
---


# CertificationSignedOff

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Certification** | [**CertificationSignedOffCertification**](certification-signed-off-certification) |  | [required]

## Examples

- Prepare the resource
```powershell
$CertificationSignedOff = Initialize-PSSailpoint.BetaCertificationSignedOff  -Certification null
```

- Convert the resource to JSON
```powershell
$CertificationSignedOff | ConvertTo-JSON
```


[[Back to top]](#) 

