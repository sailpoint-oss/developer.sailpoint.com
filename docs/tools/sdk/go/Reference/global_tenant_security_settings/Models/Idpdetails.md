---
id: v1-idpdetails
title: Idpdetails
pagination_label: Idpdetails
sidebar_label: Idpdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Idpdetails', 'V1Idpdetails'] 
slug: /tools/sdk/go/globaltenantsecuritysettings/models/idpdetails
tags: ['SDK', 'Software Development Kit', 'Idpdetails', 'V1Idpdetails']
---

# Idpdetails

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
**JitConfiguration** | Pointer to [**Jitconfiguration**](jitconfiguration) |  | [optional] 
**Cert** | Pointer to **string** | The Base64-encoded certificate used by the IDP. Used with IDP configurations. | [optional] 
**LoginUrlPost** | Pointer to **string** | The IDP POST URL, used with IDP HTTP-POST bindings for IDP-initiated logins. Used with IDP configurations. | [optional] 
**LoginUrlRedirect** | Pointer to **string** | The IDP Redirect URL. Used with IDP configurations. | [optional] 
**MappingAttribute** | **string** | Return the saml Id for the given user, based on the IDN as SP settings of the org. Used with IDP configurations. | 
**CertificateExpirationDate** | Pointer to **string** | The expiration date extracted from the certificate. | [optional] 
**CertificateName** | Pointer to **string** | The name extracted from the certificate. | [optional] 

## Methods

### NewIdpdetails

`func NewIdpdetails(mappingAttribute string, ) *Idpdetails`

NewIdpdetails instantiates a new Idpdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdpdetailsWithDefaults

`func NewIdpdetailsWithDefaults() *Idpdetails`

NewIdpdetailsWithDefaults instantiates a new Idpdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRole

