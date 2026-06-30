---
id: v1-resourceobjectsresponse
title: Resourceobjectsresponse
pagination_label: Resourceobjectsresponse
sidebar_label: Resourceobjectsresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Resourceobjectsresponse', 'V1Resourceobjectsresponse'] 
slug: /tools/sdk/go/sources/models/resourceobjectsresponse
tags: ['SDK', 'Software Development Kit', 'Resourceobjectsresponse', 'V1Resourceobjectsresponse']
---

# Resourceobjectsresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the source | [optional] [readonly] 
**Name** | Pointer to **string** | Name of the source | [optional] [readonly] 
**ObjectCount** | Pointer to **int32** | The number of objects that were fetched by the connector. | [optional] [readonly] 
**ElapsedMillis** | Pointer to **int32** | The number of milliseconds spent on the entire request. | [optional] [readonly] 
**ResourceObjects** | Pointer to [**[]Resourceobject**](resourceobject) | Fetched objects from the source connector. | [optional] [readonly] 

## Methods

### NewResourceobjectsresponse

`func NewResourceobjectsresponse() *Resourceobjectsresponse`

NewResourceobjectsresponse instantiates a new Resourceobjectsresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResourceobjectsresponseWithDefaults

`func NewResourceobjectsresponseWithDefaults() *Resourceobjectsresponse`

NewResourceobjectsresponseWithDefaults instantiates a new Resourceobjectsresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Resourceobjectsresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Resourceobjectsresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Resourceobjectsresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Resourceobjectsresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Resourceobjectsresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Resourceobjectsresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Resourceobjectsresponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Resourceobjectsresponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetObjectCount

`func (o *Resourceobjectsresponse) GetObjectCount() int32`

GetObjectCount returns the ObjectCount field if non-nil, zero value otherwise.

### GetObjectCountOk

`func (o *Resourceobjectsresponse) GetObjectCountOk() (*int32, bool)`

GetObjectCountOk returns a tuple with the ObjectCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectCount

`func (o *Resourceobjectsresponse) SetObjectCount(v int32)`

SetObjectCount sets ObjectCount field to given value.

### HasObjectCount

`func (o *Resourceobjectsresponse) HasObjectCount() bool`

HasObjectCount returns a boolean if a field has been set.

### GetElapsedMillis

`func (o *Resourceobjectsresponse) GetElapsedMillis() int32`

GetElapsedMillis returns the ElapsedMillis field if non-nil, zero value otherwise.

### GetElapsedMillisOk

`func (o *Resourceobjectsresponse) GetElapsedMillisOk() (*int32, bool)`

GetElapsedMillisOk returns a tuple with the ElapsedMillis field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElapsedMillis

`func (o *Resourceobjectsresponse) SetElapsedMillis(v int32)`

SetElapsedMillis sets ElapsedMillis field to given value.

### HasElapsedMillis

`func (o *Resourceobjectsresponse) HasElapsedMillis() bool`

HasElapsedMillis returns a boolean if a field has been set.

### GetResourceObjects

`func (o *Resourceobjectsresponse) GetResourceObjects() []Resourceobject`

GetResourceObjects returns the ResourceObjects field if non-nil, zero value otherwise.

### GetResourceObjectsOk

`func (o *Resourceobjectsresponse) GetResourceObjectsOk() (*[]Resourceobject, bool)`

GetResourceObjectsOk returns a tuple with the ResourceObjects field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceObjects

`func (o *Resourceobjectsresponse) SetResourceObjects(v []Resourceobject)`

SetResourceObjects sets ResourceObjects field to given value.

### HasResourceObjects

`func (o *Resourceobjectsresponse) HasResourceObjects() bool`

HasResourceObjects returns a boolean if a field has been set.


