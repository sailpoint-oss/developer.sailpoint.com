---
id: v2024-service-provider-configuration
title: ServiceProviderConfiguration
pagination_label: ServiceProviderConfiguration
sidebar_label: ServiceProviderConfiguration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ServiceProviderConfiguration', 'V2024ServiceProviderConfiguration'] 
slug: /tools/sdk/go/v2024/models/service-provider-configuration
tags: ['SDK', 'Software Development Kit', 'ServiceProviderConfiguration', 'V2024ServiceProviderConfiguration']
---

# ServiceProviderConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | This determines whether or not the SAML authentication flow is enabled for an org | [optional] [default to false]
**BypassIdp** | Pointer to **bool** | This allows basic login with the parameter prompt=true. This is often toggled on when debugging SAML authentication setup. When false, only org admins with MFA-enabled can bypass the IDP. | [optional] [default to false]
**SamlConfigurationValid** | Pointer to **bool** | This indicates whether or not the SAML configuration is valid. | [optional] [default to false]
**FederationProtocolDetails** | Pointer to [**[]ServiceProviderConfigurationFederationProtocolDetailsInner**](service-provider-configuration-federation-protocol-details-inner) | A list of the abstract implementations of the Federation Protocol details. Typically, this will include on SpDetails object and one IdpDetails object used in tandem to define a SAML integration between a customer's identity provider and a customer's SailPoint instance (i.e., the service provider). | [optional] 

## Methods

### NewServiceProviderConfiguration

`func NewServiceProviderConfiguration() *ServiceProviderConfiguration`

NewServiceProviderConfiguration instantiates a new ServiceProviderConfiguration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceProviderConfigurationWithDefaults

`func NewServiceProviderConfigurationWithDefaults() *ServiceProviderConfiguration`

NewServiceProviderConfigurationWithDefaults instantiates a new ServiceProviderConfiguration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *ServiceProviderConfiguration) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *ServiceProviderConfiguration) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *ServiceProviderConfiguration) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *ServiceProviderConfiguration) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetBypassIdp

`func (o *ServiceProviderConfiguration) GetBypassIdp() bool`

GetBypassIdp returns the BypassIdp field if non-nil, zero value otherwise.

### GetBypassIdpOk

`func (o *ServiceProviderConfiguration) GetBypassIdpOk() (*bool, bool)`

GetBypassIdpOk returns a tuple with the BypassIdp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBypassIdp

`func (o *ServiceProviderConfiguration) SetBypassIdp(v bool)`

SetBypassIdp sets BypassIdp field to given value.

### HasBypassIdp

`func (o *ServiceProviderConfiguration) HasBypassIdp() bool`

HasBypassIdp returns a boolean if a field has been set.

### GetSamlConfigurationValid

`func (o *ServiceProviderConfiguration) GetSamlConfigurationValid() bool`

GetSamlConfigurationValid returns the SamlConfigurationValid field if non-nil, zero value otherwise.

### GetSamlConfigurationValidOk

`func (o *ServiceProviderConfiguration) GetSamlConfigurationValidOk() (*bool, bool)`

GetSamlConfigurationValidOk returns a tuple with the SamlConfigurationValid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSamlConfigurationValid

`func (o *ServiceProviderConfiguration) SetSamlConfigurationValid(v bool)`

SetSamlConfigurationValid sets SamlConfigurationValid field to given value.

### HasSamlConfigurationValid

`func (o *ServiceProviderConfiguration) HasSamlConfigurationValid() bool`

HasSamlConfigurationValid returns a boolean if a field has been set.

### GetFederationProtocolDetails

`func (o *ServiceProviderConfiguration) GetFederationProtocolDetails() []ServiceProviderConfigurationFederationProtocolDetailsInner`

GetFederationProtocolDetails returns the FederationProtocolDetails field if non-nil, zero value otherwise.

### GetFederationProtocolDetailsOk

`func (o *ServiceProviderConfiguration) GetFederationProtocolDetailsOk() (*[]ServiceProviderConfigurationFederationProtocolDetailsInner, bool)`

GetFederationProtocolDetailsOk returns a tuple with the FederationProtocolDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFederationProtocolDetails

`func (o *ServiceProviderConfiguration) SetFederationProtocolDetails(v []ServiceProviderConfigurationFederationProtocolDetailsInner)`

SetFederationProtocolDetails sets FederationProtocolDetails field to given value.

### HasFederationProtocolDetails

`func (o *ServiceProviderConfiguration) HasFederationProtocolDetails() bool`

HasFederationProtocolDetails returns a boolean if a field has been set.


