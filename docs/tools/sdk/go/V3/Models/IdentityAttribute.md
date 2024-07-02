---
id: identity-attribute
title: IdentityAttribute
pagination_label: IdentityAttribute
sidebar_label: IdentityAttribute
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'IdentityAttribute'] 
slug: /tools/sdk/go/v3/models/identity-attribute
tags: ['SDK', 'Software Development Kit', 'IdentityAttribute']
---

# IdentityAttribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** |  Pointer to **string** | The attribute key | [optional] 
**Name** |  Pointer to **string** | Human-readable display name of the attribute | [optional] 
**Value** |  Pointer to **string** | The attribute value | [optional] 

## Methods

### NewIdentityAttribute

`func NewIdentityAttribute() *IdentityAttribute`

NewIdentityAttribute instantiates a new IdentityAttribute object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityAttributeWithDefaults

`func NewIdentityAttributeWithDefaults() *IdentityAttribute`

NewIdentityAttributeWithDefaults instantiates a new IdentityAttribute object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *IdentityAttribute) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *IdentityAttribute) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *IdentityAttribute) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *IdentityAttribute) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetName

`func (o *IdentityAttribute) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityAttribute) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityAttribute) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IdentityAttribute) HasName() bool`

HasName returns a boolean if a field has been set.

### GetValue

`func (o *IdentityAttribute) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *IdentityAttribute) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *IdentityAttribute) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *IdentityAttribute) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to top]](#) 


