---
id: v1-get-auto-write-settings-v1401-response
title: GetAutoWriteSettingsV1401Response
pagination_label: GetAutoWriteSettingsV1401Response
sidebar_label: GetAutoWriteSettingsV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetAutoWriteSettingsV1401Response', 'V1GetAutoWriteSettingsV1401Response'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/get-auto-write-settings-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetAutoWriteSettingsV1401Response', 'V1GetAutoWriteSettingsV1401Response']
---

# GetAutoWriteSettingsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetAutoWriteSettingsV1401Response

`func NewGetAutoWriteSettingsV1401Response() *GetAutoWriteSettingsV1401Response`

NewGetAutoWriteSettingsV1401Response instantiates a new GetAutoWriteSettingsV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAutoWriteSettingsV1401ResponseWithDefaults

`func NewGetAutoWriteSettingsV1401ResponseWithDefaults() *GetAutoWriteSettingsV1401Response`

NewGetAutoWriteSettingsV1401ResponseWithDefaults instantiates a new GetAutoWriteSettingsV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetAutoWriteSettingsV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetAutoWriteSettingsV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetAutoWriteSettingsV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetAutoWriteSettingsV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetAutoWriteSettingsV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetAutoWriteSettingsV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

