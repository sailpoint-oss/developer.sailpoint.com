---
id: v2025-dimension-attribute
title: DimensionAttribute
pagination_label: DimensionAttribute
sidebar_label: DimensionAttribute
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DimensionAttribute', 'V2025DimensionAttribute'] 
slug: /tools/sdk/go/v2025/models/dimension-attribute
tags: ['SDK', 'Software Development Kit', 'DimensionAttribute', 'V2025DimensionAttribute']
---

# DimensionAttribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the attribute | [optional] 
**DisplayName** | Pointer to **string** | Display name of the attribute | [optional] 
**Derived** | Pointer to **bool** | If an attribute is derived, its value comes from the identity. Otherwise, it can be provided with access request | [optional] [default to true]

## Methods

### NewDimensionAttribute

`func NewDimensionAttribute() *DimensionAttribute`

NewDimensionAttribute instantiates a new DimensionAttribute object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDimensionAttributeWithDefaults

`func NewDimensionAttributeWithDefaults() *DimensionAttribute`

NewDimensionAttributeWithDefaults instantiates a new DimensionAttribute object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *DimensionAttribute) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DimensionAttribute) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DimensionAttribute) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *DimensionAttribute) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *DimensionAttribute) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *DimensionAttribute) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *DimensionAttribute) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *DimensionAttribute) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDerived

`func (o *DimensionAttribute) GetDerived() bool`

GetDerived returns the Derived field if non-nil, zero value otherwise.

### GetDerivedOk

`func (o *DimensionAttribute) GetDerivedOk() (*bool, bool)`

GetDerivedOk returns a tuple with the Derived field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDerived

`func (o *DimensionAttribute) SetDerived(v bool)`

SetDerived sets Derived field to given value.

### HasDerived

`func (o *DimensionAttribute) HasDerived() bool`

HasDerived returns a boolean if a field has been set.


