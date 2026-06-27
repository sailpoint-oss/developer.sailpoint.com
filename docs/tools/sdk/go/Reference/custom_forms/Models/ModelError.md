---
id: v1-model-error
title: ModelError
pagination_label: ModelError
sidebar_label: ModelError
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ModelError', 'V1ModelError'] 
slug: /tools/sdk/go/customforms/models/model-error
tags: ['SDK', 'Software Development Kit', 'ModelError', 'V1ModelError']
---

# ModelError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | Pointer to **string** | DetailCode is the text of the status code returned | [optional] 
**Messages** | Pointer to [**[]Errormessage**](errormessage) |  | [optional] 
**TrackingId** | Pointer to **string** | TrackingID is the request tracking unique identifier | [optional] 

## Methods

### NewModelError

`func NewModelError() *ModelError`

NewModelError instantiates a new ModelError object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelErrorWithDefaults

`func NewModelErrorWithDefaults() *ModelError`

NewModelErrorWithDefaults instantiates a new ModelError object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetailCode

`func (o *ModelError) GetDetailCode() string`

GetDetailCode returns the DetailCode field if non-nil, zero value otherwise.

### GetDetailCodeOk

`func (o *ModelError) GetDetailCodeOk() (*string, bool)`

GetDetailCodeOk returns a tuple with the DetailCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailCode

`func (o *ModelError) SetDetailCode(v string)`

SetDetailCode sets DetailCode field to given value.

### HasDetailCode

`func (o *ModelError) HasDetailCode() bool`

HasDetailCode returns a boolean if a field has been set.

### GetMessages

`func (o *ModelError) GetMessages() []Errormessage`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *ModelError) GetMessagesOk() (*[]Errormessage, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *ModelError) SetMessages(v []Errormessage)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *ModelError) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetTrackingId

`func (o *ModelError) GetTrackingId() string`

GetTrackingId returns the TrackingId field if non-nil, zero value otherwise.

### GetTrackingIdOk

`func (o *ModelError) GetTrackingIdOk() (*string, bool)`

GetTrackingIdOk returns a tuple with the TrackingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingId

`func (o *ModelError) SetTrackingId(v string)`

SetTrackingId sets TrackingId field to given value.

### HasTrackingId

`func (o *ModelError) HasTrackingId() bool`

HasTrackingId returns a boolean if a field has been set.


