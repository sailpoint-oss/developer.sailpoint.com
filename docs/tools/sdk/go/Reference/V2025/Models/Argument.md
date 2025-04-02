---
id: argument
title: Argument
pagination_label: Argument
sidebar_label: Argument
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Argument', 'Argument'] 
slug: /tools/sdk/go//models/argument
tags: ['SDK', 'Software Development Kit', 'Argument', 'Argument']
---

# Argument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | the name of the argument | 
**Description** | Pointer to **NullableString** | the description of the argument | [optional] 
**Type** | Pointer to **NullableString** | the programmatic type of the argument | [optional] 

## Methods

### NewArgument

`func NewArgument(name string, ) *Argument`

NewArgument instantiates a new Argument object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewArgumentWithDefaults

`func NewArgumentWithDefaults() *Argument`

NewArgumentWithDefaults instantiates a new Argument object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Argument) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Argument) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Argument) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Argument) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Argument) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Argument) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Argument) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Argument) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Argument) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *Argument) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Argument) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Argument) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Argument) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *Argument) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *Argument) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil

