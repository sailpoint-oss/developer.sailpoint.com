---
id: v2025-sp-details
title: SpDetails
pagination_label: SpDetails
sidebar_label: SpDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SpDetails', 'V2025SpDetails'] 
slug: /tools/sdk/powershell/v2025/models/sp-details
tags: ['SDK', 'Software Development Kit', 'SpDetails', 'V2025SpDetails']
---


# SpDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Role** |  **Enum** [  "SAML_IDP",    "SAML_SP" ] | Federation protocol role | [optional] 
**EntityId** | **String** | An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP). | [optional] 
**Alias** | **String** | Unique alias used to identify the selected local service provider based on used URL. Used with SP configurations. | [optional] 
**CallbackUrl** | **String** | The allowed callback URL where users will be redirected to after authentication. Used with SP configurations. | [required]
**LegacyAcsUrl** | **String** | The legacy ACS URL used for SAML authentication. Used with SP configurations. | [optional] 

## Examples

- Prepare the resource
```powershell
$SpDetails = Initialize-V2025SpDetails  -Role SAML_IDP `
 -EntityId http://www.okta.com/exkdaruy8Ln5Ry7C54x6 `
 -Alias acme-sp `
 -CallbackUrl https://stradbroke-sso.identitysoon.com/sso/Consumer/metaAlias/cdov-saml/sp `
 -LegacyAcsUrl https://megapod-useast1-sso.identitysoon.com/sso/Consumer/metaAlias/acme/sp
```

- Convert the resource to JSON
```powershell
$SpDetails | ConvertTo-JSON
```


[[Back to top]](#) 

