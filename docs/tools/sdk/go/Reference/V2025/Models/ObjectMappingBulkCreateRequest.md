---
id: object-mapping-bulk-create-request
title: ObjectMappingBulkCreateRequest
pagination_label: ObjectMappingBulkCreateRequest
sidebar_label: ObjectMappingBulkCreateRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ObjectMappingBulkCreateRequest', 'ObjectMappingBulkCreateRequest'] 
slug: /tools/sdk/go//models/object-mapping-bulk-create-request
tags: ['SDK', 'Software Development Kit', 'ObjectMappingBulkCreateRequest', 'ObjectMappingBulkCreateRequest']
---

# ObjectMappingBulkCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NewObjectsMappings** | [**[]ObjectMappingRequest**](object-mapping-request) |  | 

## Methods

### NewObjectMappingBulkCreateRequest

`func NewObjectMappingBulkCreateRequest(newObjectsMappings []ObjectMappingRequest, ) *ObjectMappingBulkCreateRequest`

NewObjectMappingBulkCreateRequest instantiates a new ObjectMappingBulkCreateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewObjectMappingBulkCreateRequestWithDefaults

`func NewObjectMappingBulkCreateRequestWithDefaults() *ObjectMappingBulkCreateRequest`

NewObjectMappingBulkCreateRequestWithDefaults instantiates a new ObjectMappingBulkCreateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNewObjectsMappings

`func (o *ObjectMappingBulkCreateRequest) GetNewObjectsMappings() []ObjectMappingRequest`

GetNewObjectsMappings returns the NewObjectsMappings field if non-nil, zero value otherwise.

### GetNewObjectsMappingsOk

`func (o *ObjectMappingBulkCreateRequest) GetNewObjectsMappingsOk() (*[]ObjectMappingRequest, bool)`

GetNewObjectsMappingsOk returns a tuple with the NewObjectsMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewObjectsMappings

`func (o *ObjectMappingBulkCreateRequest) SetNewObjectsMappings(v []ObjectMappingRequest)`

SetNewObjectsMappings sets NewObjectsMappings field to given value.



