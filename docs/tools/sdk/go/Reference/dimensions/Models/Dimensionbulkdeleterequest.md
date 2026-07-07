---
id: v1-dimensionbulkdeleterequest
title: Dimensionbulkdeleterequest
pagination_label: Dimensionbulkdeleterequest
sidebar_label: Dimensionbulkdeleterequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Dimensionbulkdeleterequest', 'V1Dimensionbulkdeleterequest'] 
slug: /tools/sdk/go/dimensions/models/dimensionbulkdeleterequest
tags: ['SDK', 'Software Development Kit', 'Dimensionbulkdeleterequest', 'V1Dimensionbulkdeleterequest']
---

# Dimensionbulkdeleterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DimensionIds** | **[]string** | List of IDs of Dimensions to be deleted. | 

## Methods

### NewDimensionbulkdeleterequest

`func NewDimensionbulkdeleterequest(dimensionIds []string, ) *Dimensionbulkdeleterequest`

NewDimensionbulkdeleterequest instantiates a new Dimensionbulkdeleterequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDimensionbulkdeleterequestWithDefaults

`func NewDimensionbulkdeleterequestWithDefaults() *Dimensionbulkdeleterequest`

NewDimensionbulkdeleterequestWithDefaults instantiates a new Dimensionbulkdeleterequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDimensionIds

`func (o *Dimensionbulkdeleterequest) GetDimensionIds() []string`

GetDimensionIds returns the DimensionIds field if non-nil, zero value otherwise.

### GetDimensionIdsOk

`func (o *Dimensionbulkdeleterequest) GetDimensionIdsOk() (*[]string, bool)`

GetDimensionIdsOk returns a tuple with the DimensionIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDimensionIds

`func (o *Dimensionbulkdeleterequest) SetDimensionIds(v []string)`

SetDimensionIds sets DimensionIds field to given value.



