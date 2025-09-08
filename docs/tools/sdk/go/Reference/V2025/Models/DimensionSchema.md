---
id: v2025-dimension-schema
title: DimensionSchema
pagination_label: DimensionSchema
sidebar_label: DimensionSchema
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DimensionSchema', 'V2025DimensionSchema'] 
slug: /tools/sdk/go/v2025/models/dimension-schema
tags: ['SDK', 'Software Development Kit', 'DimensionSchema', 'V2025DimensionSchema']
---

# DimensionSchema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DimensionAttributes** | Pointer to [**[]DimensionAttribute**](dimension-attribute) |  | [optional] 

## Methods

### NewDimensionSchema

`func NewDimensionSchema() *DimensionSchema`

NewDimensionSchema instantiates a new DimensionSchema object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDimensionSchemaWithDefaults

`func NewDimensionSchemaWithDefaults() *DimensionSchema`

NewDimensionSchemaWithDefaults instantiates a new DimensionSchema object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDimensionAttributes

`func (o *DimensionSchema) GetDimensionAttributes() []DimensionAttribute`

GetDimensionAttributes returns the DimensionAttributes field if non-nil, zero value otherwise.

### GetDimensionAttributesOk

`func (o *DimensionSchema) GetDimensionAttributesOk() (*[]DimensionAttribute, bool)`

GetDimensionAttributesOk returns a tuple with the DimensionAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDimensionAttributes

`func (o *DimensionSchema) SetDimensionAttributes(v []DimensionAttribute)`

SetDimensionAttributes sets DimensionAttributes field to given value.

### HasDimensionAttributes

`func (o *DimensionSchema) HasDimensionAttributes() bool`

HasDimensionAttributes returns a boolean if a field has been set.


