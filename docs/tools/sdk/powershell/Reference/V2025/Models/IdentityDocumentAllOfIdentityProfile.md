---
id: v2025-identity-document-all-of-identity-profile
title: IdentityDocumentAllOfIdentityProfile
pagination_label: IdentityDocumentAllOfIdentityProfile
sidebar_label: IdentityDocumentAllOfIdentityProfile
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityDocumentAllOfIdentityProfile', 'V2025IdentityDocumentAllOfIdentityProfile'] 
slug: /tools/sdk/powershell/v2025/models/identity-document-all-of-identity-profile
tags: ['SDK', 'Software Development Kit', 'IdentityDocumentAllOfIdentityProfile', 'V2025IdentityDocumentAllOfIdentityProfile']
---


# IdentityDocumentAllOfIdentityProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identity profile's ID. | [optional] 
**Name** | **String** | Identity profile's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityDocumentAllOfIdentityProfile = Initialize-V2025IdentityDocumentAllOfIdentityProfile  -Id 3bc8ad26b8664945866b31339d1ff7d2 `
 -Name HR Employees
```

- Convert the resource to JSON
```powershell
$IdentityDocumentAllOfIdentityProfile | ConvertTo-JSON
```


[[Back to top]](#) 

