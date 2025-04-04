---
id: v2025-recommender-calculations
title: RecommenderCalculations
pagination_label: RecommenderCalculations
sidebar_label: RecommenderCalculations
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RecommenderCalculations', 'V2025RecommenderCalculations'] 
slug: /tools/sdk/go/v2025/models/recommender-calculations
tags: ['SDK', 'Software Development Kit', 'RecommenderCalculations', 'V2025RecommenderCalculations']
---

# RecommenderCalculations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | Pointer to **string** | The ID of the identity | [optional] 
**EntitlementId** | Pointer to **string** | The entitlement ID | [optional] 
**Recommendation** | Pointer to **string** | The actual recommendation | [optional] 
**OverallWeightedScore** | Pointer to **float32** | The overall weighted score | [optional] 
**FeatureWeightedScores** | Pointer to **map[string]float32** | The weighted score of each individual feature | [optional] 
**Threshold** | Pointer to **float32** | The configured value against which the overallWeightedScore is compared | [optional] 
**IdentityAttributes** | Pointer to [**map[string]RecommenderCalculationsIdentityAttributesValue**](recommender-calculations-identity-attributes-value) | The values for your configured features | [optional] 
**FeatureValues** | Pointer to [**FeatureValueDto**](feature-value-dto) |  | [optional] 

## Methods

### NewRecommenderCalculations

`func NewRecommenderCalculations() *RecommenderCalculations`

NewRecommenderCalculations instantiates a new RecommenderCalculations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecommenderCalculationsWithDefaults

`func NewRecommenderCalculationsWithDefaults() *RecommenderCalculations`

NewRecommenderCalculationsWithDefaults instantiates a new RecommenderCalculations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *RecommenderCalculations) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *RecommenderCalculations) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *RecommenderCalculations) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *RecommenderCalculations) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetEntitlementId

`func (o *RecommenderCalculations) GetEntitlementId() string`

GetEntitlementId returns the EntitlementId field if non-nil, zero value otherwise.

### GetEntitlementIdOk

`func (o *RecommenderCalculations) GetEntitlementIdOk() (*string, bool)`

GetEntitlementIdOk returns a tuple with the EntitlementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementId

`func (o *RecommenderCalculations) SetEntitlementId(v string)`

SetEntitlementId sets EntitlementId field to given value.

### HasEntitlementId

`func (o *RecommenderCalculations) HasEntitlementId() bool`

HasEntitlementId returns a boolean if a field has been set.

### GetRecommendation

`func (o *RecommenderCalculations) GetRecommendation() string`

GetRecommendation returns the Recommendation field if non-nil, zero value otherwise.

### GetRecommendationOk

`func (o *RecommenderCalculations) GetRecommendationOk() (*string, bool)`

GetRecommendationOk returns a tuple with the Recommendation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendation

`func (o *RecommenderCalculations) SetRecommendation(v string)`

SetRecommendation sets Recommendation field to given value.

### HasRecommendation

`func (o *RecommenderCalculations) HasRecommendation() bool`

HasRecommendation returns a boolean if a field has been set.

### GetOverallWeightedScore

`func (o *RecommenderCalculations) GetOverallWeightedScore() float32`

GetOverallWeightedScore returns the OverallWeightedScore field if non-nil, zero value otherwise.

### GetOverallWeightedScoreOk

`func (o *RecommenderCalculations) GetOverallWeightedScoreOk() (*float32, bool)`

GetOverallWeightedScoreOk returns a tuple with the OverallWeightedScore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverallWeightedScore

`func (o *RecommenderCalculations) SetOverallWeightedScore(v float32)`

SetOverallWeightedScore sets OverallWeightedScore field to given value.

### HasOverallWeightedScore

`func (o *RecommenderCalculations) HasOverallWeightedScore() bool`

HasOverallWeightedScore returns a boolean if a field has been set.

### GetFeatureWeightedScores

`func (o *RecommenderCalculations) GetFeatureWeightedScores() map[string]float32`

GetFeatureWeightedScores returns the FeatureWeightedScores field if non-nil, zero value otherwise.

### GetFeatureWeightedScoresOk

`func (o *RecommenderCalculations) GetFeatureWeightedScoresOk() (*map[string]float32, bool)`

GetFeatureWeightedScoresOk returns a tuple with the FeatureWeightedScores field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatureWeightedScores

`func (o *RecommenderCalculations) SetFeatureWeightedScores(v map[string]float32)`

SetFeatureWeightedScores sets FeatureWeightedScores field to given value.

### HasFeatureWeightedScores

`func (o *RecommenderCalculations) HasFeatureWeightedScores() bool`

HasFeatureWeightedScores returns a boolean if a field has been set.

### GetThreshold

`func (o *RecommenderCalculations) GetThreshold() float32`

GetThreshold returns the Threshold field if non-nil, zero value otherwise.

### GetThresholdOk

`func (o *RecommenderCalculations) GetThresholdOk() (*float32, bool)`

GetThresholdOk returns a tuple with the Threshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThreshold

`func (o *RecommenderCalculations) SetThreshold(v float32)`

SetThreshold sets Threshold field to given value.

### HasThreshold

`func (o *RecommenderCalculations) HasThreshold() bool`

HasThreshold returns a boolean if a field has been set.

### GetIdentityAttributes

`func (o *RecommenderCalculations) GetIdentityAttributes() map[string]RecommenderCalculationsIdentityAttributesValue`

GetIdentityAttributes returns the IdentityAttributes field if non-nil, zero value otherwise.

### GetIdentityAttributesOk

`func (o *RecommenderCalculations) GetIdentityAttributesOk() (*map[string]RecommenderCalculationsIdentityAttributesValue, bool)`

GetIdentityAttributesOk returns a tuple with the IdentityAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttributes

`func (o *RecommenderCalculations) SetIdentityAttributes(v map[string]RecommenderCalculationsIdentityAttributesValue)`

SetIdentityAttributes sets IdentityAttributes field to given value.

### HasIdentityAttributes

`func (o *RecommenderCalculations) HasIdentityAttributes() bool`

HasIdentityAttributes returns a boolean if a field has been set.

### GetFeatureValues

`func (o *RecommenderCalculations) GetFeatureValues() FeatureValueDto`

GetFeatureValues returns the FeatureValues field if non-nil, zero value otherwise.

### GetFeatureValuesOk

`func (o *RecommenderCalculations) GetFeatureValuesOk() (*FeatureValueDto, bool)`

GetFeatureValuesOk returns a tuple with the FeatureValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatureValues

`func (o *RecommenderCalculations) SetFeatureValues(v FeatureValueDto)`

SetFeatureValues sets FeatureValues field to given value.

### HasFeatureValues

`func (o *RecommenderCalculations) HasFeatureValues() bool`

HasFeatureValues returns a boolean if a field has been set.


