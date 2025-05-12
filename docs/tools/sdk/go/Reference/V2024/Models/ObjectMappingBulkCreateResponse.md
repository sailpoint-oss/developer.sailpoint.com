---
id: v2024-object-mapping-bulk-create-response
title: ObjectMappingBulkCreateResponse
pagination_label: ObjectMappingBulkCreateResponse
sidebar_label: ObjectMappingBulkCreateResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ObjectMappingBulkCreateResponse', 'V2024ObjectMappingBulkCreateResponse'] 
slug: /tools/sdk/go/v2024/models/object-mapping-bulk-create-response
tags: ['SDK', 'Software Development Kit', 'ObjectMappingBulkCreateResponse', 'V2024ObjectMappingBulkCreateResponse']
---

# ObjectMappingBulkCreateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddedObjects** | Pointer to [**[]ObjectMappingResponse**](object-mapping-response) |  | [optional] 

## Methods

### NewObjectMappingBulkCreateResponse

`func NewObjectMappingBulkCreateResponse() *ObjectMappingBulkCreateResponse`

NewObjectMappingBulkCreateResponse instantiates a new ObjectMappingBulkCreateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewObjectMappingBulkCreateResponseWithDefaults

`func NewObjectMappingBulkCreateResponseWithDefaults() *ObjectMappingBulkCreateResponse`

NewObjectMappingBulkCreateResponseWithDefaults instantiates a new ObjectMappingBulkCreateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddedObjects

`func (o *ObjectMappingBulkCreateResponse) GetAddedObjects() []ObjectMappingResponse`

GetAddedObjects returns the AddedObjects field if non-nil, zero value otherwise.

### GetAddedObjectsOk

`func (o *ObjectMappingBulkCreateResponse) GetAddedObjectsOk() (*[]ObjectMappingResponse, bool)`

GetAddedObjectsOk returns a tuple with the AddedObjects field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddedObjects

`func (o *ObjectMappingBulkCreateResponse) SetAddedObjects(v []ObjectMappingResponse)`

SetAddedObjects sets AddedObjects field to given value.

### HasAddedObjects

`func (o *ObjectMappingBulkCreateResponse) HasAddedObjects() bool`

HasAddedObjects returns a boolean if a field has been set.


