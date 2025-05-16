---
id: v2025-service-provider-configuration-federation-protocol-details-inner
title: ServiceProviderConfigurationFederationProtocolDetailsInner
pagination_label: ServiceProviderConfigurationFederationProtocolDetailsInner
sidebar_label: ServiceProviderConfigurationFederationProtocolDetailsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ServiceProviderConfigurationFederationProtocolDetailsInner', 'V2025ServiceProviderConfigurationFederationProtocolDetailsInner'] 
slug: /tools/sdk/go/v2025/models/service-provider-configuration-federation-protocol-details-inner
tags: ['SDK', 'Software Development Kit', 'ServiceProviderConfigurationFederationProtocolDetailsInner', 'V2025ServiceProviderConfigurationFederationProtocolDetailsInner']
---

# ServiceProviderConfigurationFederationProtocolDetailsInner

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
**Alias** | Pointer to **string** | Unique alias used to identify the selected local service provider based on used URL. Used with SP configurations. | [optional] 
**CallbackUrl** | **string** | The allowed callback URL where users will be redirected to after authentication. Used with SP configurations. | 
**LegacyAcsUrl** | Pointer to **string** | The legacy ACS URL used for SAML authentication. Used with SP configurations. | [optional] 

## Methods

### NewServiceProviderConfigurationFederationProtocolDetailsInner

`func NewServiceProviderConfigurationFederationProtocolDetailsInner(mappingAttribute string, callbackUrl string, ) *ServiceProviderConfigurationFederationProtocolDetailsInner`

NewServiceProviderConfigurationFederationProtocolDetailsInner instantiates a new ServiceProviderConfigurationFederationProtocolDetailsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceProviderConfigurationFederationProtocolDetailsInnerWithDefaults

`func NewServiceProviderConfigurationFederationProtocolDetailsInnerWithDefaults() *ServiceProviderConfigurationFederationProtocolDetailsInner`

NewServiceProviderConfigurationFederationProtocolDetailsInnerWithDefaults instantiates a new ServiceProviderConfigurationFederationProtocolDetailsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRole

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetEntityId

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetEntityId() string`

GetEntityId returns the EntityId field if non-nil, zero value otherwise.

### GetEntityIdOk

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetEntityIdOk() (*string, bool)`

GetEntityIdOk returns a tuple with the EntityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityId

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) SetEntityId(v string)`

SetEntityId sets EntityId field to given value.

### HasEntityId

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) HasEntityId() bool`

HasEntityId returns a boolean if a field has been set.

### GetBinding

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetBinding() string`

GetBinding returns the Binding field if non-nil, zero value otherwise.

### GetBindingOk

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetBindingOk() (*string, bool)`

GetBindingOk returns a tuple with the Binding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBinding

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) SetBinding(v string)`

SetBinding sets Binding field to given value.

### HasBinding

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) HasBinding() bool`

HasBinding returns a boolean if a field has been set.

### GetAuthnContext

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetAuthnContext() string`

GetAuthnContext returns the AuthnContext field if non-nil, zero value otherwise.

### GetAuthnContextOk

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetAuthnContextOk() (*string, bool)`

GetAuthnContextOk returns a tuple with the AuthnContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthnContext

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) SetAuthnContext(v string)`

SetAuthnContext sets AuthnContext field to given value.

### HasAuthnContext

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) HasAuthnContext() bool`

HasAuthnContext returns a boolean if a field has been set.

### GetLogoutUrl

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetLogoutUrl() string`

GetLogoutUrl returns the LogoutUrl field if non-nil, zero value otherwise.

### GetLogoutUrlOk

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetLogoutUrlOk() (*string, bool)`

GetLogoutUrlOk returns a tuple with the LogoutUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogoutUrl

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) SetLogoutUrl(v string)`

SetLogoutUrl sets LogoutUrl field to given value.

### HasLogoutUrl

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) HasLogoutUrl() bool`

HasLogoutUrl returns a boolean if a field has been set.

### GetIncludeAuthnContext

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetIncludeAuthnContext() bool`

GetIncludeAuthnContext returns the IncludeAuthnContext field if non-nil, zero value otherwise.

### GetIncludeAuthnContextOk

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetIncludeAuthnContextOk() (*bool, bool)`

GetIncludeAuthnContextOk returns a tuple with the IncludeAuthnContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeAuthnContext

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) SetIncludeAuthnContext(v bool)`

SetIncludeAuthnContext sets IncludeAuthnContext field to given value.

### HasIncludeAuthnContext

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) HasIncludeAuthnContext() bool`

HasIncludeAuthnContext returns a boolean if a field has been set.

### GetNameId

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetNameId() string`

GetNameId returns the NameId field if non-nil, zero value otherwise.

### GetNameIdOk

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetNameIdOk() (*string, bool)`

GetNameIdOk returns a tuple with the NameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameId

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) SetNameId(v string)`

SetNameId sets NameId field to given value.

### HasNameId

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) HasNameId() bool`

HasNameId returns a boolean if a field has been set.

