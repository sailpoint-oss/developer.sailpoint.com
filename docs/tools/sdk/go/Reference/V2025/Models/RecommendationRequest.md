---
id: recommendation-request
title: RecommendationRequest
pagination_label: RecommendationRequest
sidebar_label: RecommendationRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RecommendationRequest', 'RecommendationRequest'] 
slug: /tools/sdk/go//models/recommendation-request
tags: ['SDK', 'Software Development Kit', 'RecommendationRequest', 'RecommendationRequest']
---

# RecommendationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | Pointer to **string** | The identity ID | [optional] 
**Item** | Pointer to [**AccessItemRef**](access-item-ref) |  | [optional] 

## Methods

### NewRecommendationRequest

`func NewRecommendationRequest() *RecommendationRequest`

NewRecommendationRequest instantiates a new RecommendationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecommendationRequestWithDefaults

`func NewRecommendationRequestWithDefaults() *RecommendationRequest`

NewRecommendationRequestWithDefaults instantiates a new RecommendationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *RecommendationRequest) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *RecommendationRequest) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *RecommendationRequest) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *RecommendationRequest) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetItem

`func (o *RecommendationRequest) GetItem() AccessItemRef`

GetItem returns the Item field if non-nil, zero value otherwise.

### GetItemOk

`func (o *RecommendationRequest) GetItemOk() (*AccessItemRef, bool)`

GetItemOk returns a tuple with the Item field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItem

`func (o *RecommendationRequest) SetItem(v AccessItemRef)`

SetItem sets Item field to given value.

### HasItem

`func (o *RecommendationRequest) HasItem() bool`

HasItem returns a boolean if a field has been set.


