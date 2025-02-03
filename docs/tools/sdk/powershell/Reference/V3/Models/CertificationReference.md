---
id: certification-reference
title: CertificationReference
pagination_label: CertificationReference
sidebar_label: CertificationReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CertificationReference', 'CertificationReference'] 
slug: /tools/sdk/powershell/v3/models/certification-reference
tags: ['SDK', 'Software Development Kit', 'CertificationReference', 'CertificationReference']
---


# CertificationReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The id of the certification. | [optional] 
**Name** | **String** | The name of the certification. | [optional] 
**Type** |  **Enum** [  "CERTIFICATION" ] |  | [optional] 
**Reviewer** | [**Reviewer**](reviewer) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CertificationReference = Initialize-PSSailpoint.V3CertificationReference  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Name Certification Name `
 -Type CERTIFICATION `
 -Reviewer null
```

- Convert the resource to JSON
```powershell
$CertificationReference | ConvertTo-JSON
```


[[Back to top]](#) 

