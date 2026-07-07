---
id: v1-get-access-request-identity-metrics-v1429-response
title: GetAccessRequestIdentityMetricsV1429Response
pagination_label: GetAccessRequestIdentityMetricsV1429Response
sidebar_label: GetAccessRequestIdentityMetricsV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetAccessRequestIdentityMetricsV1429Response', 'V1GetAccessRequestIdentityMetricsV1429Response'] 
slug: /tools/sdk/go/accessrequestidentitymetrics/models/get-access-request-identity-metrics-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetAccessRequestIdentityMetricsV1429Response', 'V1GetAccessRequestIdentityMetricsV1429Response']
---

# GetAccessRequestIdentityMetricsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetAccessRequestIdentityMetricsV1429Response

`func NewGetAccessRequestIdentityMetricsV1429Response() *GetAccessRequestIdentityMetricsV1429Response`

NewGetAccessRequestIdentityMetricsV1429Response instantiates a new GetAccessRequestIdentityMetricsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAccessRequestIdentityMetricsV1429ResponseWithDefaults

`func NewGetAccessRequestIdentityMetricsV1429ResponseWithDefaults() *GetAccessRequestIdentityMetricsV1429Response`

NewGetAccessRequestIdentityMetricsV1429ResponseWithDefaults instantiates a new GetAccessRequestIdentityMetricsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetAccessRequestIdentityMetricsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetAccessRequestIdentityMetricsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetAccessRequestIdentityMetricsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetAccessRequestIdentityMetricsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetAccessRequestIdentityMetricsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetAccessRequestIdentityMetricsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

