---
id: v2024-dimension-bulk-delete-request
title: DimensionBulkDeleteRequest
pagination_label: DimensionBulkDeleteRequest
sidebar_label: DimensionBulkDeleteRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DimensionBulkDeleteRequest', 'V2024DimensionBulkDeleteRequest'] 
slug: /tools/sdk/go/v2024/models/dimension-bulk-delete-request
tags: ['SDK', 'Software Development Kit', 'DimensionBulkDeleteRequest', 'V2024DimensionBulkDeleteRequest']
---

# DimensionBulkDeleteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DimensionIds** | **[]string** | List of IDs of Dimensions to be deleted. | 

## Methods

### NewDimensionBulkDeleteRequest

`func NewDimensionBulkDeleteRequest(dimensionIds []string, ) *DimensionBulkDeleteRequest`

NewDimensionBulkDeleteRequest instantiates a new DimensionBulkDeleteRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDimensionBulkDeleteRequestWithDefaults

`func NewDimensionBulkDeleteRequestWithDefaults() *DimensionBulkDeleteRequest`

NewDimensionBulkDeleteRequestWithDefaults instantiates a new DimensionBulkDeleteRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDimensionIds

`func (o *DimensionBulkDeleteRequest) GetDimensionIds() []string`

GetDimensionIds returns the DimensionIds field if non-nil, zero value otherwise.

### GetDimensionIdsOk

`func (o *DimensionBulkDeleteRequest) GetDimensionIdsOk() (*[]string, bool)`

GetDimensionIdsOk returns a tuple with the DimensionIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDimensionIds

`func (o *DimensionBulkDeleteRequest) SetDimensionIds(v []string)`

SetDimensionIds sets DimensionIds field to given value.



