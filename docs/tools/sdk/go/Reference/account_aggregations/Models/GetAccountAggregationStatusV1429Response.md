---
id: v1-get-account-aggregation-status-v1429-response
title: GetAccountAggregationStatusV1429Response
pagination_label: GetAccountAggregationStatusV1429Response
sidebar_label: GetAccountAggregationStatusV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetAccountAggregationStatusV1429Response', 'V1GetAccountAggregationStatusV1429Response'] 
slug: /tools/sdk/go/accountaggregations/models/get-account-aggregation-status-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetAccountAggregationStatusV1429Response', 'V1GetAccountAggregationStatusV1429Response']
---

# GetAccountAggregationStatusV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetAccountAggregationStatusV1429Response

`func NewGetAccountAggregationStatusV1429Response() *GetAccountAggregationStatusV1429Response`

NewGetAccountAggregationStatusV1429Response instantiates a new GetAccountAggregationStatusV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAccountAggregationStatusV1429ResponseWithDefaults

`func NewGetAccountAggregationStatusV1429ResponseWithDefaults() *GetAccountAggregationStatusV1429Response`

NewGetAccountAggregationStatusV1429ResponseWithDefaults instantiates a new GetAccountAggregationStatusV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetAccountAggregationStatusV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetAccountAggregationStatusV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetAccountAggregationStatusV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetAccountAggregationStatusV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetAccountAggregationStatusV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetAccountAggregationStatusV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

