---
id: v1-dimensionschema
title: Dimensionschema
pagination_label: Dimensionschema
sidebar_label: Dimensionschema
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Dimensionschema', 'V1Dimensionschema'] 
slug: /tools/sdk/go/roles/models/dimensionschema
tags: ['SDK', 'Software Development Kit', 'Dimensionschema', 'V1Dimensionschema']
---

# Dimensionschema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DimensionAttributes** | Pointer to [**[]Dimensionattribute**](dimensionattribute) |  | [optional] 

## Methods

### NewDimensionschema

`func NewDimensionschema() *Dimensionschema`

NewDimensionschema instantiates a new Dimensionschema object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDimensionschemaWithDefaults

`func NewDimensionschemaWithDefaults() *Dimensionschema`

NewDimensionschemaWithDefaults instantiates a new Dimensionschema object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDimensionAttributes

`func (o *Dimensionschema) GetDimensionAttributes() []Dimensionattribute`

GetDimensionAttributes returns the DimensionAttributes field if non-nil, zero value otherwise.

### GetDimensionAttributesOk

`func (o *Dimensionschema) GetDimensionAttributesOk() (*[]Dimensionattribute, bool)`

GetDimensionAttributesOk returns a tuple with the DimensionAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDimensionAttributes

`func (o *Dimensionschema) SetDimensionAttributes(v []Dimensionattribute)`

SetDimensionAttributes sets DimensionAttributes field to given value.

### HasDimensionAttributes

`func (o *Dimensionschema) HasDimensionAttributes() bool`

HasDimensionAttributes returns a boolean if a field has been set.


