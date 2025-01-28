---
id: beta-certification-reference
title: CertificationReference
pagination_label: CertificationReference
sidebar_label: CertificationReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CertificationReference', 'BetaCertificationReference'] 
slug: /tools/sdk/powershell/beta/models/certification-reference
tags: ['SDK', 'Software Development Kit', 'CertificationReference', 'BetaCertificationReference']
---


# CertificationReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "CERTIFICATION" ] | DTO type of certification for review. | [optional] 
**Id** |  Pointer to **String** | ID of certification for review. | [optional] 
**Name** |  Pointer to **String** | Display name of certification for review. | [optional] 
**Reviewer** |  Pointer to [**Reviewer**](reviewer) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CertificationReference = Initialize-PSSailpoint.BetaCertificationReference  -Type IDENTITY `
 -Id 7589a83cec4b4f138ce56c1a5ef0756d `
 -Name Manager Access for Michael Michaels `
 -Reviewer null
```

- Convert the resource to JSON
```powershell
$CertificationReference | ConvertTo-JSON
```


[[Back to top]](#) 

