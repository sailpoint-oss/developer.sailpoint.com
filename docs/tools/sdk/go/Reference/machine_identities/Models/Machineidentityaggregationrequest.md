---
id: v1-machineidentityaggregationrequest
title: Machineidentityaggregationrequest
pagination_label: Machineidentityaggregationrequest
sidebar_label: Machineidentityaggregationrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Machineidentityaggregationrequest', 'V1Machineidentityaggregationrequest'] 
slug: /tools/sdk/go/machineidentities/models/machineidentityaggregationrequest
tags: ['SDK', 'Software Development Kit', 'Machineidentityaggregationrequest', 'V1Machineidentityaggregationrequest']
---

# Machineidentityaggregationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DatasetIds** | **[]string** | List of dataset Ids to aggregate machine identities | 
**DisableOptimization** | Pointer to **bool** | Flag to disable optimization for the aggregation. Defaults to false when not provided. When set to true, it disables aggregation optimizations and may increase processing time. | [optional] [default to false]

## Methods

### NewMachineidentityaggregationrequest

`func NewMachineidentityaggregationrequest(datasetIds []string, ) *Machineidentityaggregationrequest`

NewMachineidentityaggregationrequest instantiates a new Machineidentityaggregationrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineidentityaggregationrequestWithDefaults

`func NewMachineidentityaggregationrequestWithDefaults() *Machineidentityaggregationrequest`

NewMachineidentityaggregationrequestWithDefaults instantiates a new Machineidentityaggregationrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDatasetIds

`func (o *Machineidentityaggregationrequest) GetDatasetIds() []string`

GetDatasetIds returns the DatasetIds field if non-nil, zero value otherwise.

### GetDatasetIdsOk

`func (o *Machineidentityaggregationrequest) GetDatasetIdsOk() (*[]string, bool)`

GetDatasetIdsOk returns a tuple with the DatasetIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetIds

`func (o *Machineidentityaggregationrequest) SetDatasetIds(v []string)`

SetDatasetIds sets DatasetIds field to given value.


### GetDisableOptimization

`func (o *Machineidentityaggregationrequest) GetDisableOptimization() bool`

GetDisableOptimization returns the DisableOptimization field if non-nil, zero value otherwise.

### GetDisableOptimizationOk

`func (o *Machineidentityaggregationrequest) GetDisableOptimizationOk() (*bool, bool)`

GetDisableOptimizationOk returns a tuple with the DisableOptimization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisableOptimization

`func (o *Machineidentityaggregationrequest) SetDisableOptimization(v bool)`

SetDisableOptimization sets DisableOptimization field to given value.

### HasDisableOptimization

`func (o *Machineidentityaggregationrequest) HasDisableOptimization() bool`

HasDisableOptimization returns a boolean if a field has been set.


