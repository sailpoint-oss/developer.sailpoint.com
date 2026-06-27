---
id: v1-get-access-request-recommendations-v1401-response
title: GetAccessRequestRecommendationsV1401Response
pagination_label: GetAccessRequestRecommendationsV1401Response
sidebar_label: GetAccessRequestRecommendationsV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetAccessRequestRecommendationsV1401Response', 'V1GetAccessRequestRecommendationsV1401Response'] 
slug: /tools/sdk/go/iaiaccessrequestrecommendations/models/get-access-request-recommendations-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetAccessRequestRecommendationsV1401Response', 'V1GetAccessRequestRecommendationsV1401Response']
---

# GetAccessRequestRecommendationsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetAccessRequestRecommendationsV1401Response

`func NewGetAccessRequestRecommendationsV1401Response() *GetAccessRequestRecommendationsV1401Response`

NewGetAccessRequestRecommendationsV1401Response instantiates a new GetAccessRequestRecommendationsV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAccessRequestRecommendationsV1401ResponseWithDefaults

`func NewGetAccessRequestRecommendationsV1401ResponseWithDefaults() *GetAccessRequestRecommendationsV1401Response`

NewGetAccessRequestRecommendationsV1401ResponseWithDefaults instantiates a new GetAccessRequestRecommendationsV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetAccessRequestRecommendationsV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetAccessRequestRecommendationsV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetAccessRequestRecommendationsV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetAccessRequestRecommendationsV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetAccessRequestRecommendationsV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetAccessRequestRecommendationsV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

