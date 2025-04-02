---
id: mfa-okta-config
title: MfaOktaConfig
pagination_label: MfaOktaConfig
sidebar_label: MfaOktaConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MfaOktaConfig', 'MfaOktaConfig'] 
slug: /tools/sdk/go//models/mfa-okta-config
tags: ['SDK', 'Software Development Kit', 'MfaOktaConfig', 'MfaOktaConfig']
---

# MfaOktaConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MfaMethod** | Pointer to **NullableString** | Mfa method name | [optional] 
**Enabled** | Pointer to **bool** | If MFA method is enabled. | [optional] [default to false]
**Host** | Pointer to **NullableString** | The server host name or IP address of the MFA provider. | [optional] 
**AccessKey** | Pointer to **NullableString** | The secret key for authenticating requests to the MFA provider. | [optional] 
**IdentityAttribute** | Pointer to **NullableString** | Optional. The name of the attribute for mapping IdentityNow identity to the MFA provider. | [optional] 

## Methods

### NewMfaOktaConfig

`func NewMfaOktaConfig() *MfaOktaConfig`

NewMfaOktaConfig instantiates a new MfaOktaConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMfaOktaConfigWithDefaults

`func NewMfaOktaConfigWithDefaults() *MfaOktaConfig`

NewMfaOktaConfigWithDefaults instantiates a new MfaOktaConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMfaMethod

`func (o *MfaOktaConfig) GetMfaMethod() string`

GetMfaMethod returns the MfaMethod field if non-nil, zero value otherwise.

### GetMfaMethodOk

`func (o *MfaOktaConfig) GetMfaMethodOk() (*string, bool)`

GetMfaMethodOk returns a tuple with the MfaMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMfaMethod

`func (o *MfaOktaConfig) SetMfaMethod(v string)`

SetMfaMethod sets MfaMethod field to given value.

### HasMfaMethod

`func (o *MfaOktaConfig) HasMfaMethod() bool`

HasMfaMethod returns a boolean if a field has been set.

### SetMfaMethodNil

`func (o *MfaOktaConfig) SetMfaMethodNil(b bool)`

 SetMfaMethodNil sets the value for MfaMethod to be an explicit nil

### UnsetMfaMethod
`func (o *MfaOktaConfig) UnsetMfaMethod()`

UnsetMfaMethod ensures that no value is present for MfaMethod, not even an explicit nil
### GetEnabled

`func (o *MfaOktaConfig) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *MfaOktaConfig) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *MfaOktaConfig) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *MfaOktaConfig) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetHost

`func (o *MfaOktaConfig) GetHost() string`

GetHost returns the Host field if non-nil, zero value otherwise.

### GetHostOk

`func (o *MfaOktaConfig) GetHostOk() (*string, bool)`

GetHostOk returns a tuple with the Host field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHost

`func (o *MfaOktaConfig) SetHost(v string)`

SetHost sets Host field to given value.

### HasHost

`func (o *MfaOktaConfig) HasHost() bool`

HasHost returns a boolean if a field has been set.

### SetHostNil

`func (o *MfaOktaConfig) SetHostNil(b bool)`

 SetHostNil sets the value for Host to be an explicit nil

### UnsetHost
`func (o *MfaOktaConfig) UnsetHost()`

UnsetHost ensures that no value is present for Host, not even an explicit nil
### GetAccessKey

`func (o *MfaOktaConfig) GetAccessKey() string`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *MfaOktaConfig) GetAccessKeyOk() (*string, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *MfaOktaConfig) SetAccessKey(v string)`

SetAccessKey sets AccessKey field to given value.

### HasAccessKey

`func (o *MfaOktaConfig) HasAccessKey() bool`

HasAccessKey returns a boolean if a field has been set.

### SetAccessKeyNil

`func (o *MfaOktaConfig) SetAccessKeyNil(b bool)`

 SetAccessKeyNil sets the value for AccessKey to be an explicit nil

### UnsetAccessKey
`func (o *MfaOktaConfig) UnsetAccessKey()`

UnsetAccessKey ensures that no value is present for AccessKey, not even an explicit nil
### GetIdentityAttribute

`func (o *MfaOktaConfig) GetIdentityAttribute() string`

GetIdentityAttribute returns the IdentityAttribute field if non-nil, zero value otherwise.

### GetIdentityAttributeOk

`func (o *MfaOktaConfig) GetIdentityAttributeOk() (*string, bool)`

GetIdentityAttributeOk returns a tuple with the IdentityAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttribute

`func (o *MfaOktaConfig) SetIdentityAttribute(v string)`

SetIdentityAttribute sets IdentityAttribute field to given value.

### HasIdentityAttribute

`func (o *MfaOktaConfig) HasIdentityAttribute() bool`

HasIdentityAttribute returns a boolean if a field has been set.

### SetIdentityAttributeNil

`func (o *MfaOktaConfig) SetIdentityAttributeNil(b bool)`

 SetIdentityAttributeNil sets the value for IdentityAttribute to be an explicit nil

### UnsetIdentityAttribute
`func (o *MfaOktaConfig) UnsetIdentityAttribute()`

UnsetIdentityAttribute ensures that no value is present for IdentityAttribute, not even an explicit nil

