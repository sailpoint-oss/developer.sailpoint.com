---
id: v1-get-report-result-v1401-response
title: GetReportResultV1401Response
pagination_label: GetReportResultV1401Response
sidebar_label: GetReportResultV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetReportResultV1401Response', 'V1GetReportResultV1401Response'] 
slug: /tools/sdk/go/reportsdataextraction/models/get-report-result-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetReportResultV1401Response', 'V1GetReportResultV1401Response']
---

# GetReportResultV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetReportResultV1401Response

`func NewGetReportResultV1401Response() *GetReportResultV1401Response`

NewGetReportResultV1401Response instantiates a new GetReportResultV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetReportResultV1401ResponseWithDefaults

`func NewGetReportResultV1401ResponseWithDefaults() *GetReportResultV1401Response`

NewGetReportResultV1401ResponseWithDefaults instantiates a new GetReportResultV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetReportResultV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetReportResultV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetReportResultV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetReportResultV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetReportResultV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetReportResultV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

