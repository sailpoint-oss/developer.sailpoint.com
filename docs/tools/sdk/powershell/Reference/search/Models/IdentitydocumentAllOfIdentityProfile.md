---
id: identitydocument-all-of-identity-profile
title: IdentitydocumentAllOfIdentityProfile
pagination_label: IdentitydocumentAllOfIdentityProfile
sidebar_label: IdentitydocumentAllOfIdentityProfile
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentitydocumentAllOfIdentityProfile', 'IdentitydocumentAllOfIdentityProfile'] 
slug: /tools/sdk/powershell/search/models/identitydocument-all-of-identity-profile
tags: ['SDK', 'Software Development Kit', 'IdentitydocumentAllOfIdentityProfile', 'IdentitydocumentAllOfIdentityProfile']
---


# IdentitydocumentAllOfIdentityProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identity profile's ID. | [optional] 
**Name** | **String** | Identity profile's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentitydocumentAllOfIdentityProfile = Initialize-IdentitydocumentAllOfIdentityProfile  -Id 3bc8ad26b8664945866b31339d1ff7d2 `
 -Name HR Employees
```

- Convert the resource to JSON
```powershell
$IdentitydocumentAllOfIdentityProfile | ConvertTo-JSON
```


[[Back to top]](#) 

