---
id: tagged-object
title: TaggedObject
pagination_label: TaggedObject
sidebar_label: TaggedObject
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TaggedObject', 'TaggedObject'] 
slug: /tools/sdk/go//models/tagged-object
tags: ['SDK', 'Software Development Kit', 'TaggedObject', 'TaggedObject']
---

# TaggedObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRef** | Pointer to [**TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**Tags** | Pointer to **[]string** | Labels to be applied to an Object | [optional] 

## Methods

### NewTaggedObject

`func NewTaggedObject() *TaggedObject`

NewTaggedObject instantiates a new TaggedObject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaggedObjectWithDefaults

`func NewTaggedObjectWithDefaults() *TaggedObject`

NewTaggedObjectWithDefaults instantiates a new TaggedObject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObjectRef

`func (o *TaggedObject) GetObjectRef() TaggedObjectDto`

GetObjectRef returns the ObjectRef field if non-nil, zero value otherwise.

### GetObjectRefOk

`func (o *TaggedObject) GetObjectRefOk() (*TaggedObjectDto, bool)`

GetObjectRefOk returns a tuple with the ObjectRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectRef

`func (o *TaggedObject) SetObjectRef(v TaggedObjectDto)`

SetObjectRef sets ObjectRef field to given value.

### HasObjectRef

`func (o *TaggedObject) HasObjectRef() bool`

HasObjectRef returns a boolean if a field has been set.

### GetTags

`func (o *TaggedObject) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *TaggedObject) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *TaggedObject) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *TaggedObject) HasTags() bool`

HasTags returns a boolean if a field has been set.


