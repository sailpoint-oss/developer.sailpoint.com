---
id: v2025-machine-identity-aggregation-request
title: MachineIdentityAggregationRequest
pagination_label: MachineIdentityAggregationRequest
sidebar_label: MachineIdentityAggregationRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityAggregationRequest', 'V2025MachineIdentityAggregationRequest'] 
slug: /tools/sdk/go/v2025/models/machine-identity-aggregation-request
tags: ['SDK', 'Software Development Kit', 'MachineIdentityAggregationRequest', 'V2025MachineIdentityAggregationRequest']
---

# MachineIdentityAggregationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DatasetIds** | **[]string** | List of dataset Ids to aggregate machine identities | 

## Methods

### NewMachineIdentityAggregationRequest

`func NewMachineIdentityAggregationRequest(datasetIds []string, ) *MachineIdentityAggregationRequest`

NewMachineIdentityAggregationRequest instantiates a new MachineIdentityAggregationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityAggregationRequestWithDefaults

`func NewMachineIdentityAggregationRequestWithDefaults() *MachineIdentityAggregationRequest`

NewMachineIdentityAggregationRequestWithDefaults instantiates a new MachineIdentityAggregationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDatasetIds

`func (o *MachineIdentityAggregationRequest) GetDatasetIds() []string`

GetDatasetIds returns the DatasetIds field if non-nil, zero value otherwise.

### GetDatasetIdsOk

`func (o *MachineIdentityAggregationRequest) GetDatasetIdsOk() (*[]string, bool)`

GetDatasetIdsOk returns a tuple with the DatasetIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetIds

`func (o *MachineIdentityAggregationRequest) SetDatasetIds(v []string)`

SetDatasetIds sets DatasetIds field to given value.



