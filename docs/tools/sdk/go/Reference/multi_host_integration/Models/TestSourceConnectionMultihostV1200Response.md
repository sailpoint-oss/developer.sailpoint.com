---
id: v1-test-source-connection-multihost-v1200-response
title: TestSourceConnectionMultihostV1200Response
pagination_label: TestSourceConnectionMultihostV1200Response
sidebar_label: TestSourceConnectionMultihostV1200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TestSourceConnectionMultihostV1200Response', 'V1TestSourceConnectionMultihostV1200Response'] 
slug: /tools/sdk/go/multihostintegration/models/test-source-connection-multihost-v1200-response
tags: ['SDK', 'Software Development Kit', 'TestSourceConnectionMultihostV1200Response', 'V1TestSourceConnectionMultihostV1200Response']
---

# TestSourceConnectionMultihostV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** | Source's test connection status. | [optional] 
**Message** | Pointer to **string** | Source's test connection message. | [optional] 
**Timing** | Pointer to **int32** | Source's test connection timing. | [optional] 
**ResultType** | Pointer to **string** | Source's human-readable result type. | [optional] 
**TestConnectionDetails** | Pointer to **string** | Source's human-readable test connection details. | [optional] 

## Methods

### NewTestSourceConnectionMultihostV1200Response

`func NewTestSourceConnectionMultihostV1200Response() *TestSourceConnectionMultihostV1200Response`

NewTestSourceConnectionMultihostV1200Response instantiates a new TestSourceConnectionMultihostV1200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTestSourceConnectionMultihostV1200ResponseWithDefaults

`func NewTestSourceConnectionMultihostV1200ResponseWithDefaults() *TestSourceConnectionMultihostV1200Response`

NewTestSourceConnectionMultihostV1200ResponseWithDefaults instantiates a new TestSourceConnectionMultihostV1200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *TestSourceConnectionMultihostV1200Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *TestSourceConnectionMultihostV1200Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *TestSourceConnectionMultihostV1200Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *TestSourceConnectionMultihostV1200Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetMessage

`func (o *TestSourceConnectionMultihostV1200Response) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TestSourceConnectionMultihostV1200Response) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TestSourceConnectionMultihostV1200Response) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *TestSourceConnectionMultihostV1200Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetTiming

`func (o *TestSourceConnectionMultihostV1200Response) GetTiming() int32`

GetTiming returns the Timing field if non-nil, zero value otherwise.

### GetTimingOk

`func (o *TestSourceConnectionMultihostV1200Response) GetTimingOk() (*int32, bool)`

GetTimingOk returns a tuple with the Timing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTiming

`func (o *TestSourceConnectionMultihostV1200Response) SetTiming(v int32)`

SetTiming sets Timing field to given value.

### HasTiming

`func (o *TestSourceConnectionMultihostV1200Response) HasTiming() bool`

HasTiming returns a boolean if a field has been set.

### GetResultType

`func (o *TestSourceConnectionMultihostV1200Response) GetResultType() string`

GetResultType returns the ResultType field if non-nil, zero value otherwise.

### GetResultTypeOk

`func (o *TestSourceConnectionMultihostV1200Response) GetResultTypeOk() (*string, bool)`

GetResultTypeOk returns a tuple with the ResultType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResultType

`func (o *TestSourceConnectionMultihostV1200Response) SetResultType(v string)`

SetResultType sets ResultType field to given value.

### HasResultType

`func (o *TestSourceConnectionMultihostV1200Response) HasResultType() bool`

HasResultType returns a boolean if a field has been set.

### GetTestConnectionDetails

`func (o *TestSourceConnectionMultihostV1200Response) GetTestConnectionDetails() string`

GetTestConnectionDetails returns the TestConnectionDetails field if non-nil, zero value otherwise.

### GetTestConnectionDetailsOk

`func (o *TestSourceConnectionMultihostV1200Response) GetTestConnectionDetailsOk() (*string, bool)`

GetTestConnectionDetailsOk returns a tuple with the TestConnectionDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTestConnectionDetails

`func (o *TestSourceConnectionMultihostV1200Response) SetTestConnectionDetails(v string)`

SetTestConnectionDetails sets TestConnectionDetails field to given value.

### HasTestConnectionDetails

`func (o *TestSourceConnectionMultihostV1200Response) HasTestConnectionDetails() bool`

HasTestConnectionDetails returns a boolean if a field has been set.


