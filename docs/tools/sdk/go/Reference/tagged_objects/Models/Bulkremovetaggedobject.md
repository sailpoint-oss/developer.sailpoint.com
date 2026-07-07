---
id: v1-bulkremovetaggedobject
title: Bulkremovetaggedobject
pagination_label: Bulkremovetaggedobject
sidebar_label: Bulkremovetaggedobject
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Bulkremovetaggedobject', 'V1Bulkremovetaggedobject'] 
slug: /tools/sdk/go/taggedobjects/models/bulkremovetaggedobject
tags: ['SDK', 'Software Development Kit', 'Bulkremovetaggedobject', 'V1Bulkremovetaggedobject']
---

# Bulkremovetaggedobject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRefs** | Pointer to [**[]Taggedobjectdto**](taggedobjectdto) |  | [optional] 
**Tags** | Pointer to **[]string** | Label to be applied to an Object | [optional] 

## Methods

### NewBulkremovetaggedobject

`func NewBulkremovetaggedobject() *Bulkremovetaggedobject`

NewBulkremovetaggedobject instantiates a new Bulkremovetaggedobject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkremovetaggedobjectWithDefaults

`func NewBulkremovetaggedobjectWithDefaults() *Bulkremovetaggedobject`

NewBulkremovetaggedobjectWithDefaults instantiates a new Bulkremovetaggedobject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObjectRefs

`func (o *Bulkremovetaggedobject) GetObjectRefs() []Taggedobjectdto`

GetObjectRefs returns the ObjectRefs field if non-nil, zero value otherwise.

### GetObjectRefsOk

`func (o *Bulkremovetaggedobject) GetObjectRefsOk() (*[]Taggedobjectdto, bool)`

GetObjectRefsOk returns a tuple with the ObjectRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectRefs

`func (o *Bulkremovetaggedobject) SetObjectRefs(v []Taggedobjectdto)`

SetObjectRefs sets ObjectRefs field to given value.

### HasObjectRefs

`func (o *Bulkremovetaggedobject) HasObjectRefs() bool`

HasObjectRefs returns a boolean if a field has been set.

### GetTags

`func (o *Bulkremovetaggedobject) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *Bulkremovetaggedobject) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *Bulkremovetaggedobject) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *Bulkremovetaggedobject) HasTags() bool`

HasTags returns a boolean if a field has been set.


