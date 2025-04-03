---
id: identity-attribute-config
title: IdentityAttributeConfig
pagination_label: IdentityAttributeConfig
sidebar_label: IdentityAttributeConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityAttributeConfig', 'IdentityAttributeConfig'] 
slug: /tools/sdk/go/v3/models/identity-attribute-config
tags: ['SDK', 'Software Development Kit', 'IdentityAttributeConfig', 'IdentityAttributeConfig']
---

# IdentityAttributeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | Backend will only promote values if the profile/mapping is enabled. | [optional] [default to false]
**AttributeTransforms** | Pointer to [**[]IdentityAttributeTransform**](identity-attribute-transform) |  | [optional] 

## Methods

### NewIdentityAttributeConfig

`func NewIdentityAttributeConfig() *IdentityAttributeConfig`

NewIdentityAttributeConfig instantiates a new IdentityAttributeConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityAttributeConfigWithDefaults

`func NewIdentityAttributeConfigWithDefaults() *IdentityAttributeConfig`

NewIdentityAttributeConfigWithDefaults instantiates a new IdentityAttributeConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *IdentityAttributeConfig) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *IdentityAttributeConfig) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *IdentityAttributeConfig) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *IdentityAttributeConfig) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetAttributeTransforms

`func (o *IdentityAttributeConfig) GetAttributeTransforms() []IdentityAttributeTransform`

GetAttributeTransforms returns the AttributeTransforms field if non-nil, zero value otherwise.

### GetAttributeTransformsOk

`func (o *IdentityAttributeConfig) GetAttributeTransformsOk() (*[]IdentityAttributeTransform, bool)`

GetAttributeTransformsOk returns a tuple with the AttributeTransforms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeTransforms

`func (o *IdentityAttributeConfig) SetAttributeTransforms(v []IdentityAttributeTransform)`

SetAttributeTransforms sets AttributeTransforms field to given value.

### HasAttributeTransforms

`func (o *IdentityAttributeConfig) HasAttributeTransforms() bool`

HasAttributeTransforms returns a boolean if a field has been set.


