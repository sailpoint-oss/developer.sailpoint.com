---
id: beta-error
title: Error
pagination_label: Error
sidebar_label: Error
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Error', 'BetaError'] 
slug: /tools/sdk/go/beta/models/error
tags: ['SDK', 'Software Development Kit', 'Error', 'BetaError']
---

# Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | Pointer to **string** | DetailCode is the text of the status code returned | [optional] 
**Messages** | Pointer to [**[]ErrorMessage**](error-message) |  | [optional] 
**TrackingId** | Pointer to **string** | TrackingID is the request tracking unique identifier | [optional] 

## Methods

### NewError

`func NewError() *Error`

NewError instantiates a new Error object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewErrorWithDefaults

`func NewErrorWithDefaults() *Error`

NewErrorWithDefaults instantiates a new Error object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetailCode

`func (o *Error) GetDetailCode() string`

GetDetailCode returns the DetailCode field if non-nil, zero value otherwise.

### GetDetailCodeOk

`func (o *Error) GetDetailCodeOk() (*string, bool)`

GetDetailCodeOk returns a tuple with the DetailCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailCode

`func (o *Error) SetDetailCode(v string)`

SetDetailCode sets DetailCode field to given value.

### HasDetailCode

`func (o *Error) HasDetailCode() bool`

HasDetailCode returns a boolean if a field has been set.

### GetMessages

`func (o *Error) GetMessages() []ErrorMessage`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *Error) GetMessagesOk() (*[]ErrorMessage, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *Error) SetMessages(v []ErrorMessage)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *Error) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetTrackingId

`func (o *Error) GetTrackingId() string`

GetTrackingId returns the TrackingId field if non-nil, zero value otherwise.

### GetTrackingIdOk

`func (o *Error) GetTrackingIdOk() (*string, bool)`

GetTrackingIdOk returns a tuple with the TrackingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingId

`func (o *Error) SetTrackingId(v string)`

SetTrackingId sets TrackingId field to given value.

### HasTrackingId

`func (o *Error) HasTrackingId() bool`

HasTrackingId returns a boolean if a field has been set.


