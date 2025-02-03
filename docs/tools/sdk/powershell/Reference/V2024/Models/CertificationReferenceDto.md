---
id: v2024-certification-reference-dto
title: CertificationReferenceDto
pagination_label: CertificationReferenceDto
sidebar_label: CertificationReferenceDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CertificationReferenceDto', 'V2024CertificationReferenceDto'] 
slug: /tools/sdk/powershell/v2024/models/certification-reference-dto
tags: ['SDK', 'Software Development Kit', 'CertificationReferenceDto', 'V2024CertificationReferenceDto']
---


# CertificationReferenceDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "CERTIFICATION" ] | DTO type of certification for review. | [optional] 
**Id** | **String** | ID of certification for review. | [optional] 
**Name** | **String** | Display name of certification for review. | [optional] 

## Examples

- Prepare the resource
```powershell
$CertificationReferenceDto = Initialize-PSSailpoint.V2024CertificationReferenceDto  -Type IDENTITY `
 -Id 7589a83cec4b4f138ce56c1a5ef0756d `
 -Name Manager Access for Michael Michaels
```

- Convert the resource to JSON
```powershell
$CertificationReferenceDto | ConvertTo-JSON
```


[[Back to top]](#) 

