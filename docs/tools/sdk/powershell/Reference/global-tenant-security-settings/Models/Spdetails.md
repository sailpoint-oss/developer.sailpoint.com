---
id: spdetails
title: Spdetails
pagination_label: Spdetails
sidebar_label: Spdetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Spdetails', 'Spdetails'] 
slug: /tools/sdk/powershell/globaltenantsecuritysettings/models/spdetails
tags: ['SDK', 'Software Development Kit', 'Spdetails', 'Spdetails']
---


# Spdetails

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
$Spdetails = Initialize-Spdetails  -Role SAML_IDP `
 -EntityId http://www.okta.com/exkdaruy8Ln5Ry7C54x6 `
 -Alias acme-sp `
 -CallbackUrl https://example-tenant.identitynow.com/sso/Consumer/metaAlias/example-tenant-sp `
 -LegacyAcsUrl https://megapod-useast1-sso.identitysoon.com/sso/Consumer/metaAlias/acme/sp
```

- Convert the resource to JSON
```powershell
$Spdetails | ConvertTo-JSON
```


[[Back to top]](#) 

