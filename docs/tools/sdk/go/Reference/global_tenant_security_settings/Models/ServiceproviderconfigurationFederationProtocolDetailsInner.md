---
id: v1-serviceproviderconfiguration-federation-protocol-details-inner
title: ServiceproviderconfigurationFederationProtocolDetailsInner
pagination_label: ServiceproviderconfigurationFederationProtocolDetailsInner
sidebar_label: ServiceproviderconfigurationFederationProtocolDetailsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ServiceproviderconfigurationFederationProtocolDetailsInner', 'V1ServiceproviderconfigurationFederationProtocolDetailsInner'] 
slug: /tools/sdk/go/globaltenantsecuritysettings/models/serviceproviderconfiguration-federation-protocol-details-inner
tags: ['SDK', 'Software Development Kit', 'ServiceproviderconfigurationFederationProtocolDetailsInner', 'V1ServiceproviderconfigurationFederationProtocolDetailsInner']
---

# ServiceproviderconfigurationFederationProtocolDetailsInner

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
**Alias** | Pointer to **string** | Unique alias used to identify the selected local service provider based on used URL. Used with SP configurations. | [optional] 
**CallbackUrl** | **string** | The allowed callback URL where users will be redirected to after authentication. Used with SP configurations. | 
**LegacyAcsUrl** | Pointer to **string** | The legacy ACS URL used for SAML authentication. Used with SP configurations. | [optional] 

## Methods

### NewServiceproviderconfigurationFederationProtocolDetailsInner

`func NewServiceproviderconfigurationFederationProtocolDetailsInner(mappingAttribute string, callbackUrl string, ) *ServiceproviderconfigurationFederationProtocolDetailsInner`

NewServiceproviderconfigurationFederationProtocolDetailsInner instantiates a new ServiceproviderconfigurationFederationProtocolDetailsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceproviderconfigurationFederationProtocolDetailsInnerWithDefaults

`func NewServiceproviderconfigurationFederationProtocolDetailsInnerWithDefaults() *ServiceproviderconfigurationFederationProtocolDetailsInner`

NewServiceproviderconfigurationFederationProtocolDetailsInnerWithDefaults instantiates a new ServiceproviderconfigurationFederationProtocolDetailsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRole

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetEntityId

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetEntityId() string`

GetEntityId returns the EntityId field if non-nil, zero value otherwise.

### GetEntityIdOk

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetEntityIdOk() (*string, bool)`

GetEntityIdOk returns a tuple with the EntityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityId

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) SetEntityId(v string)`

SetEntityId sets EntityId field to given value.

### HasEntityId

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) HasEntityId() bool`

HasEntityId returns a boolean if a field has been set.

### GetBinding

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetBinding() string`

GetBinding returns the Binding field if non-nil, zero value otherwise.

### GetBindingOk

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetBindingOk() (*string, bool)`

GetBindingOk returns a tuple with the Binding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBinding

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) SetBinding(v string)`

SetBinding sets Binding field to given value.

### HasBinding

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) HasBinding() bool`

HasBinding returns a boolean if a field has been set.

### GetAuthnContext

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetAuthnContext() string`

GetAuthnContext returns the AuthnContext field if non-nil, zero value otherwise.

### GetAuthnContextOk

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetAuthnContextOk() (*string, bool)`

GetAuthnContextOk returns a tuple with the AuthnContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthnContext

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) SetAuthnContext(v string)`

SetAuthnContext sets AuthnContext field to given value.

### HasAuthnContext

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) HasAuthnContext() bool`

HasAuthnContext returns a boolean if a field has been set.

### GetLogoutUrl

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetLogoutUrl() string`

GetLogoutUrl returns the LogoutUrl field if non-nil, zero value otherwise.

### GetLogoutUrlOk

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetLogoutUrlOk() (*string, bool)`

GetLogoutUrlOk returns a tuple with the LogoutUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogoutUrl

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) SetLogoutUrl(v string)`

SetLogoutUrl sets LogoutUrl field to given value.

### HasLogoutUrl

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) HasLogoutUrl() bool`

HasLogoutUrl returns a boolean if a field has been set.

### GetIncludeAuthnContext

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetIncludeAuthnContext() bool`

GetIncludeAuthnContext returns the IncludeAuthnContext field if non-nil, zero value otherwise.

### GetIncludeAuthnContextOk

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetIncludeAuthnContextOk() (*bool, bool)`

GetIncludeAuthnContextOk returns a tuple with the IncludeAuthnContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeAuthnContext

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) SetIncludeAuthnContext(v bool)`

SetIncludeAuthnContext sets IncludeAuthnContext field to given value.

### HasIncludeAuthnContext

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) HasIncludeAuthnContext() bool`

HasIncludeAuthnContext returns a boolean if a field has been set.

### GetNameId

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetNameId() string`

GetNameId returns the NameId field if non-nil, zero value otherwise.

### GetNameIdOk

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetNameIdOk() (*string, bool)`

GetNameIdOk returns a tuple with the NameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameId

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) SetNameId(v string)`

SetNameId sets NameId field to given value.

### HasNameId

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) HasNameId() bool`

