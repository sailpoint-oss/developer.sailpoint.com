---
id: v1-accessrequestrecommendationconfigdto
title: Accessrequestrecommendationconfigdto
pagination_label: Accessrequestrecommendationconfigdto
sidebar_label: Accessrequestrecommendationconfigdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequestrecommendationconfigdto', 'V1Accessrequestrecommendationconfigdto'] 
slug: /tools/sdk/go/iaiaccessrequestrecommendations/models/accessrequestrecommendationconfigdto
tags: ['SDK', 'Software Development Kit', 'Accessrequestrecommendationconfigdto', 'V1Accessrequestrecommendationconfigdto']
---

# Accessrequestrecommendationconfigdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ScoreThreshold** | **float32** | The value that internal calculations need to exceed for recommendations to be made. | 
**StartDateAttribute** | Pointer to **string** | Use to map an attribute name for determining identities' start date. | [optional] 
**RestrictionAttribute** | Pointer to **string** | Use to only give recommendations based on this attribute. | [optional] 
**MoverAttribute** | Pointer to **string** | Use to map an attribute name for determining whether identities are movers. | [optional] 
**JoinerAttribute** | Pointer to **string** | Use to map an attribute name for determining whether identities are joiners. | [optional] 
**UseRestrictionAttribute** | Pointer to **bool** | Use only the attribute named in restrictionAttribute to make recommendations. | [optional] [default to false]

## Methods

### NewAccessrequestrecommendationconfigdto

`func NewAccessrequestrecommendationconfigdto(scoreThreshold float32, ) *Accessrequestrecommendationconfigdto`

NewAccessrequestrecommendationconfigdto instantiates a new Accessrequestrecommendationconfigdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestrecommendationconfigdtoWithDefaults

`func NewAccessrequestrecommendationconfigdtoWithDefaults() *Accessrequestrecommendationconfigdto`

NewAccessrequestrecommendationconfigdtoWithDefaults instantiates a new Accessrequestrecommendationconfigdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScoreThreshold

`func (o *Accessrequestrecommendationconfigdto) GetScoreThreshold() float32`

GetScoreThreshold returns the ScoreThreshold field if non-nil, zero value otherwise.

### GetScoreThresholdOk

`func (o *Accessrequestrecommendationconfigdto) GetScoreThresholdOk() (*float32, bool)`

GetScoreThresholdOk returns a tuple with the ScoreThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScoreThreshold

`func (o *Accessrequestrecommendationconfigdto) SetScoreThreshold(v float32)`

SetScoreThreshold sets ScoreThreshold field to given value.


### GetStartDateAttribute

`func (o *Accessrequestrecommendationconfigdto) GetStartDateAttribute() string`

GetStartDateAttribute returns the StartDateAttribute field if non-nil, zero value otherwise.

### GetStartDateAttributeOk

`func (o *Accessrequestrecommendationconfigdto) GetStartDateAttributeOk() (*string, bool)`

GetStartDateAttributeOk returns a tuple with the StartDateAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDateAttribute

`func (o *Accessrequestrecommendationconfigdto) SetStartDateAttribute(v string)`

SetStartDateAttribute sets StartDateAttribute field to given value.

### HasStartDateAttribute

`func (o *Accessrequestrecommendationconfigdto) HasStartDateAttribute() bool`

HasStartDateAttribute returns a boolean if a field has been set.

### GetRestrictionAttribute

`func (o *Accessrequestrecommendationconfigdto) GetRestrictionAttribute() string`

GetRestrictionAttribute returns the RestrictionAttribute field if non-nil, zero value otherwise.

### GetRestrictionAttributeOk

`func (o *Accessrequestrecommendationconfigdto) GetRestrictionAttributeOk() (*string, bool)`

GetRestrictionAttributeOk returns a tuple with the RestrictionAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictionAttribute

`func (o *Accessrequestrecommendationconfigdto) SetRestrictionAttribute(v string)`

SetRestrictionAttribute sets RestrictionAttribute field to given value.

### HasRestrictionAttribute

`func (o *Accessrequestrecommendationconfigdto) HasRestrictionAttribute() bool`

HasRestrictionAttribute returns a boolean if a field has been set.

### GetMoverAttribute

`func (o *Accessrequestrecommendationconfigdto) GetMoverAttribute() string`

GetMoverAttribute returns the MoverAttribute field if non-nil, zero value otherwise.

### GetMoverAttributeOk

`func (o *Accessrequestrecommendationconfigdto) GetMoverAttributeOk() (*string, bool)`

GetMoverAttributeOk returns a tuple with the MoverAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMoverAttribute

`func (o *Accessrequestrecommendationconfigdto) SetMoverAttribute(v string)`

SetMoverAttribute sets MoverAttribute field to given value.

### HasMoverAttribute

`func (o *Accessrequestrecommendationconfigdto) HasMoverAttribute() bool`

HasMoverAttribute returns a boolean if a field has been set.

### GetJoinerAttribute

`func (o *Accessrequestrecommendationconfigdto) GetJoinerAttribute() string`

GetJoinerAttribute returns the JoinerAttribute field if non-nil, zero value otherwise.

### GetJoinerAttributeOk

`func (o *Accessrequestrecommendationconfigdto) GetJoinerAttributeOk() (*string, bool)`

GetJoinerAttributeOk returns a tuple with the JoinerAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJoinerAttribute

`func (o *Accessrequestrecommendationconfigdto) SetJoinerAttribute(v string)`

SetJoinerAttribute sets JoinerAttribute field to given value.

### HasJoinerAttribute

`func (o *Accessrequestrecommendationconfigdto) HasJoinerAttribute() bool`

HasJoinerAttribute returns a boolean if a field has been set.

### GetUseRestrictionAttribute

`func (o *Accessrequestrecommendationconfigdto) GetUseRestrictionAttribute() bool`

GetUseRestrictionAttribute returns the UseRestrictionAttribute field if non-nil, zero value otherwise.

### GetUseRestrictionAttributeOk

`func (o *Accessrequestrecommendationconfigdto) GetUseRestrictionAttributeOk() (*bool, bool)`

GetUseRestrictionAttributeOk returns a tuple with the UseRestrictionAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseRestrictionAttribute

`func (o *Accessrequestrecommendationconfigdto) SetUseRestrictionAttribute(v bool)`

SetUseRestrictionAttribute sets UseRestrictionAttribute field to given value.

### HasUseRestrictionAttribute

`func (o *Accessrequestrecommendationconfigdto) HasUseRestrictionAttribute() bool`

HasUseRestrictionAttribute returns a boolean if a field has been set.


