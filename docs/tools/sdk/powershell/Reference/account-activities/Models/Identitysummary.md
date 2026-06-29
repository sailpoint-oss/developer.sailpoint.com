---
id: identitysummary
title: Identitysummary
pagination_label: Identitysummary
sidebar_label: Identitysummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identitysummary', 'Identitysummary'] 
slug: /tools/sdk/powershell/accountactivities/models/identitysummary
tags: ['SDK', 'Software Development Kit', 'Identitysummary', 'Identitysummary']
---


# Identitysummary

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
$Identitysummary = Initialize-Identitysummary  -Id ff80818155fe8c080155fe8d925b0316 `
 -Name SailPoint Services `
 -IdentityId c15b9f5cca5a4e9599eaa0e64fa921bd `
 -Completed true
```

- Convert the resource to JSON
```powershell
$Identitysummary | ConvertTo-JSON
```


[[Back to top]](#) 

