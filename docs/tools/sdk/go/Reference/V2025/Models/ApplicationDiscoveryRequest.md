---
id: v2025-application-discovery-request
title: ApplicationDiscoveryRequest
pagination_label: ApplicationDiscoveryRequest
sidebar_label: ApplicationDiscoveryRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApplicationDiscoveryRequest', 'V2025ApplicationDiscoveryRequest'] 
slug: /tools/sdk/go/v2025/models/application-discovery-request
tags: ['SDK', 'Software Development Kit', 'ApplicationDiscoveryRequest', 'V2025ApplicationDiscoveryRequest']
---

# ApplicationDiscoveryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DatasetIds** | **[]string** | List of dataset Ids to discover applications | 

## Methods

### NewApplicationDiscoveryRequest

`func NewApplicationDiscoveryRequest(datasetIds []string, ) *ApplicationDiscoveryRequest`

NewApplicationDiscoveryRequest instantiates a new ApplicationDiscoveryRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicationDiscoveryRequestWithDefaults

`func NewApplicationDiscoveryRequestWithDefaults() *ApplicationDiscoveryRequest`

NewApplicationDiscoveryRequestWithDefaults instantiates a new ApplicationDiscoveryRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDatasetIds

`func (o *ApplicationDiscoveryRequest) GetDatasetIds() []string`

GetDatasetIds returns the DatasetIds field if non-nil, zero value otherwise.

### GetDatasetIdsOk

`func (o *ApplicationDiscoveryRequest) GetDatasetIdsOk() (*[]string, bool)`

GetDatasetIdsOk returns a tuple with the DatasetIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetIds

`func (o *ApplicationDiscoveryRequest) SetDatasetIds(v []string)`

SetDatasetIds sets DatasetIds field to given value.



