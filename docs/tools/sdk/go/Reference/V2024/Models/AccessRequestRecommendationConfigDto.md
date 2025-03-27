---
id: v2024-access-request-recommendation-config-dto
title: AccessRequestRecommendationConfigDto
pagination_label: AccessRequestRecommendationConfigDto
sidebar_label: AccessRequestRecommendationConfigDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestRecommendationConfigDto', 'V2024AccessRequestRecommendationConfigDto'] 
slug: /tools/sdk/go/v2024/models/access-request-recommendation-config-dto
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationConfigDto', 'V2024AccessRequestRecommendationConfigDto']
---

# AccessRequestRecommendationConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ScoreThreshold** | **float32** | The value that internal calculations need to exceed for recommendations to be made. | 
**StartDateAttribute** | Pointer to **string** | Use to map an attribute name for determining identities&#39; start date. | [optional] 
**RestrictionAttribute** | Pointer to **string** | Use to only give recommendations based on this attribute. | [optional] 
**MoverAttribute** | Pointer to **string** | Use to map an attribute name for determining whether identities are movers. | [optional] 
**JoinerAttribute** | Pointer to **string** | Use to map an attribute name for determining whether identities are joiners. | [optional] 
**UseRestrictionAttribute** | Pointer to **bool** | Use only the attribute named in restrictionAttribute to make recommendations. | [optional] [default to false]

## Methods

### NewAccessRequestRecommendationConfigDto

`func NewAccessRequestRecommendationConfigDto(scoreThreshold float32, ) *AccessRequestRecommendationConfigDto`

NewAccessRequestRecommendationConfigDto instantiates a new AccessRequestRecommendationConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestRecommendationConfigDtoWithDefaults

`func NewAccessRequestRecommendationConfigDtoWithDefaults() *AccessRequestRecommendationConfigDto`

NewAccessRequestRecommendationConfigDtoWithDefaults instantiates a new AccessRequestRecommendationConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScoreThreshold

`func (o *AccessRequestRecommendationConfigDto) GetScoreThreshold() float32`

GetScoreThreshold returns the ScoreThreshold field if non-nil, zero value otherwise.

### GetScoreThresholdOk

`func (o *AccessRequestRecommendationConfigDto) GetScoreThresholdOk() (*float32, bool)`

GetScoreThresholdOk returns a tuple with the ScoreThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScoreThreshold

`func (o *AccessRequestRecommendationConfigDto) SetScoreThreshold(v float32)`

SetScoreThreshold sets ScoreThreshold field to given value.


### GetStartDateAttribute

`func (o *AccessRequestRecommendationConfigDto) GetStartDateAttribute() string`

GetStartDateAttribute returns the StartDateAttribute field if non-nil, zero value otherwise.

### GetStartDateAttributeOk

`func (o *AccessRequestRecommendationConfigDto) GetStartDateAttributeOk() (*string, bool)`

GetStartDateAttributeOk returns a tuple with the StartDateAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDateAttribute

`func (o *AccessRequestRecommendationConfigDto) SetStartDateAttribute(v string)`

SetStartDateAttribute sets StartDateAttribute field to given value.

### HasStartDateAttribute

`func (o *AccessRequestRecommendationConfigDto) HasStartDateAttribute() bool`

HasStartDateAttribute returns a boolean if a field has been set.

### GetRestrictionAttribute

`func (o *AccessRequestRecommendationConfigDto) GetRestrictionAttribute() string`

GetRestrictionAttribute returns the RestrictionAttribute field if non-nil, zero value otherwise.

### GetRestrictionAttributeOk

`func (o *AccessRequestRecommendationConfigDto) GetRestrictionAttributeOk() (*string, bool)`

GetRestrictionAttributeOk returns a tuple with the RestrictionAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictionAttribute

`func (o *AccessRequestRecommendationConfigDto) SetRestrictionAttribute(v string)`

SetRestrictionAttribute sets RestrictionAttribute field to given value.

### HasRestrictionAttribute

`func (o *AccessRequestRecommendationConfigDto) HasRestrictionAttribute() bool`

HasRestrictionAttribute returns a boolean if a field has been set.

### GetMoverAttribute

`func (o *AccessRequestRecommendationConfigDto) GetMoverAttribute() string`

GetMoverAttribute returns the MoverAttribute field if non-nil, zero value otherwise.

### GetMoverAttributeOk

`func (o *AccessRequestRecommendationConfigDto) GetMoverAttributeOk() (*string, bool)`

GetMoverAttributeOk returns a tuple with the MoverAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMoverAttribute

`func (o *AccessRequestRecommendationConfigDto) SetMoverAttribute(v string)`

SetMoverAttribute sets MoverAttribute field to given value.

### HasMoverAttribute

`func (o *AccessRequestRecommendationConfigDto) HasMoverAttribute() bool`

HasMoverAttribute returns a boolean if a field has been set.

### GetJoinerAttribute

`func (o *AccessRequestRecommendationConfigDto) GetJoinerAttribute() string`

GetJoinerAttribute returns the JoinerAttribute field if non-nil, zero value otherwise.

### GetJoinerAttributeOk

`func (o *AccessRequestRecommendationConfigDto) GetJoinerAttributeOk() (*string, bool)`

GetJoinerAttributeOk returns a tuple with the JoinerAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJoinerAttribute

`func (o *AccessRequestRecommendationConfigDto) SetJoinerAttribute(v string)`

SetJoinerAttribute sets JoinerAttribute field to given value.

### HasJoinerAttribute

`func (o *AccessRequestRecommendationConfigDto) HasJoinerAttribute() bool`

HasJoinerAttribute returns a boolean if a field has been set.

### GetUseRestrictionAttribute

`func (o *AccessRequestRecommendationConfigDto) GetUseRestrictionAttribute() bool`

GetUseRestrictionAttribute returns the UseRestrictionAttribute field if non-nil, zero value otherwise.

### GetUseRestrictionAttributeOk

`func (o *AccessRequestRecommendationConfigDto) GetUseRestrictionAttributeOk() (*bool, bool)`

GetUseRestrictionAttributeOk returns a tuple with the UseRestrictionAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseRestrictionAttribute

`func (o *AccessRequestRecommendationConfigDto) SetUseRestrictionAttribute(v bool)`

SetUseRestrictionAttribute sets UseRestrictionAttribute field to given value.

### HasUseRestrictionAttribute

`func (o *AccessRequestRecommendationConfigDto) HasUseRestrictionAttribute() bool`

HasUseRestrictionAttribute returns a boolean if a field has been set.


