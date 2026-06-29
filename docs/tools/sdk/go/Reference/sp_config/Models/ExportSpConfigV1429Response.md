---
id: v1-export-sp-config-v1429-response
title: ExportSpConfigV1429Response
pagination_label: ExportSpConfigV1429Response
sidebar_label: ExportSpConfigV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ExportSpConfigV1429Response', 'V1ExportSpConfigV1429Response'] 
slug: /tools/sdk/go/spconfig/models/export-sp-config-v1429-response
tags: ['SDK', 'Software Development Kit', 'ExportSpConfigV1429Response', 'V1ExportSpConfigV1429Response']
---

# ExportSpConfigV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewExportSpConfigV1429Response

`func NewExportSpConfigV1429Response() *ExportSpConfigV1429Response`

NewExportSpConfigV1429Response instantiates a new ExportSpConfigV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportSpConfigV1429ResponseWithDefaults

`func NewExportSpConfigV1429ResponseWithDefaults() *ExportSpConfigV1429Response`

NewExportSpConfigV1429ResponseWithDefaults instantiates a new ExportSpConfigV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ExportSpConfigV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ExportSpConfigV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ExportSpConfigV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ExportSpConfigV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ExportSpConfigV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ExportSpConfigV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

