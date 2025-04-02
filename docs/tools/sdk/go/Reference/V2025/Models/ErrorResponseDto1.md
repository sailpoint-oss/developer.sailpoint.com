---
id: error-response-dto1
title: ErrorResponseDto1
pagination_label: ErrorResponseDto1
sidebar_label: ErrorResponseDto1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ErrorResponseDto1', 'ErrorResponseDto1'] 
slug: /tools/sdk/go//models/error-response-dto1
tags: ['SDK', 'Software Development Kit', 'ErrorResponseDto1', 'ErrorResponseDto1']
---

# ErrorResponseDto1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | Pointer to **string** | Fine-grained error code providing more detail of the error. | [optional] 
**TrackingId** | Pointer to **string** | Unique tracking id for the error. | [optional] 
**Messages** | Pointer to [**[]ErrorMessageDto1**](error-message-dto1) | Generic localized reason for error | [optional] 
**Causes** | Pointer to [**[]ErrorMessageDto1**](error-message-dto1) | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [optional] 

## Methods

### NewErrorResponseDto1

`func NewErrorResponseDto1() *ErrorResponseDto1`

NewErrorResponseDto1 instantiates a new ErrorResponseDto1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewErrorResponseDto1WithDefaults

`func NewErrorResponseDto1WithDefaults() *ErrorResponseDto1`

NewErrorResponseDto1WithDefaults instantiates a new ErrorResponseDto1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetailCode

`func (o *ErrorResponseDto1) GetDetailCode() string`

GetDetailCode returns the DetailCode field if non-nil, zero value otherwise.

### GetDetailCodeOk

`func (o *ErrorResponseDto1) GetDetailCodeOk() (*string, bool)`

GetDetailCodeOk returns a tuple with the DetailCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailCode

`func (o *ErrorResponseDto1) SetDetailCode(v string)`

SetDetailCode sets DetailCode field to given value.

### HasDetailCode

`func (o *ErrorResponseDto1) HasDetailCode() bool`

HasDetailCode returns a boolean if a field has been set.

### GetTrackingId

`func (o *ErrorResponseDto1) GetTrackingId() string`

GetTrackingId returns the TrackingId field if non-nil, zero value otherwise.

### GetTrackingIdOk

`func (o *ErrorResponseDto1) GetTrackingIdOk() (*string, bool)`

GetTrackingIdOk returns a tuple with the TrackingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingId

`func (o *ErrorResponseDto1) SetTrackingId(v string)`

SetTrackingId sets TrackingId field to given value.

### HasTrackingId

`func (o *ErrorResponseDto1) HasTrackingId() bool`

HasTrackingId returns a boolean if a field has been set.

### GetMessages

`func (o *ErrorResponseDto1) GetMessages() []ErrorMessageDto1`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *ErrorResponseDto1) GetMessagesOk() (*[]ErrorMessageDto1, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *ErrorResponseDto1) SetMessages(v []ErrorMessageDto1)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *ErrorResponseDto1) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetCauses

`func (o *ErrorResponseDto1) GetCauses() []ErrorMessageDto1`

GetCauses returns the Causes field if non-nil, zero value otherwise.

### GetCausesOk

`func (o *ErrorResponseDto1) GetCausesOk() (*[]ErrorMessageDto1, bool)`

GetCausesOk returns a tuple with the Causes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCauses

`func (o *ErrorResponseDto1) SetCauses(v []ErrorMessageDto1)`

SetCauses sets Causes field to given value.

### HasCauses

`func (o *ErrorResponseDto1) HasCauses() bool`

HasCauses returns a boolean if a field has been set.


