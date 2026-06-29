---
id: v1-serviceproviderconfiguration
title: Serviceproviderconfiguration
pagination_label: Serviceproviderconfiguration
sidebar_label: Serviceproviderconfiguration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Serviceproviderconfiguration', 'V1Serviceproviderconfiguration'] 
slug: /tools/sdk/go/globaltenantsecuritysettings/models/serviceproviderconfiguration
tags: ['SDK', 'Software Development Kit', 'Serviceproviderconfiguration', 'V1Serviceproviderconfiguration']
---

# Serviceproviderconfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | This determines whether or not the SAML authentication flow is enabled for an org | [optional] [default to false]
**BypassIdp** | Pointer to **bool** | This allows basic login with the parameter prompt=true. This is often toggled on when debugging SAML authentication setup. When false, only org admins with MFA-enabled can bypass the IDP. | [optional] [default to false]
**SamlConfigurationValid** | Pointer to **bool** | This indicates whether or not the SAML configuration is valid. | [optional] [default to false]
**FederationProtocolDetails** | Pointer to [**[]ServiceproviderconfigurationFederationProtocolDetailsInner**](serviceproviderconfiguration-federation-protocol-details-inner) | A list of the abstract implementations of the Federation Protocol details. Typically, this will include on SpDetails object and one IdpDetails object used in tandem to define a SAML integration between a customer's identity provider and a customer's SailPoint instance (i.e., the service provider). | [optional] 

## Methods

### NewServiceproviderconfiguration

`func NewServiceproviderconfiguration() *Serviceproviderconfiguration`

NewServiceproviderconfiguration instantiates a new Serviceproviderconfiguration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceproviderconfigurationWithDefaults

`func NewServiceproviderconfigurationWithDefaults() *Serviceproviderconfiguration`

NewServiceproviderconfigurationWithDefaults instantiates a new Serviceproviderconfiguration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *Serviceproviderconfiguration) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Serviceproviderconfiguration) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Serviceproviderconfiguration) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Serviceproviderconfiguration) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetBypassIdp

`func (o *Serviceproviderconfiguration) GetBypassIdp() bool`

GetBypassIdp returns the BypassIdp field if non-nil, zero value otherwise.

### GetBypassIdpOk

`func (o *Serviceproviderconfiguration) GetBypassIdpOk() (*bool, bool)`

GetBypassIdpOk returns a tuple with the BypassIdp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBypassIdp

`func (o *Serviceproviderconfiguration) SetBypassIdp(v bool)`

SetBypassIdp sets BypassIdp field to given value.

### HasBypassIdp

`func (o *Serviceproviderconfiguration) HasBypassIdp() bool`

HasBypassIdp returns a boolean if a field has been set.

### GetSamlConfigurationValid

`func (o *Serviceproviderconfiguration) GetSamlConfigurationValid() bool`

GetSamlConfigurationValid returns the SamlConfigurationValid field if non-nil, zero value otherwise.

### GetSamlConfigurationValidOk

`func (o *Serviceproviderconfiguration) GetSamlConfigurationValidOk() (*bool, bool)`

GetSamlConfigurationValidOk returns a tuple with the SamlConfigurationValid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSamlConfigurationValid

`func (o *Serviceproviderconfiguration) SetSamlConfigurationValid(v bool)`

SetSamlConfigurationValid sets SamlConfigurationValid field to given value.

### HasSamlConfigurationValid

`func (o *Serviceproviderconfiguration) HasSamlConfigurationValid() bool`

HasSamlConfigurationValid returns a boolean if a field has been set.

### GetFederationProtocolDetails

`func (o *Serviceproviderconfiguration) GetFederationProtocolDetails() []ServiceproviderconfigurationFederationProtocolDetailsInner`

GetFederationProtocolDetails returns the FederationProtocolDetails field if non-nil, zero value otherwise.

### GetFederationProtocolDetailsOk

`func (o *Serviceproviderconfiguration) GetFederationProtocolDetailsOk() (*[]ServiceproviderconfigurationFederationProtocolDetailsInner, bool)`

GetFederationProtocolDetailsOk returns a tuple with the FederationProtocolDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFederationProtocolDetails

`func (o *Serviceproviderconfiguration) SetFederationProtocolDetails(v []ServiceproviderconfigurationFederationProtocolDetailsInner)`

SetFederationProtocolDetails sets FederationProtocolDetails field to given value.

### HasFederationProtocolDetails

`func (o *Serviceproviderconfiguration) HasFederationProtocolDetails() bool`

HasFederationProtocolDetails returns a boolean if a field has been set.


