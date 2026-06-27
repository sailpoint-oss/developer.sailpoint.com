---
id: v1-identityattributeconfig
title: Identityattributeconfig
pagination_label: Identityattributeconfig
sidebar_label: Identityattributeconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identityattributeconfig', 'V1Identityattributeconfig'] 
slug: /tools/sdk/go/identityprofiles/models/identityattributeconfig
tags: ['SDK', 'Software Development Kit', 'Identityattributeconfig', 'V1Identityattributeconfig']
---

# Identityattributeconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | Backend will only promote values if the profile/mapping is enabled. | [optional] [default to false]
**AttributeTransforms** | Pointer to [**[]Identityattributetransform**](identityattributetransform) |  | [optional] 

## Methods

### NewIdentityattributeconfig

`func NewIdentityattributeconfig() *Identityattributeconfig`

NewIdentityattributeconfig instantiates a new Identityattributeconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityattributeconfigWithDefaults

`func NewIdentityattributeconfigWithDefaults() *Identityattributeconfig`

NewIdentityattributeconfigWithDefaults instantiates a new Identityattributeconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *Identityattributeconfig) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Identityattributeconfig) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Identityattributeconfig) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Identityattributeconfig) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetAttributeTransforms

`func (o *Identityattributeconfig) GetAttributeTransforms() []Identityattributetransform`

GetAttributeTransforms returns the AttributeTransforms field if non-nil, zero value otherwise.

### GetAttributeTransformsOk

`func (o *Identityattributeconfig) GetAttributeTransformsOk() (*[]Identityattributetransform, bool)`

GetAttributeTransformsOk returns a tuple with the AttributeTransforms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeTransforms

`func (o *Identityattributeconfig) SetAttributeTransforms(v []Identityattributetransform)`

SetAttributeTransforms sets AttributeTransforms field to given value.

### HasAttributeTransforms

`func (o *Identityattributeconfig) HasAttributeTransforms() bool`

HasAttributeTransforms returns a boolean if a field has been set.


