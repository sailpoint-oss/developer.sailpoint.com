---
id: v1-get-access-request-recommendations-v1429-response
title: GetAccessRequestRecommendationsV1429Response
pagination_label: GetAccessRequestRecommendationsV1429Response
sidebar_label: GetAccessRequestRecommendationsV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetAccessRequestRecommendationsV1429Response', 'V1GetAccessRequestRecommendationsV1429Response'] 
slug: /tools/sdk/go/iaiaccessrequestrecommendations/models/get-access-request-recommendations-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetAccessRequestRecommendationsV1429Response', 'V1GetAccessRequestRecommendationsV1429Response']
---

# GetAccessRequestRecommendationsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetAccessRequestRecommendationsV1429Response

`func NewGetAccessRequestRecommendationsV1429Response() *GetAccessRequestRecommendationsV1429Response`

NewGetAccessRequestRecommendationsV1429Response instantiates a new GetAccessRequestRecommendationsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAccessRequestRecommendationsV1429ResponseWithDefaults

`func NewGetAccessRequestRecommendationsV1429ResponseWithDefaults() *GetAccessRequestRecommendationsV1429Response`

NewGetAccessRequestRecommendationsV1429ResponseWithDefaults instantiates a new GetAccessRequestRecommendationsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetAccessRequestRecommendationsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetAccessRequestRecommendationsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetAccessRequestRecommendationsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetAccessRequestRecommendationsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetAccessRequestRecommendationsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetAccessRequestRecommendationsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

