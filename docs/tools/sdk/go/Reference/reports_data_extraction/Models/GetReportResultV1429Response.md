---
id: v1-get-report-result-v1429-response
title: GetReportResultV1429Response
pagination_label: GetReportResultV1429Response
sidebar_label: GetReportResultV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetReportResultV1429Response', 'V1GetReportResultV1429Response'] 
slug: /tools/sdk/go/reportsdataextraction/models/get-report-result-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetReportResultV1429Response', 'V1GetReportResultV1429Response']
---

# GetReportResultV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetReportResultV1429Response

`func NewGetReportResultV1429Response() *GetReportResultV1429Response`

NewGetReportResultV1429Response instantiates a new GetReportResultV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetReportResultV1429ResponseWithDefaults

`func NewGetReportResultV1429ResponseWithDefaults() *GetReportResultV1429Response`

NewGetReportResultV1429ResponseWithDefaults instantiates a new GetReportResultV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetReportResultV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetReportResultV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetReportResultV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetReportResultV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetReportResultV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetReportResultV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

