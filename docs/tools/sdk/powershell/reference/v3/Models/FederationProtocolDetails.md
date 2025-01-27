---
id: federation-protocol-details
title: FederationProtocolDetails
pagination_label: FederationProtocolDetails
sidebar_label: FederationProtocolDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FederationProtocolDetails'] 
slug: /tools/sdk/powershell/v3/models/federation-protocol-details
tags: ['SDK', 'Software Development Kit', 'FederationProtocolDetails']
---


# FederationProtocolDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Role** |  Pointer to  **Enum** [  "SAML_IDP",    "SAML_SP" ] | Federation protocol role | [optional] 
**EntityId** |  Pointer to **String** | An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP). | [optional] 

## Examples

- Prepare the resource
```powershell
$FederationProtocolDetails = Initialize-PSSailpoint.V3FederationProtocolDetails  -Role SAML_IDP `
 -EntityId http://www.okta.com/exkdaruy8Ln5Ry7C54x6
```

- Convert the resource to JSON
```powershell
$FederationProtocolDetails | ConvertTo-JSON
```


[[Back to top]](#) 