HasNameId returns a boolean if a field has been set.

### GetJitConfiguration

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetJitConfiguration() Jitconfiguration`

GetJitConfiguration returns the JitConfiguration field if non-nil, zero value otherwise.

### GetJitConfigurationOk

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetJitConfigurationOk() (*Jitconfiguration, bool)`

GetJitConfigurationOk returns a tuple with the JitConfiguration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJitConfiguration

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) SetJitConfiguration(v Jitconfiguration)`

SetJitConfiguration sets JitConfiguration field to given value.

### HasJitConfiguration

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) HasJitConfiguration() bool`

HasJitConfiguration returns a boolean if a field has been set.

### GetCert

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetCert() string`

GetCert returns the Cert field if non-nil, zero value otherwise.

### GetCertOk

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetCertOk() (*string, bool)`

GetCertOk returns a tuple with the Cert field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCert

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) SetCert(v string)`

SetCert sets Cert field to given value.

### HasCert

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) HasCert() bool`

HasCert returns a boolean if a field has been set.

### GetLoginUrlPost

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetLoginUrlPost() string`

GetLoginUrlPost returns the LoginUrlPost field if non-nil, zero value otherwise.

### GetLoginUrlPostOk

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetLoginUrlPostOk() (*string, bool)`

GetLoginUrlPostOk returns a tuple with the LoginUrlPost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoginUrlPost

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) SetLoginUrlPost(v string)`

SetLoginUrlPost sets LoginUrlPost field to given value.

### HasLoginUrlPost

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) HasLoginUrlPost() bool`

HasLoginUrlPost returns a boolean if a field has been set.

### GetLoginUrlRedirect

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetLoginUrlRedirect() string`

GetLoginUrlRedirect returns the LoginUrlRedirect field if non-nil, zero value otherwise.

### GetLoginUrlRedirectOk

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetLoginUrlRedirectOk() (*string, bool)`

GetLoginUrlRedirectOk returns a tuple with the LoginUrlRedirect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoginUrlRedirect

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) SetLoginUrlRedirect(v string)`

SetLoginUrlRedirect sets LoginUrlRedirect field to given value.

### HasLoginUrlRedirect

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) HasLoginUrlRedirect() bool`

HasLoginUrlRedirect returns a boolean if a field has been set.

### GetMappingAttribute

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetMappingAttribute() string`

GetMappingAttribute returns the MappingAttribute field if non-nil, zero value otherwise.

### GetMappingAttributeOk

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetMappingAttributeOk() (*string, bool)`

GetMappingAttributeOk returns a tuple with the MappingAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMappingAttribute

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) SetMappingAttribute(v string)`

SetMappingAttribute sets MappingAttribute field to given value.


### GetCertificateExpirationDate

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetCertificateExpirationDate() string`

GetCertificateExpirationDate returns the CertificateExpirationDate field if non-nil, zero value otherwise.

### GetCertificateExpirationDateOk

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetCertificateExpirationDateOk() (*string, bool)`

GetCertificateExpirationDateOk returns a tuple with the CertificateExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateExpirationDate

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) SetCertificateExpirationDate(v string)`

SetCertificateExpirationDate sets CertificateExpirationDate field to given value.

### HasCertificateExpirationDate

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) HasCertificateExpirationDate() bool`

HasCertificateExpirationDate returns a boolean if a field has been set.

### GetCertificateName

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetCertificateName() string`

GetCertificateName returns the CertificateName field if non-nil, zero value otherwise.

### GetCertificateNameOk

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetCertificateNameOk() (*string, bool)`

GetCertificateNameOk returns a tuple with the CertificateName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateName

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) SetCertificateName(v string)`

SetCertificateName sets CertificateName field to given value.

### HasCertificateName

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) HasCertificateName() bool`

HasCertificateName returns a boolean if a field has been set.

### GetAlias

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) SetAlias(v string)`

SetAlias sets Alias field to given value.

### HasAlias

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) HasAlias() bool`

HasAlias returns a boolean if a field has been set.

### GetCallbackUrl

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetCallbackUrl() string`

GetCallbackUrl returns the CallbackUrl field if non-nil, zero value otherwise.

### GetCallbackUrlOk

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetCallbackUrlOk() (*string, bool)`

GetCallbackUrlOk returns a tuple with the CallbackUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackUrl

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) SetCallbackUrl(v string)`

SetCallbackUrl sets CallbackUrl field to given value.


### GetLegacyAcsUrl

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetLegacyAcsUrl() string`

GetLegacyAcsUrl returns the LegacyAcsUrl field if non-nil, zero value otherwise.

### GetLegacyAcsUrlOk

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) GetLegacyAcsUrlOk() (*string, bool)`

GetLegacyAcsUrlOk returns a tuple with the LegacyAcsUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegacyAcsUrl

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) SetLegacyAcsUrl(v string)`

SetLegacyAcsUrl sets LegacyAcsUrl field to given value.

### HasLegacyAcsUrl

`func (o *ServiceproviderconfigurationFederationProtocolDetailsInner) HasLegacyAcsUrl() bool`

HasLegacyAcsUrl returns a boolean if a field has been set.


