---
id: v2024-federation-protocol-details
title: FederationProtocolDetails
pagination_label: FederationProtocolDetails
sidebar_label: FederationProtocolDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FederationProtocolDetails', 'V2024FederationProtocolDetails'] 
slug: /tools/sdk/powershell/v2024/models/federation-protocol-details
tags: ['SDK', 'Software Development Kit', 'FederationProtocolDetails', 'V2024FederationProtocolDetails']
---


# FederationProtocolDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Role** |  **Enum** [  "SAML_IDP",    "SAML_SP" ] | Federation protocol role | [optional] 
**EntityId** | **String** | An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP). | [optional] 

## Examples

- Prepare the resource
```powershell
$FederationProtocolDetails = Initialize-V2024FederationProtocolDetails  -Role SAML_IDP `
 -EntityId http://www.okta.com/exkdaruy8Ln5Ry7C54x6
```

- Convert the resource to JSON
```powershell
$FederationProtocolDetails | ConvertTo-JSON
```


[[Back to top]](#) 

