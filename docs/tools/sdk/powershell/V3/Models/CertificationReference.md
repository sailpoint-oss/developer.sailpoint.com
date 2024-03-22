---
id: certification-reference
title: CertificationReference
pagination_label: CertificationReference
sidebar_label: CertificationReference
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CertificationReference'] 
slug: /tools/sdk/powershell/v3/models/certification-reference
tags: ['SDK', 'Software Development Kit', 'CertificationReference']
---


# CertificationReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The id of the certification. | [optional] 
**Name** |  Pointer to **String** | The name of the certification. | [optional] 
**Type** |  Pointer to  **Enum** [  "CERTIFICATION" ] |  | [optional] 
**Reviewer** |  Pointer to [**Reviewer**](reviewer) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CertificationReference = Initialize-PSSailpointCertificationReference  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Name Certification Name `
 -Type CERTIFICATION `
 -Reviewer null
```

- Convert the resource to JSON
```powershell
$CertificationReference | ConvertTo-JSON
```


[[Back to top]](#) 