### GetJitConfiguration

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetJitConfiguration() JITConfiguration`

GetJitConfiguration returns the JitConfiguration field if non-nil, zero value otherwise.

### GetJitConfigurationOk

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetJitConfigurationOk() (*JITConfiguration, bool)`

GetJitConfigurationOk returns a tuple with the JitConfiguration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJitConfiguration

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) SetJitConfiguration(v JITConfiguration)`

SetJitConfiguration sets JitConfiguration field to given value.

### HasJitConfiguration

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) HasJitConfiguration() bool`

HasJitConfiguration returns a boolean if a field has been set.

### GetCert

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetCert() string`

GetCert returns the Cert field if non-nil, zero value otherwise.

### GetCertOk

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetCertOk() (*string, bool)`

GetCertOk returns a tuple with the Cert field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCert

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) SetCert(v string)`

SetCert sets Cert field to given value.

### HasCert

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) HasCert() bool`

HasCert returns a boolean if a field has been set.

### GetLoginUrlPost

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetLoginUrlPost() string`

GetLoginUrlPost returns the LoginUrlPost field if non-nil, zero value otherwise.

### GetLoginUrlPostOk

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetLoginUrlPostOk() (*string, bool)`

GetLoginUrlPostOk returns a tuple with the LoginUrlPost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoginUrlPost

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) SetLoginUrlPost(v string)`

SetLoginUrlPost sets LoginUrlPost field to given value.

### HasLoginUrlPost

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) HasLoginUrlPost() bool`

HasLoginUrlPost returns a boolean if a field has been set.

### GetLoginUrlRedirect

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetLoginUrlRedirect() string`

GetLoginUrlRedirect returns the LoginUrlRedirect field if non-nil, zero value otherwise.

### GetLoginUrlRedirectOk

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetLoginUrlRedirectOk() (*string, bool)`

GetLoginUrlRedirectOk returns a tuple with the LoginUrlRedirect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoginUrlRedirect

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) SetLoginUrlRedirect(v string)`

SetLoginUrlRedirect sets LoginUrlRedirect field to given value.

### HasLoginUrlRedirect

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) HasLoginUrlRedirect() bool`

HasLoginUrlRedirect returns a boolean if a field has been set.

### GetMappingAttribute

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetMappingAttribute() string`

GetMappingAttribute returns the MappingAttribute field if non-nil, zero value otherwise.

### GetMappingAttributeOk

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetMappingAttributeOk() (*string, bool)`

GetMappingAttributeOk returns a tuple with the MappingAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMappingAttribute

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) SetMappingAttribute(v string)`

SetMappingAttribute sets MappingAttribute field to given value.


### GetCertificateExpirationDate

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetCertificateExpirationDate() string`

GetCertificateExpirationDate returns the CertificateExpirationDate field if non-nil, zero value otherwise.

### GetCertificateExpirationDateOk

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetCertificateExpirationDateOk() (*string, bool)`

GetCertificateExpirationDateOk returns a tuple with the CertificateExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateExpirationDate

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) SetCertificateExpirationDate(v string)`

SetCertificateExpirationDate sets CertificateExpirationDate field to given value.

### HasCertificateExpirationDate

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) HasCertificateExpirationDate() bool`

HasCertificateExpirationDate returns a boolean if a field has been set.

### GetCertificateName

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetCertificateName() string`

GetCertificateName returns the CertificateName field if non-nil, zero value otherwise.

### GetCertificateNameOk

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetCertificateNameOk() (*string, bool)`

GetCertificateNameOk returns a tuple with the CertificateName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateName

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) SetCertificateName(v string)`

SetCertificateName sets CertificateName field to given value.

### HasCertificateName

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) HasCertificateName() bool`

HasCertificateName returns a boolean if a field has been set.

### GetAlias

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) SetAlias(v string)`

SetAlias sets Alias field to given value.

### HasAlias

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) HasAlias() bool`

HasAlias returns a boolean if a field has been set.

### GetCallbackUrl

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetCallbackUrl() string`

GetCallbackUrl returns the CallbackUrl field if non-nil, zero value otherwise.

### GetCallbackUrlOk

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetCallbackUrlOk() (*string, bool)`

GetCallbackUrlOk returns a tuple with the CallbackUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackUrl

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) SetCallbackUrl(v string)`

SetCallbackUrl sets CallbackUrl field to given value.


### GetLegacyAcsUrl

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetLegacyAcsUrl() string`

GetLegacyAcsUrl returns the LegacyAcsUrl field if non-nil, zero value otherwise.

### GetLegacyAcsUrlOk

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) GetLegacyAcsUrlOk() (*string, bool)`

GetLegacyAcsUrlOk returns a tuple with the LegacyAcsUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegacyAcsUrl

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) SetLegacyAcsUrl(v string)`

SetLegacyAcsUrl sets LegacyAcsUrl field to given value.

### HasLegacyAcsUrl

`func (o *ServiceProviderConfigurationFederationProtocolDetailsInner) HasLegacyAcsUrl() bool`

HasLegacyAcsUrl returns a boolean if a field has been set.


