---
id: reference
title: Reference
pagination_label: Reference
sidebar_label: Reference
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'Reference'] 
slug: /tools/sdk/go/v3/models/reference
tags: ['SDK', 'Software Development Kit', 'Reference']
---

# Reference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | The unique ID of the referenced object. | [optional] 
**Name** |  Pointer to **string** | The human readable name of the referenced object. | [optional] 

## Methods

### NewReference

`func NewReference() *Reference`

NewReference instantiates a new Reference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReferenceWithDefaults

`func NewReferenceWithDefaults() *Reference`

NewReferenceWithDefaults instantiates a new Reference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Reference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Reference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Reference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Reference) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Reference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Reference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Reference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Reference) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to top]](#) 


