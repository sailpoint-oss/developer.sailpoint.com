---
id: v1-dimensioncriteriakey
title: Dimensioncriteriakey
pagination_label: Dimensioncriteriakey
sidebar_label: Dimensioncriteriakey
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Dimensioncriteriakey', 'V1Dimensioncriteriakey'] 
slug: /tools/sdk/go/dimensions/models/dimensioncriteriakey
tags: ['SDK', 'Software Development Kit', 'Dimensioncriteriakey', 'V1Dimensioncriteriakey']
---

# Dimensioncriteriakey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Dimensioncriteriakeytype**](dimensioncriteriakeytype) |  | 
**Property** | **string** | The name of the identity attribute to which the associated criteria applies. | 

## Methods

### NewDimensioncriteriakey

`func NewDimensioncriteriakey(type_ Dimensioncriteriakeytype, property string, ) *Dimensioncriteriakey`

NewDimensioncriteriakey instantiates a new Dimensioncriteriakey object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDimensioncriteriakeyWithDefaults

`func NewDimensioncriteriakeyWithDefaults() *Dimensioncriteriakey`

NewDimensioncriteriakeyWithDefaults instantiates a new Dimensioncriteriakey object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Dimensioncriteriakey) GetType() Dimensioncriteriakeytype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Dimensioncriteriakey) GetTypeOk() (*Dimensioncriteriakeytype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Dimensioncriteriakey) SetType(v Dimensioncriteriakeytype)`

SetType sets Type field to given value.


### GetProperty

`func (o *Dimensioncriteriakey) GetProperty() string`

GetProperty returns the Property field if non-nil, zero value otherwise.

### GetPropertyOk

`func (o *Dimensioncriteriakey) GetPropertyOk() (*string, bool)`

GetPropertyOk returns a tuple with the Property field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperty

`func (o *Dimensioncriteriakey) SetProperty(v string)`

SetProperty sets Property field to given value.



