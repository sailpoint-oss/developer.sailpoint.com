---
id: typed-reference
title: TypedReference
pagination_label: TypedReference
sidebar_label: TypedReference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TypedReference', 'TypedReference'] 
slug: /tools/sdk/go/v3/models/typed-reference
tags: ['SDK', 'Software Development Kit', 'TypedReference', 'TypedReference']
---

# TypedReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**DtoType**](dto-type) |  | 
**Id** | **string** | The id of the object.  | 

## Methods

### NewTypedReference

`func NewTypedReference(type_ DtoType, id string, ) *TypedReference`

NewTypedReference instantiates a new TypedReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTypedReferenceWithDefaults

`func NewTypedReferenceWithDefaults() *TypedReference`

NewTypedReferenceWithDefaults instantiates a new TypedReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TypedReference) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TypedReference) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TypedReference) SetType(v DtoType)`

SetType sets Type field to given value.


### GetId

`func (o *TypedReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TypedReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TypedReference) SetId(v string)`

SetId sets Id field to given value.



