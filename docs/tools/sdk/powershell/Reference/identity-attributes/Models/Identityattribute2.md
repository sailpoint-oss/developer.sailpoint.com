---
id: identityattribute2
title: Identityattribute2
pagination_label: Identityattribute2
sidebar_label: Identityattribute2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identityattribute2', 'Identityattribute2'] 
slug: /tools/sdk/powershell/identityattributes/models/identityattribute2
tags: ['SDK', 'Software Development Kit', 'Identityattribute2', 'Identityattribute2']
---


# Identityattribute2

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
**Sources** | [**[]Source2**](source2) | Identity attribute's list of sources - this specifies how the rule's value is derived. | [optional] 

## Examples

- Prepare the resource
```powershell
$Identityattribute2 = Initialize-Identityattribute2  -Name costCenter `
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
$Identityattribute2 | ConvertTo-JSON
```


[[Back to top]](#) 

