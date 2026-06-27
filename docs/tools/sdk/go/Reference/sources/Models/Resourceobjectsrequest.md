---
id: v1-resourceobjectsrequest
title: Resourceobjectsrequest
pagination_label: Resourceobjectsrequest
sidebar_label: Resourceobjectsrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Resourceobjectsrequest', 'V1Resourceobjectsrequest'] 
slug: /tools/sdk/go/sources/models/resourceobjectsrequest
tags: ['SDK', 'Software Development Kit', 'Resourceobjectsrequest', 'V1Resourceobjectsrequest']
---

# Resourceobjectsrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectType** | Pointer to **string** | The type of resource objects to iterate over. | [optional] [default to "account"]
**MaxCount** | Pointer to **int32** | The maximum number of resource objects to iterate over and return. | [optional] [default to 25]

## Methods

### NewResourceobjectsrequest

`func NewResourceobjectsrequest() *Resourceobjectsrequest`

NewResourceobjectsrequest instantiates a new Resourceobjectsrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResourceobjectsrequestWithDefaults

`func NewResourceobjectsrequestWithDefaults() *Resourceobjectsrequest`

NewResourceobjectsrequestWithDefaults instantiates a new Resourceobjectsrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObjectType

`func (o *Resourceobjectsrequest) GetObjectType() string`

GetObjectType returns the ObjectType field if non-nil, zero value otherwise.

### GetObjectTypeOk

`func (o *Resourceobjectsrequest) GetObjectTypeOk() (*string, bool)`

GetObjectTypeOk returns a tuple with the ObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectType

`func (o *Resourceobjectsrequest) SetObjectType(v string)`

SetObjectType sets ObjectType field to given value.

### HasObjectType

`func (o *Resourceobjectsrequest) HasObjectType() bool`

HasObjectType returns a boolean if a field has been set.

### GetMaxCount

`func (o *Resourceobjectsrequest) GetMaxCount() int32`

GetMaxCount returns the MaxCount field if non-nil, zero value otherwise.

### GetMaxCountOk

`func (o *Resourceobjectsrequest) GetMaxCountOk() (*int32, bool)`

GetMaxCountOk returns a tuple with the MaxCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxCount

`func (o *Resourceobjectsrequest) SetMaxCount(v int32)`

SetMaxCount sets MaxCount field to given value.

### HasMaxCount

`func (o *Resourceobjectsrequest) HasMaxCount() bool`

HasMaxCount returns a boolean if a field has been set.


