---
id: v1-get-ssf-configuration-v1401-response
title: GetSSFConfigurationV1401Response
pagination_label: GetSSFConfigurationV1401Response
sidebar_label: GetSSFConfigurationV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetSSFConfigurationV1401Response', 'V1GetSSFConfigurationV1401Response'] 
slug: /tools/sdk/go/sharedsignalsframeworkssf/models/get-ssf-configuration-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetSSFConfigurationV1401Response', 'V1GetSSFConfigurationV1401Response']
---

# GetSSFConfigurationV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetSSFConfigurationV1401Response

`func NewGetSSFConfigurationV1401Response() *GetSSFConfigurationV1401Response`

NewGetSSFConfigurationV1401Response instantiates a new GetSSFConfigurationV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSSFConfigurationV1401ResponseWithDefaults

`func NewGetSSFConfigurationV1401ResponseWithDefaults() *GetSSFConfigurationV1401Response`

NewGetSSFConfigurationV1401ResponseWithDefaults instantiates a new GetSSFConfigurationV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetSSFConfigurationV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetSSFConfigurationV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetSSFConfigurationV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetSSFConfigurationV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetSSFConfigurationV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetSSFConfigurationV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

