---
id: v1-mfaduoconfig
title: Mfaduoconfig
pagination_label: Mfaduoconfig
sidebar_label: Mfaduoconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Mfaduoconfig', 'V1Mfaduoconfig'] 
slug: /tools/sdk/go/mfaconfiguration/models/mfaduoconfig
tags: ['SDK', 'Software Development Kit', 'Mfaduoconfig', 'V1Mfaduoconfig']
---

# Mfaduoconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MfaMethod** | Pointer to **NullableString** | Mfa method name | [optional] 
**Enabled** | Pointer to **bool** | If MFA method is enabled. | [optional] [default to false]
**Host** | Pointer to **NullableString** | The server host name or IP address of the MFA provider. | [optional] 
**AccessKey** | Pointer to **NullableString** | The secret key for authenticating requests to the MFA provider. | [optional] 
**IdentityAttribute** | Pointer to **NullableString** | Optional. The name of the attribute for mapping IdentityNow identity to the MFA provider. | [optional] 
**ConfigProperties** | Pointer to **map[string]interface{}** | A map with additional config properties for the given MFA method - duo-web. | [optional] 

## Methods

### NewMfaduoconfig

`func NewMfaduoconfig() *Mfaduoconfig`

NewMfaduoconfig instantiates a new Mfaduoconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMfaduoconfigWithDefaults

`func NewMfaduoconfigWithDefaults() *Mfaduoconfig`

NewMfaduoconfigWithDefaults instantiates a new Mfaduoconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMfaMethod

`func (o *Mfaduoconfig) GetMfaMethod() string`

GetMfaMethod returns the MfaMethod field if non-nil, zero value otherwise.

### GetMfaMethodOk

`func (o *Mfaduoconfig) GetMfaMethodOk() (*string, bool)`

GetMfaMethodOk returns a tuple with the MfaMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMfaMethod

`func (o *Mfaduoconfig) SetMfaMethod(v string)`

SetMfaMethod sets MfaMethod field to given value.

### HasMfaMethod

`func (o *Mfaduoconfig) HasMfaMethod() bool`

HasMfaMethod returns a boolean if a field has been set.

### SetMfaMethodNil

`func (o *Mfaduoconfig) SetMfaMethodNil(b bool)`

 SetMfaMethodNil sets the value for MfaMethod to be an explicit nil

### UnsetMfaMethod
`func (o *Mfaduoconfig) UnsetMfaMethod()`

UnsetMfaMethod ensures that no value is present for MfaMethod, not even an explicit nil
### GetEnabled

`func (o *Mfaduoconfig) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Mfaduoconfig) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Mfaduoconfig) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Mfaduoconfig) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetHost

`func (o *Mfaduoconfig) GetHost() string`

GetHost returns the Host field if non-nil, zero value otherwise.

### GetHostOk

`func (o *Mfaduoconfig) GetHostOk() (*string, bool)`

GetHostOk returns a tuple with the Host field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHost

`func (o *Mfaduoconfig) SetHost(v string)`

SetHost sets Host field to given value.

### HasHost

`func (o *Mfaduoconfig) HasHost() bool`

HasHost returns a boolean if a field has been set.

### SetHostNil

`func (o *Mfaduoconfig) SetHostNil(b bool)`

 SetHostNil sets the value for Host to be an explicit nil

### UnsetHost
`func (o *Mfaduoconfig) UnsetHost()`

UnsetHost ensures that no value is present for Host, not even an explicit nil
### GetAccessKey

`func (o *Mfaduoconfig) GetAccessKey() string`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *Mfaduoconfig) GetAccessKeyOk() (*string, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *Mfaduoconfig) SetAccessKey(v string)`

SetAccessKey sets AccessKey field to given value.

### HasAccessKey

`func (o *Mfaduoconfig) HasAccessKey() bool`

HasAccessKey returns a boolean if a field has been set.

### SetAccessKeyNil

`func (o *Mfaduoconfig) SetAccessKeyNil(b bool)`

 SetAccessKeyNil sets the value for AccessKey to be an explicit nil

### UnsetAccessKey
`func (o *Mfaduoconfig) UnsetAccessKey()`

UnsetAccessKey ensures that no value is present for AccessKey, not even an explicit nil
### GetIdentityAttribute

`func (o *Mfaduoconfig) GetIdentityAttribute() string`

GetIdentityAttribute returns the IdentityAttribute field if non-nil, zero value otherwise.

### GetIdentityAttributeOk

`func (o *Mfaduoconfig) GetIdentityAttributeOk() (*string, bool)`

GetIdentityAttributeOk returns a tuple with the IdentityAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttribute

`func (o *Mfaduoconfig) SetIdentityAttribute(v string)`

SetIdentityAttribute sets IdentityAttribute field to given value.

### HasIdentityAttribute

`func (o *Mfaduoconfig) HasIdentityAttribute() bool`

HasIdentityAttribute returns a boolean if a field has been set.

### SetIdentityAttributeNil

`func (o *Mfaduoconfig) SetIdentityAttributeNil(b bool)`

 SetIdentityAttributeNil sets the value for IdentityAttribute to be an explicit nil

### UnsetIdentityAttribute
`func (o *Mfaduoconfig) UnsetIdentityAttribute()`

UnsetIdentityAttribute ensures that no value is present for IdentityAttribute, not even an explicit nil
### GetConfigProperties

`func (o *Mfaduoconfig) GetConfigProperties() map[string]interface{}`

GetConfigProperties returns the ConfigProperties field if non-nil, zero value otherwise.

### GetConfigPropertiesOk

`func (o *Mfaduoconfig) GetConfigPropertiesOk() (*map[string]interface{}, bool)`

GetConfigPropertiesOk returns a tuple with the ConfigProperties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigProperties

`func (o *Mfaduoconfig) SetConfigProperties(v map[string]interface{})`

SetConfigProperties sets ConfigProperties field to given value.

### HasConfigProperties

`func (o *Mfaduoconfig) HasConfigProperties() bool`

HasConfigProperties returns a boolean if a field has been set.

### SetConfigPropertiesNil

`func (o *Mfaduoconfig) SetConfigPropertiesNil(b bool)`

 SetConfigPropertiesNil sets the value for ConfigProperties to be an explicit nil

### UnsetConfigProperties
`func (o *Mfaduoconfig) UnsetConfigProperties()`

UnsetConfigProperties ensures that no value is present for ConfigProperties, not even an explicit nil

