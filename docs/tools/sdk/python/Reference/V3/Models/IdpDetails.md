---
id: idp-details
title: IdpDetails
pagination_label: IdpDetails
sidebar_label: IdpDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdpDetails', 'IdpDetails'] 
slug: /tools/sdk/python/v3/models/idp-details
tags: ['SDK', 'Software Development Kit', 'IdpDetails', 'IdpDetails']
---

# IdpDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** |  **Enum** [  'SAML_IDP' ] | Federation protocol role | [optional] 
**entity_id** | **str** | An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP). | [optional] 
**binding** | **str** | Defines the binding used for the SAML flow. Used with IDP configurations. | [optional] 
**auth_context** | **str** | Specifies the SAML authentication method to use. Used with IDP configurations. | [optional] 
**logout_url** | **str** | The IDP logout URL. Used with IDP configurations. | [optional] 
**include_auth_context** | **bool** | Determines if the configured AuthnContext should be used or the default. Used with IDP configurations. | [optional] [default to False]
**name_id** | **str** | The name id format to use. Used with IDP configurations. | [optional] 
**jit_configuration** | [**JITConfiguration**](jit-configuration) |  | [optional] 
**cert** | **str** | The Base64-encoded certificate used by the IDP. Used with IDP configurations. | [optional] 
**login_url_post** | **str** | The IDP POST URL, used with IDP HTTP-POST bindings for IDP-initiated logins. Used with IDP configurations. | [optional] 
**login_url_redirect** | **str** | The IDP Redirect URL. Used with IDP configurations. | [optional] 
**mapping_attribute** | **str** | Return the saml Id for the given user, based on the IDN as SP settings of the org. Used with IDP configurations. | [optional] 
**certificate_expiration_date** | **str** | The expiration date extracted from the certificate. | [optional] 
**certificate_name** | **str** | The name extracted from the certificate. | [optional] 
}

## Example

```python
from sailpoint.v3.models.idp_details import IdpDetails

idp_details = IdpDetails(
role='SAML_IDP',
entity_id='http://www.okta.com/exkdaruy8Ln5Ry7C54x6',
binding='urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST',
auth_context='urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport',
logout_url='https://dev-206445.oktapreview.com/login/signout',
include_auth_context=False,
name_id='urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
jit_configuration=sailpoint.v3.models.jit_configuration.JITConfiguration(
                    enabled = False, 
                    source_id = '2c9180857377ed2901739c12a2da5ac8', 
                    source_attribute_mappings = {firstName=okta.firstName, lastName=okta.lastName, email=okta.email}, ),
cert='-----BEGIN CERTIFICATE-----****-----END CERTIFICATE-----',
login_url_post='https://dev-157216.okta.com/app/sailpointdev157216_cdovsaml_1/exkdaruy8Ln5Ry7C54x6/sso/saml',
login_url_redirect='https://dev-157216.okta.com/app/sailpointdev157216_cdovsaml_1/exkdaruy8Ln5Ry7C54x6/sso/saml',
mapping_attribute='email',
certificate_expiration_date='Fri Mar 08 08:54:24 UTC 2013',
certificate_name='OU=Conext, O=Surfnet, L=Utrecht, ST=Utrecht, C=NL'
)

```
[[Back to top]](#) 

