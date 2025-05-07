---
id: v2024-idp-details
title: IdpDetails
pagination_label: IdpDetails
sidebar_label: IdpDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdpDetails', 'V2024IdpDetails'] 
slug: /tools/sdk/powershell/v2024/models/idp-details
tags: ['SDK', 'Software Development Kit', 'IdpDetails', 'V2024IdpDetails']
---


# IdpDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Role** |  **Enum** [  "SAML_IDP",    "SAML_SP" ] | Federation protocol role | [optional] 
**EntityId** | **String** | An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP). | [optional] 
**Binding** | **String** | Defines the binding used for the SAML flow. Used with IDP configurations. | [optional] 
**AuthnContext** | **String** | Specifies the SAML authentication method to use. Used with IDP configurations. | [optional] 
**LogoutUrl** | **String** | The IDP logout URL. Used with IDP configurations. | [optional] 
**IncludeAuthnContext** | **Boolean** | Determines if the configured AuthnContext should be used or the default. Used with IDP configurations. | [optional] [default to $false]
**NameId** | **String** | The name id format to use. Used with IDP configurations. | [optional] 
**JitConfiguration** | [**JITConfiguration**](jit-configuration) |  | [optional] 
**Cert** | **String** | The Base64-encoded certificate used by the IDP. Used with IDP configurations. | [optional] 
**LoginUrlPost** | **String** | The IDP POST URL, used with IDP HTTP-POST bindings for IDP-initiated logins. Used with IDP configurations. | [optional] 
**LoginUrlRedirect** | **String** | The IDP Redirect URL. Used with IDP configurations. | [optional] 
**MappingAttribute** | **String** | Return the saml Id for the given user, based on the IDN as SP settings of the org. Used with IDP configurations. | [required]
**CertificateExpirationDate** | **String** | The expiration date extracted from the certificate. | [optional] 
**CertificateName** | **String** | The name extracted from the certificate. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdpDetails = Initialize-V2024IdpDetails  -Role SAML_IDP `
 -EntityId http://www.okta.com/exkdaruy8Ln5Ry7C54x6 `
 -Binding urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST `
 -AuthnContext urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport `
 -LogoutUrl https://dev-206445.oktapreview.com/login/signout `
 -IncludeAuthnContext false `
 -NameId urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress `
 -JitConfiguration null `
 -Cert -----BEGIN CERTIFICATE-----****-----END CERTIFICATE----- `
 -LoginUrlPost https://dev-157216.okta.com/app/sailpointdev157216_cdovsaml_1/exkdaruy8Ln5Ry7C54x6/sso/saml `
 -LoginUrlRedirect https://dev-157216.okta.com/app/sailpointdev157216_cdovsaml_1/exkdaruy8Ln5Ry7C54x6/sso/saml `
 -MappingAttribute email `
 -CertificateExpirationDate Fri Mar 08 08:54:24 UTC 2013 `
 -CertificateName OU=Conext, O=Surfnet, L=Utrecht, ST=Utrecht, C=NL
```

- Convert the resource to JSON
```powershell
$IdpDetails | ConvertTo-JSON
```


[[Back to top]](#) 

