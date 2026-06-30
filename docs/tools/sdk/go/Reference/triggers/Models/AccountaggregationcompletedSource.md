---
id: v1-accountaggregationcompleted-source
title: AccountaggregationcompletedSource
pagination_label: AccountaggregationcompletedSource
sidebar_label: AccountaggregationcompletedSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountaggregationcompletedSource', 'V1AccountaggregationcompletedSource'] 
slug: /tools/sdk/go/triggers/models/accountaggregationcompleted-source
tags: ['SDK', 'Software Development Kit', 'AccountaggregationcompletedSource', 'V1AccountaggregationcompletedSource']
---

# AccountaggregationcompletedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The DTO type of the source the accounts are being aggregated from. | 
**Id** | **string** | The ID of the source the accounts are being aggregated from. | 
**Name** | **string** | Display name of the source the accounts are being aggregated from. | 

## Methods

### NewAccountaggregationcompletedSource

`func NewAccountaggregationcompletedSource(type_ string, id string, name string, ) *AccountaggregationcompletedSource`

NewAccountaggregationcompletedSource instantiates a new AccountaggregationcompletedSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountaggregationcompletedSourceWithDefaults

`func NewAccountaggregationcompletedSourceWithDefaults() *AccountaggregationcompletedSource`

NewAccountaggregationcompletedSourceWithDefaults instantiates a new AccountaggregationcompletedSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountaggregationcompletedSource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountaggregationcompletedSource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountaggregationcompletedSource) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *AccountaggregationcompletedSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountaggregationcompletedSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountaggregationcompletedSource) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccountaggregationcompletedSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountaggregationcompletedSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountaggregationcompletedSource) SetName(v string)`

SetName sets Name field to given value.



