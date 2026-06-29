---
id: v1-get-recommendations-v1401-response
title: GetRecommendationsV1401Response
pagination_label: GetRecommendationsV1401Response
sidebar_label: GetRecommendationsV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetRecommendationsV1401Response', 'V1GetRecommendationsV1401Response'] 
slug: /tools/sdk/go/iairecommendations/models/get-recommendations-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetRecommendationsV1401Response', 'V1GetRecommendationsV1401Response']
---

# GetRecommendationsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetRecommendationsV1401Response

`func NewGetRecommendationsV1401Response() *GetRecommendationsV1401Response`

NewGetRecommendationsV1401Response instantiates a new GetRecommendationsV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetRecommendationsV1401ResponseWithDefaults

`func NewGetRecommendationsV1401ResponseWithDefaults() *GetRecommendationsV1401Response`

NewGetRecommendationsV1401ResponseWithDefaults instantiates a new GetRecommendationsV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetRecommendationsV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetRecommendationsV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetRecommendationsV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetRecommendationsV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetRecommendationsV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetRecommendationsV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

