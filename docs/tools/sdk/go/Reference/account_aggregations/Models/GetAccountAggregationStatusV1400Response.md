---
id: v1-get-account-aggregation-status-v1400-response
title: GetAccountAggregationStatusV1400Response
pagination_label: GetAccountAggregationStatusV1400Response
sidebar_label: GetAccountAggregationStatusV1400Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetAccountAggregationStatusV1400Response', 'V1GetAccountAggregationStatusV1400Response'] 
slug: /tools/sdk/go/accountaggregations/models/get-account-aggregation-status-v1400-response
tags: ['SDK', 'Software Development Kit', 'GetAccountAggregationStatusV1400Response', 'V1GetAccountAggregationStatusV1400Response']
---

# GetAccountAggregationStatusV1400Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetAccountAggregationStatusV1400Response

`func NewGetAccountAggregationStatusV1400Response() *GetAccountAggregationStatusV1400Response`

NewGetAccountAggregationStatusV1400Response instantiates a new GetAccountAggregationStatusV1400Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAccountAggregationStatusV1400ResponseWithDefaults

`func NewGetAccountAggregationStatusV1400ResponseWithDefaults() *GetAccountAggregationStatusV1400Response`

NewGetAccountAggregationStatusV1400ResponseWithDefaults instantiates a new GetAccountAggregationStatusV1400Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetAccountAggregationStatusV1400Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetAccountAggregationStatusV1400Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetAccountAggregationStatusV1400Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetAccountAggregationStatusV1400Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetAccountAggregationStatusV1400Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetAccountAggregationStatusV1400Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

