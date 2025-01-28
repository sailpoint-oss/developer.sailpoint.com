---
id: v2024-certification-reference1
title: CertificationReference1
pagination_label: CertificationReference1
sidebar_label: CertificationReference1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CertificationReference1', 'V2024CertificationReference1'] 
slug: /tools/sdk/powershell/v2024/models/certification-reference1
tags: ['SDK', 'Software Development Kit', 'CertificationReference1', 'V2024CertificationReference1']
---


# CertificationReference1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "CERTIFICATION" ] | DTO type of certification for review. | [optional] 
**Id** |  Pointer to **String** | ID of certification for review. | [optional] 
**Name** |  Pointer to **String** | Display name of certification for review. | [optional] 
**Reviewer** |  Pointer to [**Reviewer1**](reviewer1) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CertificationReference1 = Initialize-PSSailpoint.V2024CertificationReference1  -Type IDENTITY `
 -Id 7589a83cec4b4f138ce56c1a5ef0756d `
 -Name Manager Access for Michael Michaels `
 -Reviewer null
```

- Convert the resource to JSON
```powershell
$CertificationReference1 | ConvertTo-JSON
```


[[Back to top]](#) 

