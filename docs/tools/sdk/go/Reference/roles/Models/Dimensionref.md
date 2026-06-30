---
id: v1-dimensionref
title: Dimensionref
pagination_label: Dimensionref
sidebar_label: Dimensionref
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Dimensionref', 'V1Dimensionref'] 
slug: /tools/sdk/go/roles/models/dimensionref
tags: ['SDK', 'Software Development Kit', 'Dimensionref', 'V1Dimensionref']
---

# Dimensionref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of the object to which this reference applies | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object to which this reference applies | [optional] 

## Methods

### NewDimensionref

`func NewDimensionref() *Dimensionref`

NewDimensionref instantiates a new Dimensionref object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDimensionrefWithDefaults

`func NewDimensionrefWithDefaults() *Dimensionref`

NewDimensionrefWithDefaults instantiates a new Dimensionref object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Dimensionref) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Dimensionref) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Dimensionref) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Dimensionref) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Dimensionref) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Dimensionref) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Dimensionref) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Dimensionref) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Dimensionref) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Dimensionref) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Dimensionref) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Dimensionref) HasName() bool`

HasName returns a boolean if a field has been set.