`func (o *Idpdetails) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *Idpdetails) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *Idpdetails) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *Idpdetails) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetEntityId

`func (o *Idpdetails) GetEntityId() string`

GetEntityId returns the EntityId field if non-nil, zero value otherwise.

### GetEntityIdOk

`func (o *Idpdetails) GetEntityIdOk() (*string, bool)`

GetEntityIdOk returns a tuple with the EntityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityId

`func (o *Idpdetails) SetEntityId(v string)`

SetEntityId sets EntityId field to given value.

### HasEntityId

`func (o *Idpdetails) HasEntityId() bool`

HasEntityId returns a boolean if a field has been set.

### GetBinding

`func (o *Idpdetails) GetBinding() string`

GetBinding returns the Binding field if non-nil, zero value otherwise.

### GetBindingOk

`func (o *Idpdetails) GetBindingOk() (*string, bool)`

GetBindingOk returns a tuple with the Binding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBinding

`func (o *Idpdetails) SetBinding(v string)`

SetBinding sets Binding field to given value.

### HasBinding

`func (o *Idpdetails) HasBinding() bool`

HasBinding returns a boolean if a field has been set.

### GetAuthnContext

`func (o *Idpdetails) GetAuthnContext() string`

GetAuthnContext returns the AuthnContext field if non-nil, zero value otherwise.

### GetAuthnContextOk

`func (o *Idpdetails) GetAuthnContextOk() (*string, bool)`

GetAuthnContextOk returns a tuple with the AuthnContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthnContext

`func (o *Idpdetails) SetAuthnContext(v string)`

SetAuthnContext sets AuthnContext field to given value.

### HasAuthnContext

`func (o *Idpdetails) HasAuthnContext() bool`

HasAuthnContext returns a boolean if a field has been set.

### GetLogoutUrl

`func (o *Idpdetails) GetLogoutUrl() string`

GetLogoutUrl returns the LogoutUrl field if non-nil, zero value otherwise.

### GetLogoutUrlOk

`func (o *Idpdetails) GetLogoutUrlOk() (*string, bool)`

GetLogoutUrlOk returns a tuple with the LogoutUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogoutUrl

`func (o *Idpdetails) SetLogoutUrl(v string)`

SetLogoutUrl sets LogoutUrl field to given value.

### HasLogoutUrl

`func (o *Idpdetails) HasLogoutUrl() bool`

HasLogoutUrl returns a boolean if a field has been set.

### GetIncludeAuthnContext

`func (o *Idpdetails) GetIncludeAuthnContext() bool`

GetIncludeAuthnContext returns the IncludeAuthnContext field if non-nil, zero value otherwise.

### GetIncludeAuthnContextOk

`func (o *Idpdetails) GetIncludeAuthnContextOk() (*bool, bool)`

GetIncludeAuthnContextOk returns a tuple with the IncludeAuthnContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeAuthnContext

`func (o *Idpdetails) SetIncludeAuthnContext(v bool)`

SetIncludeAuthnContext sets IncludeAuthnContext field to given value.

### HasIncludeAuthnContext

`func (o *Idpdetails) HasIncludeAuthnContext() bool`

HasIncludeAuthnContext returns a boolean if a field has been set.

### GetNameId

`func (o *Idpdetails) GetNameId() string`

GetNameId returns the NameId field if non-nil, zero value otherwise.

### GetNameIdOk

`func (o *Idpdetails) GetNameIdOk() (*string, bool)`

GetNameIdOk returns a tuple with the NameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameId

`func (o *Idpdetails) SetNameId(v string)`

SetNameId sets NameId field to given value.

### HasNameId

`func (o *Idpdetails) HasNameId() bool`

HasNameId returns a boolean if a field has been set.

### GetJitConfiguration

`func (o *Idpdetails) GetJitConfiguration() Jitconfiguration`

GetJitConfiguration returns the JitConfiguration field if non-nil, zero value otherwise.

### GetJitConfigurationOk

`func (o *Idpdetails) GetJitConfigurationOk() (*Jitconfiguration, bool)`

GetJitConfigurationOk returns a tuple with the JitConfiguration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJitConfiguration

`func (o *Idpdetails) SetJitConfiguration(v Jitconfiguration)`

SetJitConfiguration sets JitConfiguration field to given value.

### HasJitConfiguration

`func (o *Idpdetails) HasJitConfiguration() bool`

HasJitConfiguration returns a boolean if a field has been set.

### GetCert

`func (o *Idpdetails) GetCert() string`

GetCert returns the Cert field if non-nil, zero value otherwise.

### GetCertOk

`func (o *Idpdetails) GetCertOk() (*string, bool)`

GetCertOk returns a tuple with the Cert field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCert

`func (o *Idpdetails) SetCert(v string)`

SetCert sets Cert field to given value.

### HasCert

`func (o *Idpdetails) HasCert() bool`

HasCert returns a boolean if a field has been set.

### GetLoginUrlPost

`func (o *Idpdetails) GetLoginUrlPost() string`

GetLoginUrlPost returns the LoginUrlPost field if non-nil, zero value otherwise.

### GetLoginUrlPostOk

`func (o *Idpdetails) GetLoginUrlPostOk() (*string, bool)`

GetLoginUrlPostOk returns a tuple with the LoginUrlPost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoginUrlPost

`func (o *Idpdetails) SetLoginUrlPost(v string)`

SetLoginUrlPost sets LoginUrlPost field to given value.

### HasLoginUrlPost

`func (o *Idpdetails) HasLoginUrlPost() bool`

HasLoginUrlPost returns a boolean if a field has been set.

### GetLoginUrlRedirect

`func (o *Idpdetails) GetLoginUrlRedirect() string`

GetLoginUrlRedirect returns the LoginUrlRedirect field if non-nil, zero value otherwise.

### GetLoginUrlRedirectOk

`func (o *Idpdetails) GetLoginUrlRedirectOk() (*string, bool)`

GetLoginUrlRedirectOk returns a tuple with the LoginUrlRedirect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoginUrlRedirect

`func (o *Idpdetails) SetLoginUrlRedirect(v string)`

SetLoginUrlRedirect sets LoginUrlRedirect field to given value.

### HasLoginUrlRedirect

`func (o *Idpdetails) HasLoginUrlRedirect() bool`

HasLoginUrlRedirect returns a boolean if a field has been set.

### GetMappingAttribute

`func (o *Idpdetails) GetMappingAttribute() string`

GetMappingAttribute returns the MappingAttribute field if non-nil, zero value otherwise.

### GetMappingAttributeOk

`func (o *Idpdetails) GetMappingAttributeOk() (*string, bool)`

GetMappingAttributeOk returns a tuple with the MappingAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMappingAttribute

`func (o *Idpdetails) SetMappingAttribute(v string)`

SetMappingAttribute sets MappingAttribute field to given value.


### GetCertificateExpirationDate

`func (o *Idpdetails) GetCertificateExpirationDate() string`

GetCertificateExpirationDate returns the CertificateExpirationDate field if non-nil, zero value otherwise.

### GetCertificateExpirationDateOk

`func (o *Idpdetails) GetCertificateExpirationDateOk() (*string, bool)`

GetCertificateExpirationDateOk returns a tuple with the CertificateExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateExpirationDate

`func (o *Idpdetails) SetCertificateExpirationDate(v string)`

SetCertificateExpirationDate sets CertificateExpirationDate field to given value.

### HasCertificateExpirationDate

`func (o *Idpdetails) HasCertificateExpirationDate() bool`

HasCertificateExpirationDate returns a boolean if a field has been set.

### GetCertificateName

`func (o *Idpdetails) GetCertificateName() string`

GetCertificateName returns the CertificateName field if non-nil, zero value otherwise.

### GetCertificateNameOk

`func (o *Idpdetails) GetCertificateNameOk() (*string, bool)`

GetCertificateNameOk returns a tuple with the CertificateName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateName

`func (o *Idpdetails) SetCertificateName(v string)`

SetCertificateName sets CertificateName field to given value.

### HasCertificateName

`func (o *Idpdetails) HasCertificateName() bool`

HasCertificateName returns a boolean if a field has been set.


