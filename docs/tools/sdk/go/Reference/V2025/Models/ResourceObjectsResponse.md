---
id: resource-objects-response
title: ResourceObjectsResponse
pagination_label: ResourceObjectsResponse
sidebar_label: ResourceObjectsResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ResourceObjectsResponse', 'ResourceObjectsResponse'] 
slug: /tools/sdk/go//models/resource-objects-response
tags: ['SDK', 'Software Development Kit', 'ResourceObjectsResponse', 'ResourceObjectsResponse']
---

# ResourceObjectsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the source | [optional] [readonly] 
**Name** | Pointer to **string** | Name of the source | [optional] [readonly] 
**ObjectCount** | Pointer to **int32** | The number of objects that were fetched by the connector. | [optional] [readonly] 
**ElapsedMillis** | Pointer to **int32** | The number of milliseconds spent on the entire request. | [optional] [readonly] 
**ResourceObjects** | Pointer to [**[]ResourceObject**](resource-object) | Fetched objects from the source connector. | [optional] [readonly] 

## Methods

### NewResourceObjectsResponse

`func NewResourceObjectsResponse() *ResourceObjectsResponse`

NewResourceObjectsResponse instantiates a new ResourceObjectsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResourceObjectsResponseWithDefaults

`func NewResourceObjectsResponseWithDefaults() *ResourceObjectsResponse`

NewResourceObjectsResponseWithDefaults instantiates a new ResourceObjectsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ResourceObjectsResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ResourceObjectsResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ResourceObjectsResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ResourceObjectsResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ResourceObjectsResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ResourceObjectsResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ResourceObjectsResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ResourceObjectsResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetObjectCount

`func (o *ResourceObjectsResponse) GetObjectCount() int32`

GetObjectCount returns the ObjectCount field if non-nil, zero value otherwise.

### GetObjectCountOk

`func (o *ResourceObjectsResponse) GetObjectCountOk() (*int32, bool)`

GetObjectCountOk returns a tuple with the ObjectCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectCount

`func (o *ResourceObjectsResponse) SetObjectCount(v int32)`

SetObjectCount sets ObjectCount field to given value.

### HasObjectCount

`func (o *ResourceObjectsResponse) HasObjectCount() bool`

HasObjectCount returns a boolean if a field has been set.

### GetElapsedMillis

`func (o *ResourceObjectsResponse) GetElapsedMillis() int32`

GetElapsedMillis returns the ElapsedMillis field if non-nil, zero value otherwise.

### GetElapsedMillisOk

`func (o *ResourceObjectsResponse) GetElapsedMillisOk() (*int32, bool)`

GetElapsedMillisOk returns a tuple with the ElapsedMillis field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElapsedMillis

`func (o *ResourceObjectsResponse) SetElapsedMillis(v int32)`

SetElapsedMillis sets ElapsedMillis field to given value.

### HasElapsedMillis

`func (o *ResourceObjectsResponse) HasElapsedMillis() bool`

HasElapsedMillis returns a boolean if a field has been set.

### GetResourceObjects

`func (o *ResourceObjectsResponse) GetResourceObjects() []ResourceObject`

GetResourceObjects returns the ResourceObjects field if non-nil, zero value otherwise.

### GetResourceObjectsOk

`func (o *ResourceObjectsResponse) GetResourceObjectsOk() (*[]ResourceObject, bool)`

GetResourceObjectsOk returns a tuple with the ResourceObjects field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceObjects

`func (o *ResourceObjectsResponse) SetResourceObjects(v []ResourceObject)`

SetResourceObjects sets ResourceObjects field to given value.

### HasResourceObjects

`func (o *ResourceObjectsResponse) HasResourceObjects() bool`

HasResourceObjects returns a boolean if a field has been set.


