---
id: v2024-idp-details
title: IdpDetails
pagination_label: IdpDetails
sidebar_label: IdpDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdpDetails', 'V2024IdpDetails'] 
slug: /tools/sdk/go/v2024/models/idp-details
tags: ['SDK', 'Software Development Kit', 'IdpDetails', 'V2024IdpDetails']
---

# IdpDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Role** | Pointer to **string** | Federation protocol role | [optional] 
**EntityId** | Pointer to **string** | An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP). | [optional] 
**Binding** | Pointer to **string** | Defines the binding used for the SAML flow. Used with IDP configurations. | [optional] 
**AuthnContext** | Pointer to **string** | Specifies the SAML authentication method to use. Used with IDP configurations. | [optional] 
**LogoutUrl** | Pointer to **string** | The IDP logout URL. Used with IDP configurations. | [optional] 
**IncludeAuthnContext** | Pointer to **bool** | Determines if the configured AuthnContext should be used or the default. Used with IDP configurations. | [optional] [default to false]
**NameId** | Pointer to **string** | The name id format to use. Used with IDP configurations. | [optional] 
**JitConfiguration** | Pointer to [**JITConfiguration**](jit-configuration) |  | [optional] 
**Cert** | Pointer to **string** | The Base64-encoded certificate used by the IDP. Used with IDP configurations. | [optional] 
**LoginUrlPost** | Pointer to **string** | The IDP POST URL, used with IDP HTTP-POST bindings for IDP-initiated logins. Used with IDP configurations. | [optional] 
**LoginUrlRedirect** | Pointer to **string** | The IDP Redirect URL. Used with IDP configurations. | [optional] 
**MappingAttribute** | **string** | Return the saml Id for the given user, based on the IDN as SP settings of the org. Used with IDP configurations. | 
**CertificateExpirationDate** | Pointer to **string** | The expiration date extracted from the certificate. | [optional] 
**CertificateName** | Pointer to **string** | The name extracted from the certificate. | [optional] 

## Methods

### NewIdpDetails

`func NewIdpDetails(mappingAttribute string, ) *IdpDetails`

NewIdpDetails instantiates a new IdpDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdpDetailsWithDefaults

`func NewIdpDetailsWithDefaults() *IdpDetails`

NewIdpDetailsWithDefaults instantiates a new IdpDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRole

