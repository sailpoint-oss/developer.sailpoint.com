---
id: identity-summary
title: IdentitySummary
pagination_label: IdentitySummary
sidebar_label: IdentitySummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentitySummary', 'IdentitySummary'] 
slug: /tools/sdk/powershell/v3/models/identity-summary
tags: ['SDK', 'Software Development Kit', 'IdentitySummary', 'IdentitySummary']
---


# IdentitySummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | ID of this identity summary | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of identity | [optional] 
**IdentityId** |  Pointer to **String** | ID of the identity that this summary represents | [optional] 
**Completed** |  Pointer to **Boolean** | Indicates if all access items for this summary have been decided on | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$IdentitySummary = Initialize-PSSailpoint.V3IdentitySummary  -Id ff80818155fe8c080155fe8d925b0316 `
 -Name SailPoint Services `
 -IdentityId c15b9f5cca5a4e9599eaa0e64fa921bd `
 -Completed true
```

- Convert the resource to JSON
```powershell
$IdentitySummary | ConvertTo-JSON
```


[[Back to top]](#) 

