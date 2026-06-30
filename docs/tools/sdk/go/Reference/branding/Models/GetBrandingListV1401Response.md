---
id: v1-get-branding-list-v1401-response
title: GetBrandingListV1401Response
pagination_label: GetBrandingListV1401Response
sidebar_label: GetBrandingListV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetBrandingListV1401Response', 'V1GetBrandingListV1401Response'] 
slug: /tools/sdk/go/branding/models/get-branding-list-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetBrandingListV1401Response', 'V1GetBrandingListV1401Response']
---

# GetBrandingListV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetBrandingListV1401Response

`func NewGetBrandingListV1401Response() *GetBrandingListV1401Response`

NewGetBrandingListV1401Response instantiates a new GetBrandingListV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetBrandingListV1401ResponseWithDefaults

`func NewGetBrandingListV1401ResponseWithDefaults() *GetBrandingListV1401Response`

NewGetBrandingListV1401ResponseWithDefaults instantiates a new GetBrandingListV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetBrandingListV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetBrandingListV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetBrandingListV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetBrandingListV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetBrandingListV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetBrandingListV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

