---
id: v2024-bulk-add-tagged-object
title: BulkAddTaggedObject
pagination_label: BulkAddTaggedObject
sidebar_label: BulkAddTaggedObject
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BulkAddTaggedObject', 'V2024BulkAddTaggedObject'] 
slug: /tools/sdk/go/v2024/models/bulk-add-tagged-object
tags: ['SDK', 'Software Development Kit', 'BulkAddTaggedObject', 'V2024BulkAddTaggedObject']
---

# BulkAddTaggedObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRefs** | Pointer to [**[]TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**Tags** | Pointer to **[]string** | Label to be applied to an Object | [optional] 
**Operation** | Pointer to **string** | If APPEND, tags are appended to the list of tags for the object. A 400 error is returned if this would add duplicate tags to the object.  If MERGE, tags are merged with the existing tags. Duplicate tags are silently ignored. | [optional] [default to "APPEND"]

## Methods

### NewBulkAddTaggedObject

`func NewBulkAddTaggedObject() *BulkAddTaggedObject`

NewBulkAddTaggedObject instantiates a new BulkAddTaggedObject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkAddTaggedObjectWithDefaults

`func NewBulkAddTaggedObjectWithDefaults() *BulkAddTaggedObject`

NewBulkAddTaggedObjectWithDefaults instantiates a new BulkAddTaggedObject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObjectRefs

`func (o *BulkAddTaggedObject) GetObjectRefs() []TaggedObjectDto`

GetObjectRefs returns the ObjectRefs field if non-nil, zero value otherwise.

### GetObjectRefsOk

`func (o *BulkAddTaggedObject) GetObjectRefsOk() (*[]TaggedObjectDto, bool)`

GetObjectRefsOk returns a tuple with the ObjectRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectRefs

`func (o *BulkAddTaggedObject) SetObjectRefs(v []TaggedObjectDto)`

SetObjectRefs sets ObjectRefs field to given value.

### HasObjectRefs

`func (o *BulkAddTaggedObject) HasObjectRefs() bool`

HasObjectRefs returns a boolean if a field has been set.

### GetTags

`func (o *BulkAddTaggedObject) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *BulkAddTaggedObject) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *BulkAddTaggedObject) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *BulkAddTaggedObject) HasTags() bool`

HasTags returns a boolean if a field has been set.

### GetOperation

`func (o *BulkAddTaggedObject) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *BulkAddTaggedObject) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *BulkAddTaggedObject) SetOperation(v string)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *BulkAddTaggedObject) HasOperation() bool`

HasOperation returns a boolean if a field has been set.


