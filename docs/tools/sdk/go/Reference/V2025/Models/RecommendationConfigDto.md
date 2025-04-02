---
id: recommendation-config-dto
title: RecommendationConfigDto
pagination_label: RecommendationConfigDto
sidebar_label: RecommendationConfigDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RecommendationConfigDto', 'RecommendationConfigDto'] 
slug: /tools/sdk/go//models/recommendation-config-dto
tags: ['SDK', 'Software Development Kit', 'RecommendationConfigDto', 'RecommendationConfigDto']
---

# RecommendationConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RecommenderFeatures** | Pointer to **[]string** | List of identity attributes to use for calculating certification recommendations | [optional] 
**PeerGroupPercentageThreshold** | Pointer to **float32** | The percent value that the recommendation calculation must surpass to produce a YES recommendation | [optional] 
**RunAutoSelectOnce** | Pointer to **bool** | If true, rulesRecommenderConfig will be refreshed with new programatically selected attribute and threshold values on the next pipeline run | [optional] [default to false]
**OnlyTuneThreshold** | Pointer to **bool** | If true, rulesRecommenderConfig will be refreshed with new programatically selected threshold values on the next pipeline run | [optional] [default to false]

## Methods

### NewRecommendationConfigDto

`func NewRecommendationConfigDto() *RecommendationConfigDto`

NewRecommendationConfigDto instantiates a new RecommendationConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecommendationConfigDtoWithDefaults

`func NewRecommendationConfigDtoWithDefaults() *RecommendationConfigDto`

NewRecommendationConfigDtoWithDefaults instantiates a new RecommendationConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRecommenderFeatures

`func (o *RecommendationConfigDto) GetRecommenderFeatures() []string`

GetRecommenderFeatures returns the RecommenderFeatures field if non-nil, zero value otherwise.

### GetRecommenderFeaturesOk

`func (o *RecommendationConfigDto) GetRecommenderFeaturesOk() (*[]string, bool)`

GetRecommenderFeaturesOk returns a tuple with the RecommenderFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommenderFeatures

`func (o *RecommendationConfigDto) SetRecommenderFeatures(v []string)`

SetRecommenderFeatures sets RecommenderFeatures field to given value.

### HasRecommenderFeatures

`func (o *RecommendationConfigDto) HasRecommenderFeatures() bool`

HasRecommenderFeatures returns a boolean if a field has been set.

### GetPeerGroupPercentageThreshold

`func (o *RecommendationConfigDto) GetPeerGroupPercentageThreshold() float32`

GetPeerGroupPercentageThreshold returns the PeerGroupPercentageThreshold field if non-nil, zero value otherwise.

### GetPeerGroupPercentageThresholdOk

`func (o *RecommendationConfigDto) GetPeerGroupPercentageThresholdOk() (*float32, bool)`

GetPeerGroupPercentageThresholdOk returns a tuple with the PeerGroupPercentageThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeerGroupPercentageThreshold

`func (o *RecommendationConfigDto) SetPeerGroupPercentageThreshold(v float32)`

SetPeerGroupPercentageThreshold sets PeerGroupPercentageThreshold field to given value.

### HasPeerGroupPercentageThreshold

`func (o *RecommendationConfigDto) HasPeerGroupPercentageThreshold() bool`

HasPeerGroupPercentageThreshold returns a boolean if a field has been set.

### GetRunAutoSelectOnce

`func (o *RecommendationConfigDto) GetRunAutoSelectOnce() bool`

GetRunAutoSelectOnce returns the RunAutoSelectOnce field if non-nil, zero value otherwise.

### GetRunAutoSelectOnceOk

`func (o *RecommendationConfigDto) GetRunAutoSelectOnceOk() (*bool, bool)`

GetRunAutoSelectOnceOk returns a tuple with the RunAutoSelectOnce field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRunAutoSelectOnce

`func (o *RecommendationConfigDto) SetRunAutoSelectOnce(v bool)`

SetRunAutoSelectOnce sets RunAutoSelectOnce field to given value.

### HasRunAutoSelectOnce

`func (o *RecommendationConfigDto) HasRunAutoSelectOnce() bool`

HasRunAutoSelectOnce returns a boolean if a field has been set.

### GetOnlyTuneThreshold

`func (o *RecommendationConfigDto) GetOnlyTuneThreshold() bool`

GetOnlyTuneThreshold returns the OnlyTuneThreshold field if non-nil, zero value otherwise.

### GetOnlyTuneThresholdOk

`func (o *RecommendationConfigDto) GetOnlyTuneThresholdOk() (*bool, bool)`

GetOnlyTuneThresholdOk returns a tuple with the OnlyTuneThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnlyTuneThreshold

`func (o *RecommendationConfigDto) SetOnlyTuneThreshold(v bool)`

SetOnlyTuneThreshold sets OnlyTuneThreshold field to given value.

### HasOnlyTuneThreshold

`func (o *RecommendationConfigDto) HasOnlyTuneThreshold() bool`

HasOnlyTuneThreshold returns a boolean if a field has been set.


