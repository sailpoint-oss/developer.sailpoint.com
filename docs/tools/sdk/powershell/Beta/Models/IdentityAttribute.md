---
id: identity-attribute
title: IdentityAttribute
pagination_label: IdentityAttribute
sidebar_label: IdentityAttribute
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityAttribute'] 
slug: /tools/sdk/powershell/beta/models/identity-attribute
tags: ['SDK', 'Software Development Kit', 'IdentityAttribute']
---


# IdentityAttribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | Identity attribute&#39;s technical name. | 
**DisplayName** |  Pointer to **String** | Identity attribute&#39;s business-friendly name. | [optional] 
**Standard** |  Pointer to **Boolean** | Indicates whether the attribute is &#39;standard&#39; or &#39;default&#39;. | [optional] [default to $false]
**Type** |  Pointer to **String** | Identity attribute&#39;s type. | [optional] 
**Multi** |  Pointer to **Boolean** | Indicates whether the identity attribute is multi-valued. | [optional] [default to $false]
**Searchable** |  Pointer to **Boolean** | Indicates whether the identity attribute is searchable. | [optional] [default to $false]
**System** |  Pointer to **Boolean** | Indicates whether the identity attribute is &#39;system&#39;, meaning that it doesn&#39;t have a source and isn&#39;t configurable. | [optional] [default to $false]
**Sources** |  Pointer to [**[]Source1**](source1) | Identity attribute&#39;s list of sources - this specifies how the rule&#39;s value is derived. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttribute = Initialize-BetaIdentityAttribute  -Name uid `
 -DisplayName Identity Security Cloud Username `
 -Standard true `
 -Type string `
 -Multi false `
 -Searchable true `
 -System false `
 -Sources null
```

- Convert the resource to JSON
```powershell
$IdentityAttribute | ConvertTo-JSON
```


[[Back to top]](#) 

