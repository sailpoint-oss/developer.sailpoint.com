---
id: object-mapping-bulk-patch-request
title: ObjectMappingBulkPatchRequest
pagination_label: ObjectMappingBulkPatchRequest
sidebar_label: ObjectMappingBulkPatchRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ObjectMappingBulkPatchRequest', 'ObjectMappingBulkPatchRequest'] 
slug: /tools/sdk/go/v3/models/object-mapping-bulk-patch-request
tags: ['SDK', 'Software Development Kit', 'ObjectMappingBulkPatchRequest', 'ObjectMappingBulkPatchRequest']
---

# ObjectMappingBulkPatchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Patches** | [**map[string][]JsonPatchOperation**](array) | Map of id of the object mapping to a JsonPatchOperation describing what to patch on that object mapping. | 

## Methods

### NewObjectMappingBulkPatchRequest

`func NewObjectMappingBulkPatchRequest(patches map[string][]JsonPatchOperation, ) *ObjectMappingBulkPatchRequest`

NewObjectMappingBulkPatchRequest instantiates a new ObjectMappingBulkPatchRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewObjectMappingBulkPatchRequestWithDefaults

`func NewObjectMappingBulkPatchRequestWithDefaults() *ObjectMappingBulkPatchRequest`

NewObjectMappingBulkPatchRequestWithDefaults instantiates a new ObjectMappingBulkPatchRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPatches

`func (o *ObjectMappingBulkPatchRequest) GetPatches() map[string][]JsonPatchOperation`

GetPatches returns the Patches field if non-nil, zero value otherwise.

### GetPatchesOk

`func (o *ObjectMappingBulkPatchRequest) GetPatchesOk() (*map[string][]JsonPatchOperation, bool)`

GetPatchesOk returns a tuple with the Patches field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPatches

`func (o *ObjectMappingBulkPatchRequest) SetPatches(v map[string][]JsonPatchOperation)`

SetPatches sets Patches field to given value.



