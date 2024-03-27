---
id: certification-reference-dto
title: CertificationReferenceDto
pagination_label: CertificationReferenceDto
sidebar_label: CertificationReferenceDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CertificationReferenceDto'] 
slug: /tools/sdk/powershell/beta/models/certification-reference-dto
tags: ['SDK', 'Software Development Kit', 'CertificationReferenceDto']
---


# CertificationReferenceDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "CERTIFICATION" ] | DTO type of certification for review. | [optional] 
**Id** |  Pointer to **String** | ID of certification for review. | [optional] 
**Name** |  Pointer to **String** | Display name of certification for review. | [optional] 

## Examples

- Prepare the resource
```powershell
$CertificationReferenceDto = Initialize-PSSailpointBetaCertificationReferenceDto  -Type IDENTITY `
 -Id 7589a83cec4b4f138ce56c1a5ef0756d `
 -Name Manager Access for Michael Michaels
```

- Convert the resource to JSON
```powershell
$CertificationReferenceDto | ConvertTo-JSON
```


[[Back to top]](#) 

