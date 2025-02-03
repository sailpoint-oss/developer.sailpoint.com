---
id: beta-identity-summary
title: IdentitySummary
pagination_label: IdentitySummary
sidebar_label: IdentitySummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentitySummary', 'BetaIdentitySummary'] 
slug: /tools/sdk/powershell/beta/models/identity-summary
tags: ['SDK', 'Software Development Kit', 'IdentitySummary', 'BetaIdentitySummary']
---


# IdentitySummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of this identity summary | [optional] 
**Name** | **String** | Human-readable display name of identity | [optional] 
**IdentityId** | **String** | ID of the identity that this summary represents | [optional] 
**Completed** | **Boolean** | Indicates if all access items for this summary have been decided on | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$IdentitySummary = Initialize-PSSailpoint.BetaIdentitySummary  -Id ff80818155fe8c080155fe8d925b0316 `
 -Name SailPoint Services `
 -IdentityId c15b9f5cca5a4e9599eaa0e64fa921bd `
 -Completed true
```

- Convert the resource to JSON
```powershell
$IdentitySummary | ConvertTo-JSON
```


[[Back to top]](#) 

