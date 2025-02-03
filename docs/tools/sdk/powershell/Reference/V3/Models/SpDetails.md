---
id: sp-details
title: SpDetails
pagination_label: SpDetails
sidebar_label: SpDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SpDetails', 'SpDetails'] 
slug: /tools/sdk/powershell/v3/models/sp-details
tags: ['SDK', 'Software Development Kit', 'SpDetails', 'SpDetails']
---


# SpDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Role** |  **Enum** [  "SAML_SP" ] | Federation protocol role | [optional] 
**EntityId** | **String** | An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP). | [optional] 
**Alias** | **String** | Unique alias used to identify the selected local service provider based on used URL. Used with SP configurations. | [optional] 
**CallbackUrl** | **String** | The allowed callback URL where users will be redirected to after authentication. Used with SP configurations. | [optional] 

## Examples

- Prepare the resource
```powershell
$SpDetails = Initialize-PSSailpoint.V3SpDetails  -Role SAML_SP `
 -EntityId http://www.okta.com/exkdaruy8Ln5Ry7C54x6 `
 -Alias acme-sp `
 -CallbackUrl https://stradbroke-sso.identitysoon.com/sso/Consumer/metaAlias/cdov-saml/sp
```

- Convert the resource to JSON
```powershell
$SpDetails | ConvertTo-JSON
```


[[Back to top]](#) 

