---
id: beta-recommendation-response-dto
title: RecommendationResponseDto
pagination_label: RecommendationResponseDto
sidebar_label: RecommendationResponseDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RecommendationResponseDto', 'BetaRecommendationResponseDto'] 
slug: /tools/sdk/go/beta/models/recommendation-response-dto
tags: ['SDK', 'Software Development Kit', 'RecommendationResponseDto', 'BetaRecommendationResponseDto']
---

# RecommendationResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Response** | Pointer to [**[]RecommendationResponse**](recommendation-response) |  | [optional] 

## Methods

### NewRecommendationResponseDto

`func NewRecommendationResponseDto() *RecommendationResponseDto`

NewRecommendationResponseDto instantiates a new RecommendationResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecommendationResponseDtoWithDefaults

`func NewRecommendationResponseDtoWithDefaults() *RecommendationResponseDto`

NewRecommendationResponseDtoWithDefaults instantiates a new RecommendationResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResponse

`func (o *RecommendationResponseDto) GetResponse() []RecommendationResponse`

GetResponse returns the Response field if non-nil, zero value otherwise.

### GetResponseOk

`func (o *RecommendationResponseDto) GetResponseOk() (*[]RecommendationResponse, bool)`

GetResponseOk returns a tuple with the Response field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponse

`func (o *RecommendationResponseDto) SetResponse(v []RecommendationResponse)`

SetResponse sets Response field to given value.

### HasResponse

`func (o *RecommendationResponseDto) HasResponse() bool`

HasResponse returns a boolean if a field has been set.


