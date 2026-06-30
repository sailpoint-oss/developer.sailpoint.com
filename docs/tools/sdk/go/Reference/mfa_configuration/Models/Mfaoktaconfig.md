---
id: v1-mfaoktaconfig
title: Mfaoktaconfig
pagination_label: Mfaoktaconfig
sidebar_label: Mfaoktaconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Mfaoktaconfig', 'V1Mfaoktaconfig'] 
slug: /tools/sdk/go/mfaconfiguration/models/mfaoktaconfig
tags: ['SDK', 'Software Development Kit', 'Mfaoktaconfig', 'V1Mfaoktaconfig']
---

# Mfaoktaconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MfaMethod** | Pointer to **NullableString** | Mfa method name | [optional] 
**Enabled** | Pointer to **bool** | If MFA method is enabled. | [optional] [default to false]
**Host** | Pointer to **NullableString** | The server host name or IP address of the MFA provider. | [optional] 
**AccessKey** | Pointer to **NullableString** | The secret key for authenticating requests to the MFA provider. | [optional] 
**IdentityAttribute** | Pointer to **NullableString** | Optional. The name of the attribute for mapping IdentityNow identity to the MFA provider. | [optional] 

## Methods

### NewMfaoktaconfig

`func NewMfaoktaconfig() *Mfaoktaconfig`

NewMfaoktaconfig instantiates a new Mfaoktaconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMfaoktaconfigWithDefaults

`func NewMfaoktaconfigWithDefaults() *Mfaoktaconfig`

NewMfaoktaconfigWithDefaults instantiates a new Mfaoktaconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMfaMethod

`func (o *Mfaoktaconfig) GetMfaMethod() string`

GetMfaMethod returns the MfaMethod field if non-nil, zero value otherwise.

### GetMfaMethodOk

`func (o *Mfaoktaconfig) GetMfaMethodOk() (*string, bool)`

GetMfaMethodOk returns a tuple with the MfaMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMfaMethod

`func (o *Mfaoktaconfig) SetMfaMethod(v string)`

SetMfaMethod sets MfaMethod field to given value.

### HasMfaMethod

`func (o *Mfaoktaconfig) HasMfaMethod() bool`

HasMfaMethod returns a boolean if a field has been set.

### SetMfaMethodNil

`func (o *Mfaoktaconfig) SetMfaMethodNil(b bool)`

 SetMfaMethodNil sets the value for MfaMethod to be an explicit nil

### UnsetMfaMethod
`func (o *Mfaoktaconfig) UnsetMfaMethod()`

UnsetMfaMethod ensures that no value is present for MfaMethod, not even an explicit nil
### GetEnabled

`func (o *Mfaoktaconfig) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Mfaoktaconfig) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Mfaoktaconfig) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Mfaoktaconfig) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetHost

`func (o *Mfaoktaconfig) GetHost() string`

GetHost returns the Host field if non-nil, zero value otherwise.

### GetHostOk

`func (o *Mfaoktaconfig) GetHostOk() (*string, bool)`

GetHostOk returns a tuple with the Host field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHost

`func (o *Mfaoktaconfig) SetHost(v string)`

SetHost sets Host field to given value.

### HasHost

`func (o *Mfaoktaconfig) HasHost() bool`

HasHost returns a boolean if a field has been set.

### SetHostNil

`func (o *Mfaoktaconfig) SetHostNil(b bool)`

 SetHostNil sets the value for Host to be an explicit nil

### UnsetHost
`func (o *Mfaoktaconfig) UnsetHost()`

UnsetHost ensures that no value is present for Host, not even an explicit nil
### GetAccessKey

`func (o *Mfaoktaconfig) GetAccessKey() string`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *Mfaoktaconfig) GetAccessKeyOk() (*string, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *Mfaoktaconfig) SetAccessKey(v string)`

SetAccessKey sets AccessKey field to given value.

### HasAccessKey

`func (o *Mfaoktaconfig) HasAccessKey() bool`

HasAccessKey returns a boolean if a field has been set.

### SetAccessKeyNil

`func (o *Mfaoktaconfig) SetAccessKeyNil(b bool)`

 SetAccessKeyNil sets the value for AccessKey to be an explicit nil

### UnsetAccessKey
`func (o *Mfaoktaconfig) UnsetAccessKey()`

UnsetAccessKey ensures that no value is present for AccessKey, not even an explicit nil
### GetIdentityAttribute

`func (o *Mfaoktaconfig) GetIdentityAttribute() string`

GetIdentityAttribute returns the IdentityAttribute field if non-nil, zero value otherwise.

### GetIdentityAttributeOk

`func (o *Mfaoktaconfig) GetIdentityAttributeOk() (*string, bool)`

GetIdentityAttributeOk returns a tuple with the IdentityAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttribute

`func (o *Mfaoktaconfig) SetIdentityAttribute(v string)`

SetIdentityAttribute sets IdentityAttribute field to given value.

### HasIdentityAttribute

`func (o *Mfaoktaconfig) HasIdentityAttribute() bool`

HasIdentityAttribute returns a boolean if a field has been set.

### SetIdentityAttributeNil

`func (o *Mfaoktaconfig) SetIdentityAttributeNil(b bool)`

 SetIdentityAttributeNil sets the value for IdentityAttribute to be an explicit nil

### UnsetIdentityAttribute
`func (o *Mfaoktaconfig) UnsetIdentityAttribute()`

UnsetIdentityAttribute ensures that no value is present for IdentityAttribute, not even an explicit nil

