---
id: v1-get-auto-write-settings-v1429-response
title: GetAutoWriteSettingsV1429Response
pagination_label: GetAutoWriteSettingsV1429Response
sidebar_label: GetAutoWriteSettingsV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetAutoWriteSettingsV1429Response', 'V1GetAutoWriteSettingsV1429Response'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/get-auto-write-settings-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetAutoWriteSettingsV1429Response', 'V1GetAutoWriteSettingsV1429Response']
---

# GetAutoWriteSettingsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetAutoWriteSettingsV1429Response

`func NewGetAutoWriteSettingsV1429Response() *GetAutoWriteSettingsV1429Response`

NewGetAutoWriteSettingsV1429Response instantiates a new GetAutoWriteSettingsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAutoWriteSettingsV1429ResponseWithDefaults

`func NewGetAutoWriteSettingsV1429ResponseWithDefaults() *GetAutoWriteSettingsV1429Response`

NewGetAutoWriteSettingsV1429ResponseWithDefaults instantiates a new GetAutoWriteSettingsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetAutoWriteSettingsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetAutoWriteSettingsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetAutoWriteSettingsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetAutoWriteSettingsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetAutoWriteSettingsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetAutoWriteSettingsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

