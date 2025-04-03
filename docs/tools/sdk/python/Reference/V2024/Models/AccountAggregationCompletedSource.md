---
id: v2024-account-aggregation-completed-source
title: AccountAggregationCompletedSource
pagination_label: AccountAggregationCompletedSource
sidebar_label: AccountAggregationCompletedSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountAggregationCompletedSource', 'V2024AccountAggregationCompletedSource'] 
slug: /tools/sdk/go/v2024/models/account-aggregation-completed-source
tags: ['SDK', 'Software Development Kit', 'AccountAggregationCompletedSource', 'V2024AccountAggregationCompletedSource']
---

# AccountAggregationCompletedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The DTO type of the source the accounts are being aggregated from. | 
**Id** | **string** | The ID of the source the accounts are being aggregated from. | 
**Name** | **string** | Display name of the source the accounts are being aggregated from. | 

## Methods

### NewAccountAggregationCompletedSource

`func NewAccountAggregationCompletedSource(type_ string, id string, name string, ) *AccountAggregationCompletedSource`

NewAccountAggregationCompletedSource instantiates a new AccountAggregationCompletedSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountAggregationCompletedSourceWithDefaults

`func NewAccountAggregationCompletedSourceWithDefaults() *AccountAggregationCompletedSource`

NewAccountAggregationCompletedSourceWithDefaults instantiates a new AccountAggregationCompletedSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountAggregationCompletedSource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountAggregationCompletedSource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountAggregationCompletedSource) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *AccountAggregationCompletedSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountAggregationCompletedSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountAggregationCompletedSource) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccountAggregationCompletedSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountAggregationCompletedSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountAggregationCompletedSource) SetName(v string)`

SetName sets Name field to given value.



