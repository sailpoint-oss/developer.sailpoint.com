---
id: public-identity-attributes-inner
title: PublicIdentityAttributesInner
pagination_label: PublicIdentityAttributesInner
sidebar_label: PublicIdentityAttributesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PublicIdentityAttributesInner', 'PublicIdentityAttributesInner'] 
slug: /tools/sdk/go/v3/models/public-identity-attributes-inner
tags: ['SDK', 'Software Development Kit', 'PublicIdentityAttributesInner', 'PublicIdentityAttributesInner']
---

# PublicIdentityAttributesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | The attribute key | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the attribute | [optional] 
**Value** | Pointer to **NullableString** | The attribute value | [optional] 

## Methods

### NewPublicIdentityAttributesInner

`func NewPublicIdentityAttributesInner() *PublicIdentityAttributesInner`

NewPublicIdentityAttributesInner instantiates a new PublicIdentityAttributesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicIdentityAttributesInnerWithDefaults

`func NewPublicIdentityAttributesInnerWithDefaults() *PublicIdentityAttributesInner`

NewPublicIdentityAttributesInnerWithDefaults instantiates a new PublicIdentityAttributesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *PublicIdentityAttributesInner) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *PublicIdentityAttributesInner) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *PublicIdentityAttributesInner) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *PublicIdentityAttributesInner) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetName

`func (o *PublicIdentityAttributesInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PublicIdentityAttributesInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PublicIdentityAttributesInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PublicIdentityAttributesInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetValue

`func (o *PublicIdentityAttributesInner) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *PublicIdentityAttributesInner) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *PublicIdentityAttributesInner) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *PublicIdentityAttributesInner) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *PublicIdentityAttributesInner) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *PublicIdentityAttributesInner) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil

