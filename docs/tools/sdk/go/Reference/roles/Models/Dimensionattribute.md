---
id: v1-dimensionattribute
title: Dimensionattribute
pagination_label: Dimensionattribute
sidebar_label: Dimensionattribute
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Dimensionattribute', 'V1Dimensionattribute'] 
slug: /tools/sdk/go/roles/models/dimensionattribute
tags: ['SDK', 'Software Development Kit', 'Dimensionattribute', 'V1Dimensionattribute']
---

# Dimensionattribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the attribute | [optional] 
**DisplayName** | Pointer to **string** | Display name of the attribute | [optional] 
**Derived** | Pointer to **bool** | If an attribute is derived, its value comes from the identity. Otherwise, it can be provided with access request | [optional] [default to true]

## Methods

### NewDimensionattribute

`func NewDimensionattribute() *Dimensionattribute`

NewDimensionattribute instantiates a new Dimensionattribute object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDimensionattributeWithDefaults

`func NewDimensionattributeWithDefaults() *Dimensionattribute`

NewDimensionattributeWithDefaults instantiates a new Dimensionattribute object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Dimensionattribute) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Dimensionattribute) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Dimensionattribute) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Dimensionattribute) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *Dimensionattribute) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Dimensionattribute) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Dimensionattribute) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Dimensionattribute) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDerived

`func (o *Dimensionattribute) GetDerived() bool`

GetDerived returns the Derived field if non-nil, zero value otherwise.

### GetDerivedOk

`func (o *Dimensionattribute) GetDerivedOk() (*bool, bool)`

GetDerivedOk returns a tuple with the Derived field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDerived

`func (o *Dimensionattribute) SetDerived(v bool)`

SetDerived sets Derived field to given value.

### HasDerived

`func (o *Dimensionattribute) HasDerived() bool`

HasDerived returns a boolean if a field has been set.


