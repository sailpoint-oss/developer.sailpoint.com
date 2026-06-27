---
id: federationprotocoldetails
title: Federationprotocoldetails
pagination_label: Federationprotocoldetails
sidebar_label: Federationprotocoldetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Federationprotocoldetails', 'Federationprotocoldetails'] 
slug: /tools/sdk/powershell/globaltenantsecuritysettings/models/federationprotocoldetails
tags: ['SDK', 'Software Development Kit', 'Federationprotocoldetails', 'Federationprotocoldetails']
---


# Federationprotocoldetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Role** |  **Enum** [  "SAML_IDP",    "SAML_SP" ] | Federation protocol role | [optional] 
**EntityId** | **String** | An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP). | [optional] 

## Examples

- Prepare the resource
```powershell
$Federationprotocoldetails = Initialize-Federationprotocoldetails  -Role SAML_IDP `
 -EntityId http://www.okta.com/exkdaruy8Ln5Ry7C54x6
```

- Convert the resource to JSON
```powershell
$Federationprotocoldetails | ConvertTo-JSON
```


[[Back to top]](#) 

