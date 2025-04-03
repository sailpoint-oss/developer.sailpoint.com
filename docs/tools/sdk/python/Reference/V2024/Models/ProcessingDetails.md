---
id: v2024-processing-details
title: ProcessingDetails
pagination_label: ProcessingDetails
sidebar_label: ProcessingDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ProcessingDetails', 'V2024ProcessingDetails'] 
slug: /tools/sdk/go/v2024/models/processing-details
tags: ['SDK', 'Software Development Kit', 'ProcessingDetails', 'V2024ProcessingDetails']
---

# ProcessingDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **NullableTime** | A date-time in ISO-8601 format | [optional] 
**Stage** | Pointer to **string** |  | [optional] 
**RetryCount** | Pointer to **int32** |  | [optional] 
**StackTrace** | Pointer to **string** |  | [optional] 
**Message** | Pointer to **string** |  | [optional] 

## Methods

### NewProcessingDetails

`func NewProcessingDetails() *ProcessingDetails`

NewProcessingDetails instantiates a new ProcessingDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProcessingDetailsWithDefaults

`func NewProcessingDetailsWithDefaults() *ProcessingDetails`

NewProcessingDetailsWithDefaults instantiates a new ProcessingDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *ProcessingDetails) GetDate() SailPointTime`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *ProcessingDetails) GetDateOk() (*SailPointTime, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *ProcessingDetails) SetDate(v SailPointTime)`

SetDate sets Date field to given value.

### HasDate

`func (o *ProcessingDetails) HasDate() bool`

HasDate returns a boolean if a field has been set.

### SetDateNil

`func (o *ProcessingDetails) SetDateNil(b bool)`

 SetDateNil sets the value for Date to be an explicit nil

### UnsetDate
`func (o *ProcessingDetails) UnsetDate()`

UnsetDate ensures that no value is present for Date, not even an explicit nil
### GetStage

`func (o *ProcessingDetails) GetStage() string`

GetStage returns the Stage field if non-nil, zero value otherwise.

### GetStageOk

`func (o *ProcessingDetails) GetStageOk() (*string, bool)`

GetStageOk returns a tuple with the Stage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStage

`func (o *ProcessingDetails) SetStage(v string)`

SetStage sets Stage field to given value.

### HasStage

`func (o *ProcessingDetails) HasStage() bool`

HasStage returns a boolean if a field has been set.

### GetRetryCount

`func (o *ProcessingDetails) GetRetryCount() int32`

GetRetryCount returns the RetryCount field if non-nil, zero value otherwise.

### GetRetryCountOk

`func (o *ProcessingDetails) GetRetryCountOk() (*int32, bool)`

GetRetryCountOk returns a tuple with the RetryCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetryCount

`func (o *ProcessingDetails) SetRetryCount(v int32)`

SetRetryCount sets RetryCount field to given value.

### HasRetryCount

`func (o *ProcessingDetails) HasRetryCount() bool`

HasRetryCount returns a boolean if a field has been set.

### GetStackTrace

`func (o *ProcessingDetails) GetStackTrace() string`

GetStackTrace returns the StackTrace field if non-nil, zero value otherwise.

### GetStackTraceOk

`func (o *ProcessingDetails) GetStackTraceOk() (*string, bool)`

GetStackTraceOk returns a tuple with the StackTrace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStackTrace

`func (o *ProcessingDetails) SetStackTrace(v string)`

SetStackTrace sets StackTrace field to given value.

### HasStackTrace

`func (o *ProcessingDetails) HasStackTrace() bool`

HasStackTrace returns a boolean if a field has been set.

### GetMessage

`func (o *ProcessingDetails) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ProcessingDetails) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ProcessingDetails) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ProcessingDetails) HasMessage() bool`

HasMessage returns a boolean if a field has been set.


