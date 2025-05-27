---
id: v2025-object-mapping-bulk-patch-response
title: ObjectMappingBulkPatchResponse
pagination_label: ObjectMappingBulkPatchResponse
sidebar_label: ObjectMappingBulkPatchResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ObjectMappingBulkPatchResponse', 'V2025ObjectMappingBulkPatchResponse'] 
slug: /tools/sdk/go/v2025/models/object-mapping-bulk-patch-response
tags: ['SDK', 'Software Development Kit', 'ObjectMappingBulkPatchResponse', 'V2025ObjectMappingBulkPatchResponse']
---

# ObjectMappingBulkPatchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PatchedObjects** | Pointer to [**[]ObjectMappingResponse**](object-mapping-response) |  | [optional] 

## Methods

### NewObjectMappingBulkPatchResponse

`func NewObjectMappingBulkPatchResponse() *ObjectMappingBulkPatchResponse`

NewObjectMappingBulkPatchResponse instantiates a new ObjectMappingBulkPatchResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewObjectMappingBulkPatchResponseWithDefaults

`func NewObjectMappingBulkPatchResponseWithDefaults() *ObjectMappingBulkPatchResponse`

NewObjectMappingBulkPatchResponseWithDefaults instantiates a new ObjectMappingBulkPatchResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPatchedObjects

`func (o *ObjectMappingBulkPatchResponse) GetPatchedObjects() []ObjectMappingResponse`

GetPatchedObjects returns the PatchedObjects field if non-nil, zero value otherwise.

### GetPatchedObjectsOk

`func (o *ObjectMappingBulkPatchResponse) GetPatchedObjectsOk() (*[]ObjectMappingResponse, bool)`

GetPatchedObjectsOk returns a tuple with the PatchedObjects field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPatchedObjects

`func (o *ObjectMappingBulkPatchResponse) SetPatchedObjects(v []ObjectMappingResponse)`

SetPatchedObjects sets PatchedObjects field to given value.

### HasPatchedObjects

`func (o *ObjectMappingBulkPatchResponse) HasPatchedObjects() bool`

HasPatchedObjects returns a boolean if a field has been set.


