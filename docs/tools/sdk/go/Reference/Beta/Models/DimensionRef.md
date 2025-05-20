---
id: beta-dimension-ref
title: DimensionRef
pagination_label: DimensionRef
sidebar_label: DimensionRef
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DimensionRef', 'BetaDimensionRef'] 
slug: /tools/sdk/go/beta/models/dimension-ref
tags: ['SDK', 'Software Development Kit', 'DimensionRef', 'BetaDimensionRef']
---

# DimensionRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of the object to which this reference applies | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object to which this reference applies | [optional] 

## Methods

### NewDimensionRef

`func NewDimensionRef() *DimensionRef`

NewDimensionRef instantiates a new DimensionRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDimensionRefWithDefaults

`func NewDimensionRefWithDefaults() *DimensionRef`

NewDimensionRefWithDefaults instantiates a new DimensionRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *DimensionRef) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *DimensionRef) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *DimensionRef) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *DimensionRef) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *DimensionRef) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DimensionRef) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DimensionRef) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *DimensionRef) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *DimensionRef) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DimensionRef) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DimensionRef) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *DimensionRef) HasName() bool`

HasName returns a boolean if a field has been set.


