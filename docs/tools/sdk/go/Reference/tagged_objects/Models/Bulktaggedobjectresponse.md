---
id: v1-bulktaggedobjectresponse
title: Bulktaggedobjectresponse
pagination_label: Bulktaggedobjectresponse
sidebar_label: Bulktaggedobjectresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Bulktaggedobjectresponse', 'V1Bulktaggedobjectresponse'] 
slug: /tools/sdk/go/taggedobjects/models/bulktaggedobjectresponse
tags: ['SDK', 'Software Development Kit', 'Bulktaggedobjectresponse', 'V1Bulktaggedobjectresponse']
---

# Bulktaggedobjectresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRefs** | Pointer to [**[]Taggedobjectdto**](taggedobjectdto) |  | [optional] 
**Tags** | Pointer to **[]string** | Label to be applied to an Object | [optional] 

## Methods

### NewBulktaggedobjectresponse

`func NewBulktaggedobjectresponse() *Bulktaggedobjectresponse`

NewBulktaggedobjectresponse instantiates a new Bulktaggedobjectresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulktaggedobjectresponseWithDefaults

`func NewBulktaggedobjectresponseWithDefaults() *Bulktaggedobjectresponse`

NewBulktaggedobjectresponseWithDefaults instantiates a new Bulktaggedobjectresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObjectRefs

`func (o *Bulktaggedobjectresponse) GetObjectRefs() []Taggedobjectdto`

GetObjectRefs returns the ObjectRefs field if non-nil, zero value otherwise.

### GetObjectRefsOk

`func (o *Bulktaggedobjectresponse) GetObjectRefsOk() (*[]Taggedobjectdto, bool)`

GetObjectRefsOk returns a tuple with the ObjectRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectRefs

`func (o *Bulktaggedobjectresponse) SetObjectRefs(v []Taggedobjectdto)`

SetObjectRefs sets ObjectRefs field to given value.

### HasObjectRefs

`func (o *Bulktaggedobjectresponse) HasObjectRefs() bool`

HasObjectRefs returns a boolean if a field has been set.

### GetTags

`func (o *Bulktaggedobjectresponse) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *Bulktaggedobjectresponse) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *Bulktaggedobjectresponse) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *Bulktaggedobjectresponse) HasTags() bool`

HasTags returns a boolean if a field has been set.


