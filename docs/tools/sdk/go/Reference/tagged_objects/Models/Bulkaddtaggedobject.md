---
id: v1-bulkaddtaggedobject
title: Bulkaddtaggedobject
pagination_label: Bulkaddtaggedobject
sidebar_label: Bulkaddtaggedobject
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Bulkaddtaggedobject', 'V1Bulkaddtaggedobject'] 
slug: /tools/sdk/go/taggedobjects/models/bulkaddtaggedobject
tags: ['SDK', 'Software Development Kit', 'Bulkaddtaggedobject', 'V1Bulkaddtaggedobject']
---

# Bulkaddtaggedobject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRefs** | Pointer to [**[]Taggedobjectdto**](taggedobjectdto) |  | [optional] 
**Tags** | Pointer to **[]string** | Label to be applied to an Object | [optional] 
**Operation** | Pointer to **string** | If APPEND, tags are appended to the list of tags for the object. A 400 error is returned if this would add duplicate tags to the object.  If MERGE, tags are merged with the existing tags. Duplicate tags are silently ignored. | [optional] [default to "APPEND"]

## Methods

### NewBulkaddtaggedobject

`func NewBulkaddtaggedobject() *Bulkaddtaggedobject`

NewBulkaddtaggedobject instantiates a new Bulkaddtaggedobject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkaddtaggedobjectWithDefaults

`func NewBulkaddtaggedobjectWithDefaults() *Bulkaddtaggedobject`

NewBulkaddtaggedobjectWithDefaults instantiates a new Bulkaddtaggedobject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObjectRefs

`func (o *Bulkaddtaggedobject) GetObjectRefs() []Taggedobjectdto`

GetObjectRefs returns the ObjectRefs field if non-nil, zero value otherwise.

### GetObjectRefsOk

`func (o *Bulkaddtaggedobject) GetObjectRefsOk() (*[]Taggedobjectdto, bool)`

GetObjectRefsOk returns a tuple with the ObjectRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectRefs

`func (o *Bulkaddtaggedobject) SetObjectRefs(v []Taggedobjectdto)`

SetObjectRefs sets ObjectRefs field to given value.

### HasObjectRefs

`func (o *Bulkaddtaggedobject) HasObjectRefs() bool`

HasObjectRefs returns a boolean if a field has been set.

### GetTags

`func (o *Bulkaddtaggedobject) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *Bulkaddtaggedobject) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *Bulkaddtaggedobject) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *Bulkaddtaggedobject) HasTags() bool`

HasTags returns a boolean if a field has been set.

### GetOperation

`func (o *Bulkaddtaggedobject) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Bulkaddtaggedobject) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Bulkaddtaggedobject) SetOperation(v string)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *Bulkaddtaggedobject) HasOperation() bool`

HasOperation returns a boolean if a field has been set.


