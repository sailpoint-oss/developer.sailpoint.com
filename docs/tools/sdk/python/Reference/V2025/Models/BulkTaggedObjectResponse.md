---
id: v2025-bulk-tagged-object-response
title: BulkTaggedObjectResponse
pagination_label: BulkTaggedObjectResponse
sidebar_label: BulkTaggedObjectResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BulkTaggedObjectResponse', 'V2025BulkTaggedObjectResponse'] 
slug: /tools/sdk/go/v2025/models/bulk-tagged-object-response
tags: ['SDK', 'Software Development Kit', 'BulkTaggedObjectResponse', 'V2025BulkTaggedObjectResponse']
---

# BulkTaggedObjectResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRefs** | Pointer to [**[]TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**Tags** | Pointer to **[]string** | Label to be applied to an Object | [optional] 

## Methods

### NewBulkTaggedObjectResponse

`func NewBulkTaggedObjectResponse() *BulkTaggedObjectResponse`

NewBulkTaggedObjectResponse instantiates a new BulkTaggedObjectResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkTaggedObjectResponseWithDefaults

`func NewBulkTaggedObjectResponseWithDefaults() *BulkTaggedObjectResponse`

NewBulkTaggedObjectResponseWithDefaults instantiates a new BulkTaggedObjectResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObjectRefs

`func (o *BulkTaggedObjectResponse) GetObjectRefs() []TaggedObjectDto`

GetObjectRefs returns the ObjectRefs field if non-nil, zero value otherwise.

### GetObjectRefsOk

`func (o *BulkTaggedObjectResponse) GetObjectRefsOk() (*[]TaggedObjectDto, bool)`

GetObjectRefsOk returns a tuple with the ObjectRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectRefs

`func (o *BulkTaggedObjectResponse) SetObjectRefs(v []TaggedObjectDto)`

SetObjectRefs sets ObjectRefs field to given value.

### HasObjectRefs

`func (o *BulkTaggedObjectResponse) HasObjectRefs() bool`

HasObjectRefs returns a boolean if a field has been set.

### GetTags

`func (o *BulkTaggedObjectResponse) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *BulkTaggedObjectResponse) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *BulkTaggedObjectResponse) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *BulkTaggedObjectResponse) HasTags() bool`

HasTags returns a boolean if a field has been set.


