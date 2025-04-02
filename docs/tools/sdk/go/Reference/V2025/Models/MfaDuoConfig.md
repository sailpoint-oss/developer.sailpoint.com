---
id: mfa-duo-config
title: MfaDuoConfig
pagination_label: MfaDuoConfig
sidebar_label: MfaDuoConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MfaDuoConfig', 'MfaDuoConfig'] 
slug: /tools/sdk/go//models/mfa-duo-config
tags: ['SDK', 'Software Development Kit', 'MfaDuoConfig', 'MfaDuoConfig']
---

# MfaDuoConfig

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

### NewMfaDuoConfig

`func NewMfaDuoConfig() *MfaDuoConfig`

NewMfaDuoConfig instantiates a new MfaDuoConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMfaDuoConfigWithDefaults

`func NewMfaDuoConfigWithDefaults() *MfaDuoConfig`

NewMfaDuoConfigWithDefaults instantiates a new MfaDuoConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMfaMethod

`func (o *MfaDuoConfig) GetMfaMethod() string`

GetMfaMethod returns the MfaMethod field if non-nil, zero value otherwise.

### GetMfaMethodOk

`func (o *MfaDuoConfig) GetMfaMethodOk() (*string, bool)`

GetMfaMethodOk returns a tuple with the MfaMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMfaMethod

`func (o *MfaDuoConfig) SetMfaMethod(v string)`

SetMfaMethod sets MfaMethod field to given value.

### HasMfaMethod

`func (o *MfaDuoConfig) HasMfaMethod() bool`

HasMfaMethod returns a boolean if a field has been set.

### SetMfaMethodNil

`func (o *MfaDuoConfig) SetMfaMethodNil(b bool)`

 SetMfaMethodNil sets the value for MfaMethod to be an explicit nil

### UnsetMfaMethod
`func (o *MfaDuoConfig) UnsetMfaMethod()`

UnsetMfaMethod ensures that no value is present for MfaMethod, not even an explicit nil
### GetEnabled

`func (o *MfaDuoConfig) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *MfaDuoConfig) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *MfaDuoConfig) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *MfaDuoConfig) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetHost

`func (o *MfaDuoConfig) GetHost() string`

GetHost returns the Host field if non-nil, zero value otherwise.

### GetHostOk

`func (o *MfaDuoConfig) GetHostOk() (*string, bool)`

GetHostOk returns a tuple with the Host field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHost

`func (o *MfaDuoConfig) SetHost(v string)`

SetHost sets Host field to given value.

### HasHost

`func (o *MfaDuoConfig) HasHost() bool`

HasHost returns a boolean if a field has been set.

### SetHostNil

`func (o *MfaDuoConfig) SetHostNil(b bool)`

 SetHostNil sets the value for Host to be an explicit nil

### UnsetHost
`func (o *MfaDuoConfig) UnsetHost()`

UnsetHost ensures that no value is present for Host, not even an explicit nil
### GetAccessKey

`func (o *MfaDuoConfig) GetAccessKey() string`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *MfaDuoConfig) GetAccessKeyOk() (*string, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *MfaDuoConfig) SetAccessKey(v string)`

SetAccessKey sets AccessKey field to given value.

### HasAccessKey

`func (o *MfaDuoConfig) HasAccessKey() bool`

HasAccessKey returns a boolean if a field has been set.

### SetAccessKeyNil

`func (o *MfaDuoConfig) SetAccessKeyNil(b bool)`

 SetAccessKeyNil sets the value for AccessKey to be an explicit nil

### UnsetAccessKey
`func (o *MfaDuoConfig) UnsetAccessKey()`

UnsetAccessKey ensures that no value is present for AccessKey, not even an explicit nil
### GetIdentityAttribute

`func (o *MfaDuoConfig) GetIdentityAttribute() string`

GetIdentityAttribute returns the IdentityAttribute field if non-nil, zero value otherwise.

### GetIdentityAttributeOk

`func (o *MfaDuoConfig) GetIdentityAttributeOk() (*string, bool)`

GetIdentityAttributeOk returns a tuple with the IdentityAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttribute

`func (o *MfaDuoConfig) SetIdentityAttribute(v string)`

SetIdentityAttribute sets IdentityAttribute field to given value.

### HasIdentityAttribute

`func (o *MfaDuoConfig) HasIdentityAttribute() bool`

HasIdentityAttribute returns a boolean if a field has been set.

### SetIdentityAttributeNil

`func (o *MfaDuoConfig) SetIdentityAttributeNil(b bool)`

 SetIdentityAttributeNil sets the value for IdentityAttribute to be an explicit nil

### UnsetIdentityAttribute
`func (o *MfaDuoConfig) UnsetIdentityAttribute()`

UnsetIdentityAttribute ensures that no value is present for IdentityAttribute, not even an explicit nil
### GetConfigProperties

`func (o *MfaDuoConfig) GetConfigProperties() map[string]interface{}`

GetConfigProperties returns the ConfigProperties field if non-nil, zero value otherwise.

### GetConfigPropertiesOk

`func (o *MfaDuoConfig) GetConfigPropertiesOk() (*map[string]interface{}, bool)`

GetConfigPropertiesOk returns a tuple with the ConfigProperties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigProperties

`func (o *MfaDuoConfig) SetConfigProperties(v map[string]interface{})`

SetConfigProperties sets ConfigProperties field to given value.

### HasConfigProperties

`func (o *MfaDuoConfig) HasConfigProperties() bool`

HasConfigProperties returns a boolean if a field has been set.

### SetConfigPropertiesNil

`func (o *MfaDuoConfig) SetConfigPropertiesNil(b bool)`

 SetConfigPropertiesNil sets the value for ConfigProperties to be an explicit nil

### UnsetConfigProperties
`func (o *MfaDuoConfig) UnsetConfigProperties()`

UnsetConfigProperties ensures that no value is present for ConfigProperties, not even an explicit nil

