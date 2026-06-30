---
id: v1-taggedobject
title: Taggedobject
pagination_label: Taggedobject
sidebar_label: Taggedobject
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Taggedobject', 'V1Taggedobject'] 
slug: /tools/sdk/go/taggedobjects/models/taggedobject
tags: ['SDK', 'Software Development Kit', 'Taggedobject', 'V1Taggedobject']
---

# Taggedobject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRef** | Pointer to [**Taggedobjectdto**](taggedobjectdto) |  | [optional] 
**Tags** | Pointer to **[]string** | Labels to be applied to an Object | [optional] 

## Methods

### NewTaggedobject

`func NewTaggedobject() *Taggedobject`

NewTaggedobject instantiates a new Taggedobject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaggedobjectWithDefaults

`func NewTaggedobjectWithDefaults() *Taggedobject`

NewTaggedobjectWithDefaults instantiates a new Taggedobject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObjectRef

`func (o *Taggedobject) GetObjectRef() Taggedobjectdto`

GetObjectRef returns the ObjectRef field if non-nil, zero value otherwise.

### GetObjectRefOk

`func (o *Taggedobject) GetObjectRefOk() (*Taggedobjectdto, bool)`

GetObjectRefOk returns a tuple with the ObjectRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectRef

`func (o *Taggedobject) SetObjectRef(v Taggedobjectdto)`

SetObjectRef sets ObjectRef field to given value.

### HasObjectRef

`func (o *Taggedobject) HasObjectRef() bool`

HasObjectRef returns a boolean if a field has been set.

### GetTags

`func (o *Taggedobject) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *Taggedobject) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *Taggedobject) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *Taggedobject) HasTags() bool`

HasTags returns a boolean if a field has been set.


