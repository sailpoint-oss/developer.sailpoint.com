---
id: v1-applicationdiscoveryrequest
title: Applicationdiscoveryrequest
pagination_label: Applicationdiscoveryrequest
sidebar_label: Applicationdiscoveryrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Applicationdiscoveryrequest', 'V1Applicationdiscoveryrequest'] 
slug: /tools/sdk/go/applicationdiscovery/models/applicationdiscoveryrequest
tags: ['SDK', 'Software Development Kit', 'Applicationdiscoveryrequest', 'V1Applicationdiscoveryrequest']
---

# Applicationdiscoveryrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DatasetIds** | **[]string** | List of dataset Ids to discover applications | 

## Methods

### NewApplicationdiscoveryrequest

`func NewApplicationdiscoveryrequest(datasetIds []string, ) *Applicationdiscoveryrequest`

NewApplicationdiscoveryrequest instantiates a new Applicationdiscoveryrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicationdiscoveryrequestWithDefaults

`func NewApplicationdiscoveryrequestWithDefaults() *Applicationdiscoveryrequest`

NewApplicationdiscoveryrequestWithDefaults instantiates a new Applicationdiscoveryrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDatasetIds

`func (o *Applicationdiscoveryrequest) GetDatasetIds() []string`

GetDatasetIds returns the DatasetIds field if non-nil, zero value otherwise.

### GetDatasetIdsOk

`func (o *Applicationdiscoveryrequest) GetDatasetIdsOk() (*[]string, bool)`

GetDatasetIdsOk returns a tuple with the DatasetIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetIds

`func (o *Applicationdiscoveryrequest) SetDatasetIds(v []string)`

SetDatasetIds sets DatasetIds field to given value.



