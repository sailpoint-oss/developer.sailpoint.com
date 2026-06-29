---
id: certificationidentitysummary
title: Certificationidentitysummary
pagination_label: Certificationidentitysummary
sidebar_label: Certificationidentitysummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Certificationidentitysummary', 'Certificationidentitysummary'] 
slug: /tools/sdk/powershell/certificationsummaries/models/certificationidentitysummary
tags: ['SDK', 'Software Development Kit', 'Certificationidentitysummary', 'Certificationidentitysummary']
---


# Certificationidentitysummary

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
$Certificationidentitysummary = Initialize-Certificationidentitysummary  -Id 2c91808772a504f50172a9540e501ba7 `
 -Name Alison Ferguso `
 -IdentityId 2c9180857182306001719937377a33de `
 -Completed true
```

- Convert the resource to JSON
```powershell
$Certificationidentitysummary | ConvertTo-JSON
```


[[Back to top]](#) 

