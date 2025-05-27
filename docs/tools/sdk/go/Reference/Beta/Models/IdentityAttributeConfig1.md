---
id: beta-identity-attribute-config1
title: IdentityAttributeConfig1
pagination_label: IdentityAttributeConfig1
sidebar_label: IdentityAttributeConfig1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityAttributeConfig1', 'BetaIdentityAttributeConfig1'] 
slug: /tools/sdk/go/beta/models/identity-attribute-config1
tags: ['SDK', 'Software Development Kit', 'IdentityAttributeConfig1', 'BetaIdentityAttributeConfig1']
---

# IdentityAttributeConfig1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | Backend will only promote values if the profile/mapping is enabled. | [optional] [default to false]
**AttributeTransforms** | Pointer to [**[]IdentityAttributeTransform1**](identity-attribute-transform1) |  | [optional] 

## Methods

### NewIdentityAttributeConfig1

`func NewIdentityAttributeConfig1() *IdentityAttributeConfig1`

NewIdentityAttributeConfig1 instantiates a new IdentityAttributeConfig1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityAttributeConfig1WithDefaults

`func NewIdentityAttributeConfig1WithDefaults() *IdentityAttributeConfig1`

NewIdentityAttributeConfig1WithDefaults instantiates a new IdentityAttributeConfig1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *IdentityAttributeConfig1) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *IdentityAttributeConfig1) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *IdentityAttributeConfig1) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *IdentityAttributeConfig1) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetAttributeTransforms

`func (o *IdentityAttributeConfig1) GetAttributeTransforms() []IdentityAttributeTransform1`

GetAttributeTransforms returns the AttributeTransforms field if non-nil, zero value otherwise.

### GetAttributeTransformsOk

`func (o *IdentityAttributeConfig1) GetAttributeTransformsOk() (*[]IdentityAttributeTransform1, bool)`

GetAttributeTransformsOk returns a tuple with the AttributeTransforms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeTransforms

`func (o *IdentityAttributeConfig1) SetAttributeTransforms(v []IdentityAttributeTransform1)`

SetAttributeTransforms sets AttributeTransforms field to given value.

### HasAttributeTransforms

`func (o *IdentityAttributeConfig1) HasAttributeTransforms() bool`

HasAttributeTransforms returns a boolean if a field has been set.


