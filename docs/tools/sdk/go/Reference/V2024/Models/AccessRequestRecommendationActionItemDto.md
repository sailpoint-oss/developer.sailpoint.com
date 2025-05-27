---
id: v2024-access-request-recommendation-action-item-dto
title: AccessRequestRecommendationActionItemDto
pagination_label: AccessRequestRecommendationActionItemDto
sidebar_label: AccessRequestRecommendationActionItemDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestRecommendationActionItemDto', 'V2024AccessRequestRecommendationActionItemDto'] 
slug: /tools/sdk/go/v2024/models/access-request-recommendation-action-item-dto
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationActionItemDto', 'V2024AccessRequestRecommendationActionItemDto']
---

# AccessRequestRecommendationActionItemDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **string** | The identity ID taking the action. | 
**Access** | [**AccessRequestRecommendationItem**](access-request-recommendation-item) |  | 

## Methods

### NewAccessRequestRecommendationActionItemDto

`func NewAccessRequestRecommendationActionItemDto(identityId string, access AccessRequestRecommendationItem, ) *AccessRequestRecommendationActionItemDto`

NewAccessRequestRecommendationActionItemDto instantiates a new AccessRequestRecommendationActionItemDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestRecommendationActionItemDtoWithDefaults

`func NewAccessRequestRecommendationActionItemDtoWithDefaults() *AccessRequestRecommendationActionItemDto`

NewAccessRequestRecommendationActionItemDtoWithDefaults instantiates a new AccessRequestRecommendationActionItemDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *AccessRequestRecommendationActionItemDto) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *AccessRequestRecommendationActionItemDto) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *AccessRequestRecommendationActionItemDto) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.


### GetAccess

`func (o *AccessRequestRecommendationActionItemDto) GetAccess() AccessRequestRecommendationItem`

GetAccess returns the Access field if non-nil, zero value otherwise.

### GetAccessOk

`func (o *AccessRequestRecommendationActionItemDto) GetAccessOk() (*AccessRequestRecommendationItem, bool)`

GetAccessOk returns a tuple with the Access field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccess

`func (o *AccessRequestRecommendationActionItemDto) SetAccess(v AccessRequestRecommendationItem)`

SetAccess sets Access field to given value.



