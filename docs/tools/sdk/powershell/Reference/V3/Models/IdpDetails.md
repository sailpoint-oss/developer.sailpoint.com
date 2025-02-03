---
id: idp-details
title: IdpDetails
pagination_label: IdpDetails
sidebar_label: IdpDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdpDetails', 'IdpDetails'] 
slug: /tools/sdk/powershell/v3/models/idp-details
tags: ['SDK', 'Software Development Kit', 'IdpDetails', 'IdpDetails']
---


# IdpDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Role** |  Pointer to  **Enum** [  "SAML_IDP" ] | Federation protocol role | [optional] 
**EntityId** |  Pointer to **String** | An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP). | [optional] 
**Binding** |  Pointer to **String** | Defines the binding used for the SAML flow. Used with IDP configurations. | [optional] 
**AuthContext** |  Pointer to **String** | Specifies the SAML authentication method to use. Used with IDP configurations. | [optional] 
**LogoutUrl** |  Pointer to **String** | The IDP logout URL. Used with IDP configurations. | [optional] 
**IncludeAuthContext** |  Pointer to **Boolean** | Determines if the configured AuthnContext should be used or the default. Used with IDP configurations. | [optional] [default to $false]
**NameId** |  Pointer to **String** | The name id format to use. Used with IDP configurations. | [optional] 
**JitConfiguration** |  Pointer to [**JITConfiguration**](jit-configuration) |  | [optional] 
**Cert** |  Pointer to **String** | The Base64-encoded certificate used by the IDP. Used with IDP configurations. | [optional] 
**LoginUrlPost** |  Pointer to **String** | The IDP POST URL, used with IDP HTTP-POST bindings for IDP-initiated logins. Used with IDP configurations. | [optional] 
**LoginUrlRedirect** |  Pointer to **String** | The IDP Redirect URL. Used with IDP configurations. | [optional] 
**MappingAttribute** |  Pointer to **String** | Return the saml Id for the given user, based on the IDN as SP settings of the org. Used with IDP configurations. | [optional] 
**CertificateExpirationDate** |  Pointer to **String** | The expiration date extracted from the certificate. | [optional] 
**CertificateName** |  Pointer to **String** | The name extracted from the certificate. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdpDetails = Initialize-PSSailpoint.V3IdpDetails  -Role SAML_IDP `
 -EntityId http://www.okta.com/exkdaruy8Ln5Ry7C54x6 `
 -Binding urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST `
 -AuthContext urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport `
 -LogoutUrl https://dev-206445.oktapreview.com/login/signout `
 -IncludeAuthContext false `
 -NameId urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress `
 -JitConfiguration null `
 -Cert -----BEGIN CERTIFICATE-----****-----END CERTIFICATE----- `
 -LoginUrlPost https://dev-157216.okta.com/app/sailpointdev157216_cdovsaml_1/exkdaruy8Ln5Ry7C54x6/sso/saml `
 -LoginUrlRedirect https://dev-157216.okta.com/app/sailpointdev157216_cdovsaml_1/exkdaruy8Ln5Ry7C54x6/sso/saml `
 -MappingAttribute email `
 -CertificateExpirationDate Fri Mar 08 08:54:24 UTC 2013 `
 -CertificateName OU&#x3D;Conext, O&#x3D;Surfnet, L&#x3D;Utrecht, ST&#x3D;Utrecht, C&#x3D;NL
```

- Convert the resource to JSON
```powershell
$IdpDetails | ConvertTo-JSON
```


[[Back to top]](#) 

