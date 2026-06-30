---
id: v1-tag
title: Tag
pagination_label: Tag
sidebar_label: Tag
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Tag', 'V1Tag'] 
slug: /tools/sdk/go/dataaccesssecurity/models/tag
tags: ['SDK', 'Software Development Kit', 'Tag', 'V1Tag']
---

# Tag

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int64** | The unique identifier for the tag. | [optional] 
**Name** | Pointer to **NullableString** | The display name or label for the tag. | [optional] 

## Methods

### NewTag

`func NewTag() *Tag`

NewTag instantiates a new Tag object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTagWithDefaults

`func NewTagWithDefaults() *Tag`

NewTagWithDefaults instantiates a new Tag object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Tag) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Tag) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Tag) SetId(v int64)`

SetId sets Id field to given value.

### HasId

`func (o *Tag) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Tag) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Tag) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Tag) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Tag) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Tag) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Tag) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

