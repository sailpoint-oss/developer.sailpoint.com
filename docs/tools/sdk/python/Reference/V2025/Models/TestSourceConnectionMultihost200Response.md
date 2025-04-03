---
id: v2025-test-source-connection-multihost200-response
title: TestSourceConnectionMultihost200Response
pagination_label: TestSourceConnectionMultihost200Response
sidebar_label: TestSourceConnectionMultihost200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TestSourceConnectionMultihost200Response', 'V2025TestSourceConnectionMultihost200Response'] 
slug: /tools/sdk/go/v2025/models/test-source-connection-multihost200-response
tags: ['SDK', 'Software Development Kit', 'TestSourceConnectionMultihost200Response', 'V2025TestSourceConnectionMultihost200Response']
---

# TestSourceConnectionMultihost200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** | Source's test connection status. | [optional] 
**Message** | Pointer to **string** | Source's test connection message. | [optional] 
**Timing** | Pointer to **int32** | Source's test connection timing. | [optional] 
**ResultType** | Pointer to **map[string]interface{}** | Source's human-readable result type. | [optional] 
**TestConnectionDetails** | Pointer to **string** | Source's human-readable test connection details. | [optional] 

## Methods

### NewTestSourceConnectionMultihost200Response

`func NewTestSourceConnectionMultihost200Response() *TestSourceConnectionMultihost200Response`

NewTestSourceConnectionMultihost200Response instantiates a new TestSourceConnectionMultihost200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTestSourceConnectionMultihost200ResponseWithDefaults

`func NewTestSourceConnectionMultihost200ResponseWithDefaults() *TestSourceConnectionMultihost200Response`

NewTestSourceConnectionMultihost200ResponseWithDefaults instantiates a new TestSourceConnectionMultihost200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *TestSourceConnectionMultihost200Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *TestSourceConnectionMultihost200Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *TestSourceConnectionMultihost200Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *TestSourceConnectionMultihost200Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetMessage

`func (o *TestSourceConnectionMultihost200Response) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TestSourceConnectionMultihost200Response) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TestSourceConnectionMultihost200Response) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *TestSourceConnectionMultihost200Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetTiming

`func (o *TestSourceConnectionMultihost200Response) GetTiming() int32`

GetTiming returns the Timing field if non-nil, zero value otherwise.

### GetTimingOk

`func (o *TestSourceConnectionMultihost200Response) GetTimingOk() (*int32, bool)`

GetTimingOk returns a tuple with the Timing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTiming

`func (o *TestSourceConnectionMultihost200Response) SetTiming(v int32)`

SetTiming sets Timing field to given value.

### HasTiming

`func (o *TestSourceConnectionMultihost200Response) HasTiming() bool`

HasTiming returns a boolean if a field has been set.

### GetResultType

`func (o *TestSourceConnectionMultihost200Response) GetResultType() map[string]interface{}`

GetResultType returns the ResultType field if non-nil, zero value otherwise.

### GetResultTypeOk

`func (o *TestSourceConnectionMultihost200Response) GetResultTypeOk() (*map[string]interface{}, bool)`

GetResultTypeOk returns a tuple with the ResultType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResultType

`func (o *TestSourceConnectionMultihost200Response) SetResultType(v map[string]interface{})`

SetResultType sets ResultType field to given value.

### HasResultType

`func (o *TestSourceConnectionMultihost200Response) HasResultType() bool`

HasResultType returns a boolean if a field has been set.

### GetTestConnectionDetails

`func (o *TestSourceConnectionMultihost200Response) GetTestConnectionDetails() string`

GetTestConnectionDetails returns the TestConnectionDetails field if non-nil, zero value otherwise.

### GetTestConnectionDetailsOk

`func (o *TestSourceConnectionMultihost200Response) GetTestConnectionDetailsOk() (*string, bool)`

GetTestConnectionDetailsOk returns a tuple with the TestConnectionDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTestConnectionDetails

`func (o *TestSourceConnectionMultihost200Response) SetTestConnectionDetails(v string)`

SetTestConnectionDetails sets TestConnectionDetails field to given value.

### HasTestConnectionDetails

`func (o *TestSourceConnectionMultihost200Response) HasTestConnectionDetails() bool`

HasTestConnectionDetails returns a boolean if a field has been set.


