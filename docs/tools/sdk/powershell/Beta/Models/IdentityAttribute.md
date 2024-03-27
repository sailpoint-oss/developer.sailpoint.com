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
**Name** |  Pointer to **String** | The technical name of the identity attribute | [optional] 
**DisplayName** |  Pointer to **String** | The business-friendly name of the identity attribute | [optional] 
**Standard** |  Pointer to **Boolean** | Shows if the attribute is &#39;standard&#39; or default | [optional] [default to $false]
**Type** |  Pointer to **String** | The type of the identity attribute | [optional] 
**Multi** |  Pointer to **Boolean** | Shows if the identity attribute is multi-valued | [optional] [default to $false]
**Searchable** |  Pointer to **Boolean** | Shows if the identity attribute is searchable | [optional] [default to $false]
**System** |  Pointer to **Boolean** | Shows this is &#39;system&#39; identity attribute that does not have a source and is not configurable. | [optional] [default to $false]
**Sources** |  Pointer to [**[]Source1**](source1) | List of sources for an attribute, this specifies how the value of the rule is derived | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttribute = Initialize-PSSailpointBetaIdentityAttribute  -Name uid `
 -DisplayName IdentityNow Username `
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

