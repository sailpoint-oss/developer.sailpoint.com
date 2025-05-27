---
id: beta-identity-attribute
title: IdentityAttribute
pagination_label: IdentityAttribute
sidebar_label: IdentityAttribute
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAttribute', 'BetaIdentityAttribute'] 
slug: /tools/sdk/powershell/beta/models/identity-attribute
tags: ['SDK', 'Software Development Kit', 'IdentityAttribute', 'BetaIdentityAttribute']
---


# IdentityAttribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Identity attribute's technical name. | [required]
**DisplayName** | **String** | Identity attribute's business-friendly name. | [optional] 
**Standard** | **Boolean** | Indicates whether the attribute is 'standard' or 'default'. | [optional] [default to $false]
**Type** | **String** | Identity attribute's type. | [optional] 
**Multi** | **Boolean** | Indicates whether the identity attribute is multi-valued. | [optional] [default to $false]
**Searchable** | **Boolean** | Indicates whether the identity attribute is searchable. | [optional] [default to $false]
**System** | **Boolean** | Indicates whether the identity attribute is 'system', meaning that it doesn't have a source and isn't configurable. | [optional] [default to $false]
**Sources** | [**[]Source1**](source1) | Identity attribute's list of sources - this specifies how the rule's value is derived. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttribute = Initialize-BetaIdentityAttribute  -Name costCenter `
 -DisplayName Cost Center `
 -Standard false `
 -Type string `
 -Multi false `
 -Searchable false `
 -System false `
 -Sources null
```

- Convert the resource to JSON
```powershell
$IdentityAttribute | ConvertTo-JSON
```


[[Back to top]](#) 

