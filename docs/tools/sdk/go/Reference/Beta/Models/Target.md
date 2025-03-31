---
id: beta-target
title: Target
pagination_label: Target
sidebar_label: Target
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Target', 'BetaTarget'] 
slug: /tools/sdk/go/beta/models/target
tags: ['SDK', 'Software Development Kit', 'Target', 'BetaTarget']
---

# Target

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Target ID | [optional] 
**Type** | Pointer to **NullableString** | Target type | [optional] 
**Name** | Pointer to **string** | Target name | [optional] 

## Methods

### NewTarget

`func NewTarget() *Target`

NewTarget instantiates a new Target object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTargetWithDefaults

`func NewTargetWithDefaults() *Target`

NewTargetWithDefaults instantiates a new Target object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Target) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Target) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Target) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Target) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Target) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Target) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Target) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Target) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *Target) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *Target) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetName

`func (o *Target) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Target) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Target) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Target) HasName() bool`

HasName returns a boolean if a field has been set.


