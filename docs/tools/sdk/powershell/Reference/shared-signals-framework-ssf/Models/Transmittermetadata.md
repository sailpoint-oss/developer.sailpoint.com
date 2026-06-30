---
id: transmittermetadata
title: Transmittermetadata
pagination_label: Transmittermetadata
sidebar_label: Transmittermetadata
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Transmittermetadata', 'Transmittermetadata'] 
slug: /tools/sdk/powershell/sharedsignalsframeworkssf/models/transmittermetadata
tags: ['SDK', 'Software Development Kit', 'Transmittermetadata', 'Transmittermetadata']
---


# Transmittermetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SpecVersion** | **String** | Version of the SSF specification supported. | [optional] 
**Issuer** | **String** | Base URL of the transmitter (issuer). | [optional] 
**JwksUri** | **String** | URL of the transmitter's JSON Web Key Set. | [optional] 
**DeliveryMethodsSupported** | **[]String** | Supported delivery methods (e.g. push URN). | [optional] 
**ConfigurationEndpoint** | **String** | Endpoint for stream configuration (create, read, update, replace, delete). | [optional] 
**StatusEndpoint** | **String** | Endpoint for reading and updating stream status. | [optional] 
**VerificationEndpoint** | **String** | Endpoint for receiver verification. | [optional] 
**AuthorizationSchemes** | [**[]Authorizationscheme**](authorizationscheme) | Supported authorization schemes (e.g. OAuth2, Bearer). | [optional] 

## Examples

- Prepare the resource
```powershell
$Transmittermetadata = Initialize-Transmittermetadata  -SpecVersion 10 `
 -Issuer https://tenant.api.identitynow.com `
 -JwksUri https://tenant.api.identitynow.com/ssf/jwks `
 -DeliveryMethodsSupported ["urn:ietf:rfc:8935"] `
 -ConfigurationEndpoint https://tenant.api.identitynow.com/latest/ssf/streams `
 -StatusEndpoint https://tenant.api.identitynow.com/latest/ssf/streams/status `
 -VerificationEndpoint https://tenant.api.identitynow.com/latest/ssf/streams/verify `
 -AuthorizationSchemes null
```

- Convert the resource to JSON
```powershell
$Transmittermetadata | ConvertTo-JSON
```


[[Back to top]](#) 

