---
id: v2024-error-response-dto
title: ErrorResponseDto
pagination_label: ErrorResponseDto
sidebar_label: ErrorResponseDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ErrorResponseDto', 'V2024ErrorResponseDto'] 
slug: /tools/sdk/go/v2024/models/error-response-dto
tags: ['SDK', 'Software Development Kit', 'ErrorResponseDto', 'V2024ErrorResponseDto']
---

# ErrorResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | Pointer to **string** | Fine-grained error code providing more detail of the error. | [optional] 
**TrackingId** | Pointer to **string** | Unique tracking id for the error. | [optional] 
**Messages** | Pointer to [**[]ErrorMessageDto**](error-message-dto) | Generic localized reason for error | [optional] 
**Causes** | Pointer to [**[]ErrorMessageDto**](error-message-dto) | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [optional] 

## Methods

### NewErrorResponseDto

`func NewErrorResponseDto() *ErrorResponseDto`

NewErrorResponseDto instantiates a new ErrorResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewErrorResponseDtoWithDefaults

`func NewErrorResponseDtoWithDefaults() *ErrorResponseDto`

NewErrorResponseDtoWithDefaults instantiates a new ErrorResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetailCode

`func (o *ErrorResponseDto) GetDetailCode() string`

GetDetailCode returns the DetailCode field if non-nil, zero value otherwise.

### GetDetailCodeOk

`func (o *ErrorResponseDto) GetDetailCodeOk() (*string, bool)`

GetDetailCodeOk returns a tuple with the DetailCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailCode

`func (o *ErrorResponseDto) SetDetailCode(v string)`

SetDetailCode sets DetailCode field to given value.

### HasDetailCode

`func (o *ErrorResponseDto) HasDetailCode() bool`

HasDetailCode returns a boolean if a field has been set.

### GetTrackingId

`func (o *ErrorResponseDto) GetTrackingId() string`

GetTrackingId returns the TrackingId field if non-nil, zero value otherwise.

### GetTrackingIdOk

`func (o *ErrorResponseDto) GetTrackingIdOk() (*string, bool)`

GetTrackingIdOk returns a tuple with the TrackingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingId

`func (o *ErrorResponseDto) SetTrackingId(v string)`

SetTrackingId sets TrackingId field to given value.

### HasTrackingId

`func (o *ErrorResponseDto) HasTrackingId() bool`

HasTrackingId returns a boolean if a field has been set.

### GetMessages

`func (o *ErrorResponseDto) GetMessages() []ErrorMessageDto`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *ErrorResponseDto) GetMessagesOk() (*[]ErrorMessageDto, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *ErrorResponseDto) SetMessages(v []ErrorMessageDto)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *ErrorResponseDto) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetCauses

`func (o *ErrorResponseDto) GetCauses() []ErrorMessageDto`

GetCauses returns the Causes field if non-nil, zero value otherwise.

### GetCausesOk

`func (o *ErrorResponseDto) GetCausesOk() (*[]ErrorMessageDto, bool)`

GetCausesOk returns a tuple with the Causes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCauses

`func (o *ErrorResponseDto) SetCauses(v []ErrorMessageDto)`

SetCauses sets Causes field to given value.

### HasCauses

`func (o *ErrorResponseDto) HasCauses() bool`

HasCauses returns a boolean if a field has been set.