`func (o *IdpDetails) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *IdpDetails) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *IdpDetails) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *IdpDetails) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetEntityId

`func (o *IdpDetails) GetEntityId() string`

GetEntityId returns the EntityId field if non-nil, zero value otherwise.

### GetEntityIdOk

`func (o *IdpDetails) GetEntityIdOk() (*string, bool)`

GetEntityIdOk returns a tuple with the EntityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityId

`func (o *IdpDetails) SetEntityId(v string)`

SetEntityId sets EntityId field to given value.

### HasEntityId

`func (o *IdpDetails) HasEntityId() bool`

HasEntityId returns a boolean if a field has been set.

### GetBinding

`func (o *IdpDetails) GetBinding() string`

GetBinding returns the Binding field if non-nil, zero value otherwise.

### GetBindingOk

`func (o *IdpDetails) GetBindingOk() (*string, bool)`

GetBindingOk returns a tuple with the Binding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBinding

`func (o *IdpDetails) SetBinding(v string)`

SetBinding sets Binding field to given value.

### HasBinding

`func (o *IdpDetails) HasBinding() bool`

HasBinding returns a boolean if a field has been set.

### GetAuthnContext

`func (o *IdpDetails) GetAuthnContext() string`

GetAuthnContext returns the AuthnContext field if non-nil, zero value otherwise.

### GetAuthnContextOk

`func (o *IdpDetails) GetAuthnContextOk() (*string, bool)`

GetAuthnContextOk returns a tuple with the AuthnContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthnContext

`func (o *IdpDetails) SetAuthnContext(v string)`

SetAuthnContext sets AuthnContext field to given value.

### HasAuthnContext

`func (o *IdpDetails) HasAuthnContext() bool`

HasAuthnContext returns a boolean if a field has been set.

### GetLogoutUrl

`func (o *IdpDetails) GetLogoutUrl() string`

GetLogoutUrl returns the LogoutUrl field if non-nil, zero value otherwise.

### GetLogoutUrlOk

`func (o *IdpDetails) GetLogoutUrlOk() (*string, bool)`

GetLogoutUrlOk returns a tuple with the LogoutUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogoutUrl

`func (o *IdpDetails) SetLogoutUrl(v string)`

SetLogoutUrl sets LogoutUrl field to given value.

### HasLogoutUrl

`func (o *IdpDetails) HasLogoutUrl() bool`

HasLogoutUrl returns a boolean if a field has been set.

### GetIncludeAuthnContext

`func (o *IdpDetails) GetIncludeAuthnContext() bool`

GetIncludeAuthnContext returns the IncludeAuthnContext field if non-nil, zero value otherwise.

### GetIncludeAuthnContextOk

`func (o *IdpDetails) GetIncludeAuthnContextOk() (*bool, bool)`

GetIncludeAuthnContextOk returns a tuple with the IncludeAuthnContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeAuthnContext

`func (o *IdpDetails) SetIncludeAuthnContext(v bool)`

SetIncludeAuthnContext sets IncludeAuthnContext field to given value.

### HasIncludeAuthnContext

`func (o *IdpDetails) HasIncludeAuthnContext() bool`

HasIncludeAuthnContext returns a boolean if a field has been set.

### GetNameId

`func (o *IdpDetails) GetNameId() string`

GetNameId returns the NameId field if non-nil, zero value otherwise.

### GetNameIdOk

`func (o *IdpDetails) GetNameIdOk() (*string, bool)`

GetNameIdOk returns a tuple with the NameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameId

`func (o *IdpDetails) SetNameId(v string)`

SetNameId sets NameId field to given value.

### HasNameId

`func (o *IdpDetails) HasNameId() bool`

HasNameId returns a boolean if a field has been set.

### GetJitConfiguration

`func (o *IdpDetails) GetJitConfiguration() JITConfiguration`

GetJitConfiguration returns the JitConfiguration field if non-nil, zero value otherwise.

### GetJitConfigurationOk

`func (o *IdpDetails) GetJitConfigurationOk() (*JITConfiguration, bool)`

GetJitConfigurationOk returns a tuple with the JitConfiguration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJitConfiguration

`func (o *IdpDetails) SetJitConfiguration(v JITConfiguration)`

SetJitConfiguration sets JitConfiguration field to given value.

### HasJitConfiguration

`func (o *IdpDetails) HasJitConfiguration() bool`

HasJitConfiguration returns a boolean if a field has been set.

### GetCert

`func (o *IdpDetails) GetCert() string`

GetCert returns the Cert field if non-nil, zero value otherwise.

### GetCertOk

`func (o *IdpDetails) GetCertOk() (*string, bool)`

GetCertOk returns a tuple with the Cert field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCert

`func (o *IdpDetails) SetCert(v string)`

SetCert sets Cert field to given value.

### HasCert

`func (o *IdpDetails) HasCert() bool`

HasCert returns a boolean if a field has been set.

### GetLoginUrlPost

`func (o *IdpDetails) GetLoginUrlPost() string`

GetLoginUrlPost returns the LoginUrlPost field if non-nil, zero value otherwise.

### GetLoginUrlPostOk

`func (o *IdpDetails) GetLoginUrlPostOk() (*string, bool)`

GetLoginUrlPostOk returns a tuple with the LoginUrlPost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoginUrlPost

`func (o *IdpDetails) SetLoginUrlPost(v string)`

SetLoginUrlPost sets LoginUrlPost field to given value.

### HasLoginUrlPost

`func (o *IdpDetails) HasLoginUrlPost() bool`

HasLoginUrlPost returns a boolean if a field has been set.

### GetLoginUrlRedirect

`func (o *IdpDetails) GetLoginUrlRedirect() string`

GetLoginUrlRedirect returns the LoginUrlRedirect field if non-nil, zero value otherwise.

### GetLoginUrlRedirectOk

`func (o *IdpDetails) GetLoginUrlRedirectOk() (*string, bool)`

GetLoginUrlRedirectOk returns a tuple with the LoginUrlRedirect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoginUrlRedirect

`func (o *IdpDetails) SetLoginUrlRedirect(v string)`

SetLoginUrlRedirect sets LoginUrlRedirect field to given value.

### HasLoginUrlRedirect

`func (o *IdpDetails) HasLoginUrlRedirect() bool`

HasLoginUrlRedirect returns a boolean if a field has been set.

### GetMappingAttribute

`func (o *IdpDetails) GetMappingAttribute() string`

GetMappingAttribute returns the MappingAttribute field if non-nil, zero value otherwise.

### GetMappingAttributeOk

`func (o *IdpDetails) GetMappingAttributeOk() (*string, bool)`

GetMappingAttributeOk returns a tuple with the MappingAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMappingAttribute

`func (o *IdpDetails) SetMappingAttribute(v string)`

SetMappingAttribute sets MappingAttribute field to given value.


### GetCertificateExpirationDate

`func (o *IdpDetails) GetCertificateExpirationDate() string`

GetCertificateExpirationDate returns the CertificateExpirationDate field if non-nil, zero value otherwise.

### GetCertificateExpirationDateOk

`func (o *IdpDetails) GetCertificateExpirationDateOk() (*string, bool)`

GetCertificateExpirationDateOk returns a tuple with the CertificateExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateExpirationDate

`func (o *IdpDetails) SetCertificateExpirationDate(v string)`

SetCertificateExpirationDate sets CertificateExpirationDate field to given value.

### HasCertificateExpirationDate

`func (o *IdpDetails) HasCertificateExpirationDate() bool`

HasCertificateExpirationDate returns a boolean if a field has been set.

### GetCertificateName

`func (o *IdpDetails) GetCertificateName() string`

GetCertificateName returns the CertificateName field if non-nil, zero value otherwise.

### GetCertificateNameOk

`func (o *IdpDetails) GetCertificateNameOk() (*string, bool)`

GetCertificateNameOk returns a tuple with the CertificateName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateName

`func (o *IdpDetails) SetCertificateName(v string)`

SetCertificateName sets CertificateName field to given value.

### HasCertificateName

`func (o *IdpDetails) HasCertificateName() bool`

HasCertificateName returns a boolean if a field has been set.


