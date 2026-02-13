---
id: v2025-tag1
title: Tag1
pagination_label: Tag1
sidebar_label: Tag1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Tag1', 'V2025Tag1'] 
slug: /tools/sdk/go/v2025/models/tag1
tags: ['SDK', 'Software Development Kit', 'Tag1', 'V2025Tag1']
---

# Tag1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int64** | The unique identifier for the tag. | [optional] 
**Name** | Pointer to **NullableString** | The display name or label for the tag. | [optional] 

## Methods

### NewTag1

`func NewTag1() *Tag1`

NewTag1 instantiates a new Tag1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTag1WithDefaults

`func NewTag1WithDefaults() *Tag1`

NewTag1WithDefaults instantiates a new Tag1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Tag1) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Tag1) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Tag1) SetId(v int64)`

SetId sets Id field to given value.

### HasId

`func (o *Tag1) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Tag1) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Tag1) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Tag1) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Tag1) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Tag1) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Tag1) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

