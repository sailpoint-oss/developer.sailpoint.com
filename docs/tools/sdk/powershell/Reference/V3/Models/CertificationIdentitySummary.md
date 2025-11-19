---
id: certification-identity-summary
title: CertificationIdentitySummary
pagination_label: CertificationIdentitySummary
sidebar_label: CertificationIdentitySummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CertificationIdentitySummary', 'CertificationIdentitySummary'] 
slug: /tools/sdk/powershell/v3/models/certification-identity-summary
tags: ['SDK', 'Software Development Kit', 'CertificationIdentitySummary', 'CertificationIdentitySummary']
---


# CertificationIdentitySummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the identity summary | [optional] 
**Name** | **String** | Name of the linked identity | [optional] 
**IdentityId** | **String** | The ID of the identity being certified | [optional] 
**Completed** | **Boolean** | Indicates whether the review items for the linked identity's certification have been completed | [optional] 

## Examples

- Prepare the resource
```powershell
$CertificationIdentitySummary = Initialize-CertificationIdentitySummary  -Id 2c91808772a504f50172a9540e501ba7 `
 -Name Alison Ferguso `
 -IdentityId 2c9180857182306001719937377a33de `
 -Completed true
```

- Convert the resource to JSON
```powershell
$CertificationIdentitySummary | ConvertTo-JSON
```


[[Back to top]](#) 

