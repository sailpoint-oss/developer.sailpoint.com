---
id: access-request-recommendation-action-item-response-dto
title: AccessRequestRecommendationActionItemResponseDto
pagination_label: AccessRequestRecommendationActionItemResponseDto
sidebar_label: AccessRequestRecommendationActionItemResponseDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestRecommendationActionItemResponseDto', 'AccessRequestRecommendationActionItemResponseDto'] 
slug: /tools/sdk/go//models/access-request-recommendation-action-item-response-dto
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationActionItemResponseDto', 'AccessRequestRecommendationActionItemResponseDto']
---

# AccessRequestRecommendationActionItemResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | Pointer to **string** | The identity ID taking the action. | [optional] 
**Access** | Pointer to [**AccessRequestRecommendationItem**](access-request-recommendation-item) |  | [optional] 
**Timestamp** | Pointer to **SailPointTime** |  | [optional] 

## Methods

### NewAccessRequestRecommendationActionItemResponseDto

`func NewAccessRequestRecommendationActionItemResponseDto() *AccessRequestRecommendationActionItemResponseDto`

NewAccessRequestRecommendationActionItemResponseDto instantiates a new AccessRequestRecommendationActionItemResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestRecommendationActionItemResponseDtoWithDefaults

`func NewAccessRequestRecommendationActionItemResponseDtoWithDefaults() *AccessRequestRecommendationActionItemResponseDto`

NewAccessRequestRecommendationActionItemResponseDtoWithDefaults instantiates a new AccessRequestRecommendationActionItemResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *AccessRequestRecommendationActionItemResponseDto) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *AccessRequestRecommendationActionItemResponseDto) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *AccessRequestRecommendationActionItemResponseDto) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *AccessRequestRecommendationActionItemResponseDto) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetAccess

`func (o *AccessRequestRecommendationActionItemResponseDto) GetAccess() AccessRequestRecommendationItem`

GetAccess returns the Access field if non-nil, zero value otherwise.

### GetAccessOk

`func (o *AccessRequestRecommendationActionItemResponseDto) GetAccessOk() (*AccessRequestRecommendationItem, bool)`

GetAccessOk returns a tuple with the Access field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccess

`func (o *AccessRequestRecommendationActionItemResponseDto) SetAccess(v AccessRequestRecommendationItem)`

SetAccess sets Access field to given value.

### HasAccess

`func (o *AccessRequestRecommendationActionItemResponseDto) HasAccess() bool`

HasAccess returns a boolean if a field has been set.

### GetTimestamp

`func (o *AccessRequestRecommendationActionItemResponseDto) GetTimestamp() SailPointTime`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *AccessRequestRecommendationActionItemResponseDto) GetTimestampOk() (*SailPointTime, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *AccessRequestRecommendationActionItemResponseDto) SetTimestamp(v SailPointTime)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *AccessRequestRecommendationActionItemResponseDto) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.


