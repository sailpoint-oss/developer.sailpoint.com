---
id: v2024-bulk-remove-tagged-object
title: BulkRemoveTaggedObject
pagination_label: BulkRemoveTaggedObject
sidebar_label: BulkRemoveTaggedObject
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BulkRemoveTaggedObject', 'V2024BulkRemoveTaggedObject'] 
slug: /tools/sdk/go/v2024/models/bulk-remove-tagged-object
tags: ['SDK', 'Software Development Kit', 'BulkRemoveTaggedObject', 'V2024BulkRemoveTaggedObject']
---

# BulkRemoveTaggedObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRefs** | Pointer to [**[]TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**Tags** | Pointer to **[]string** | Label to be applied to an Object | [optional] 

## Methods

### NewBulkRemoveTaggedObject

`func NewBulkRemoveTaggedObject() *BulkRemoveTaggedObject`

NewBulkRemoveTaggedObject instantiates a new BulkRemoveTaggedObject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkRemoveTaggedObjectWithDefaults

`func NewBulkRemoveTaggedObjectWithDefaults() *BulkRemoveTaggedObject`

NewBulkRemoveTaggedObjectWithDefaults instantiates a new BulkRemoveTaggedObject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObjectRefs

`func (o *BulkRemoveTaggedObject) GetObjectRefs() []TaggedObjectDto`

GetObjectRefs returns the ObjectRefs field if non-nil, zero value otherwise.

### GetObjectRefsOk

`func (o *BulkRemoveTaggedObject) GetObjectRefsOk() (*[]TaggedObjectDto, bool)`

GetObjectRefsOk returns a tuple with the ObjectRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectRefs

`func (o *BulkRemoveTaggedObject) SetObjectRefs(v []TaggedObjectDto)`

SetObjectRefs sets ObjectRefs field to given value.

### HasObjectRefs

`func (o *BulkRemoveTaggedObject) HasObjectRefs() bool`

HasObjectRefs returns a boolean if a field has been set.

### GetTags

`func (o *BulkRemoveTaggedObject) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *BulkRemoveTaggedObject) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *BulkRemoveTaggedObject) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *BulkRemoveTaggedObject) HasTags() bool`

HasTags returns a boolean if a field has been set.


