---
id: beta-resource-objects-request
title: ResourceObjectsRequest
pagination_label: ResourceObjectsRequest
sidebar_label: ResourceObjectsRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ResourceObjectsRequest', 'BetaResourceObjectsRequest'] 
slug: /tools/sdk/go/beta/models/resource-objects-request
tags: ['SDK', 'Software Development Kit', 'ResourceObjectsRequest', 'BetaResourceObjectsRequest']
---

# ResourceObjectsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectType** | Pointer to **string** | The type of resource objects to iterate over. | [optional] [default to "account"]
**MaxCount** | Pointer to **int32** | The maximum number of resource objects to iterate over and return. | [optional] [default to 25]

## Methods

### NewResourceObjectsRequest

`func NewResourceObjectsRequest() *ResourceObjectsRequest`

NewResourceObjectsRequest instantiates a new ResourceObjectsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResourceObjectsRequestWithDefaults

`func NewResourceObjectsRequestWithDefaults() *ResourceObjectsRequest`

NewResourceObjectsRequestWithDefaults instantiates a new ResourceObjectsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObjectType

`func (o *ResourceObjectsRequest) GetObjectType() string`

GetObjectType returns the ObjectType field if non-nil, zero value otherwise.

### GetObjectTypeOk

`func (o *ResourceObjectsRequest) GetObjectTypeOk() (*string, bool)`

GetObjectTypeOk returns a tuple with the ObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectType

`func (o *ResourceObjectsRequest) SetObjectType(v string)`

SetObjectType sets ObjectType field to given value.

### HasObjectType

`func (o *ResourceObjectsRequest) HasObjectType() bool`

HasObjectType returns a boolean if a field has been set.

### GetMaxCount

`func (o *ResourceObjectsRequest) GetMaxCount() int32`

GetMaxCount returns the MaxCount field if non-nil, zero value otherwise.

### GetMaxCountOk

`func (o *ResourceObjectsRequest) GetMaxCountOk() (*int32, bool)`

GetMaxCountOk returns a tuple with the MaxCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxCount

`func (o *ResourceObjectsRequest) SetMaxCount(v int32)`

SetMaxCount sets MaxCount field to given value.

### HasMaxCount

`func (o *ResourceObjectsRequest) HasMaxCount() bool`

HasMaxCount returns a boolean if a field has been set.


