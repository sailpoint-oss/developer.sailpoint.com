---
id: v2026-error-body
title: ErrorBody
pagination_label: ErrorBody
sidebar_label: ErrorBody
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ErrorBody', 'V2026ErrorBody'] 
slug: /tools/sdk/go/v2026/models/error-body
tags: ['SDK', 'Software Development Kit', 'ErrorBody', 'V2026ErrorBody']
---

# ErrorBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | Pointer to **string** | Machine-readable error code returned by the Intelligence Package service. | [optional] 
**Message** | Pointer to **string** | Human-readable explanation of the error suitable for client logging. | [optional] 

## Methods

### NewErrorBody

`func NewErrorBody() *ErrorBody`

NewErrorBody instantiates a new ErrorBody object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewErrorBodyWithDefaults

`func NewErrorBodyWithDefaults() *ErrorBody`

NewErrorBodyWithDefaults instantiates a new ErrorBody object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetailCode

`func (o *ErrorBody) GetDetailCode() string`

GetDetailCode returns the DetailCode field if non-nil, zero value otherwise.

### GetDetailCodeOk

`func (o *ErrorBody) GetDetailCodeOk() (*string, bool)`

GetDetailCodeOk returns a tuple with the DetailCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailCode

`func (o *ErrorBody) SetDetailCode(v string)`

SetDetailCode sets DetailCode field to given value.

### HasDetailCode

`func (o *ErrorBody) HasDetailCode() bool`

HasDetailCode returns a boolean if a field has been set.

### GetMessage

`func (o *ErrorBody) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ErrorBody) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ErrorBody) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ErrorBody) HasMessage() bool`

HasMessage returns a boolean if a field has been set.


