---
id: v1-publicidentity-attributes-inner
title: PublicidentityAttributesInner
pagination_label: PublicidentityAttributesInner
sidebar_label: PublicidentityAttributesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PublicidentityAttributesInner', 'V1PublicidentityAttributesInner'] 
slug: /tools/sdk/go/publicidentities/models/publicidentity-attributes-inner
tags: ['SDK', 'Software Development Kit', 'PublicidentityAttributesInner', 'V1PublicidentityAttributesInner']
---

# PublicidentityAttributesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | The attribute key | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the attribute | [optional] 
**Value** | Pointer to **NullableString** | The attribute value | [optional] 

## Methods

### NewPublicidentityAttributesInner

`func NewPublicidentityAttributesInner() *PublicidentityAttributesInner`

NewPublicidentityAttributesInner instantiates a new PublicidentityAttributesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicidentityAttributesInnerWithDefaults

`func NewPublicidentityAttributesInnerWithDefaults() *PublicidentityAttributesInner`

NewPublicidentityAttributesInnerWithDefaults instantiates a new PublicidentityAttributesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *PublicidentityAttributesInner) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *PublicidentityAttributesInner) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *PublicidentityAttributesInner) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *PublicidentityAttributesInner) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetName

`func (o *PublicidentityAttributesInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PublicidentityAttributesInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PublicidentityAttributesInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PublicidentityAttributesInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetValue

`func (o *PublicidentityAttributesInner) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *PublicidentityAttributesInner) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *PublicidentityAttributesInner) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *PublicidentityAttributesInner) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *PublicidentityAttributesInner) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *PublicidentityAttributesInner) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil

