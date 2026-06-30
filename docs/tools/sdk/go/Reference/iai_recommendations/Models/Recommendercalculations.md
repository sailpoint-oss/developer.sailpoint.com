---
id: v1-recommendercalculations
title: Recommendercalculations
pagination_label: Recommendercalculations
sidebar_label: Recommendercalculations
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Recommendercalculations', 'V1Recommendercalculations'] 
slug: /tools/sdk/go/iairecommendations/models/recommendercalculations
tags: ['SDK', 'Software Development Kit', 'Recommendercalculations', 'V1Recommendercalculations']
---

# Recommendercalculations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | Pointer to **string** | The ID of the identity | [optional] 
**EntitlementId** | Pointer to **string** | The entitlement ID | [optional] 
**Recommendation** | Pointer to **string** | The actual recommendation | [optional] 
**OverallWeightedScore** | Pointer to **float32** | The overall weighted score | [optional] 
**FeatureWeightedScores** | Pointer to **map[string]float32** | The weighted score of each individual feature | [optional] 
**Threshold** | Pointer to **float32** | The configured value against which the overallWeightedScore is compared | [optional] 
**IdentityAttributes** | Pointer to [**map[string]RecommendercalculationsIdentityAttributesValue**](recommendercalculations-identity-attributes-value) | The values for your configured features | [optional] 
**FeatureValues** | Pointer to [**Featurevaluedto**](featurevaluedto) |  | [optional] 

## Methods

### NewRecommendercalculations

`func NewRecommendercalculations() *Recommendercalculations`

NewRecommendercalculations instantiates a new Recommendercalculations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecommendercalculationsWithDefaults

`func NewRecommendercalculationsWithDefaults() *Recommendercalculations`

NewRecommendercalculationsWithDefaults instantiates a new Recommendercalculations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *Recommendercalculations) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Recommendercalculations) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Recommendercalculations) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Recommendercalculations) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetEntitlementId

`func (o *Recommendercalculations) GetEntitlementId() string`

GetEntitlementId returns the EntitlementId field if non-nil, zero value otherwise.

### GetEntitlementIdOk

`func (o *Recommendercalculations) GetEntitlementIdOk() (*string, bool)`

GetEntitlementIdOk returns a tuple with the EntitlementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementId

`func (o *Recommendercalculations) SetEntitlementId(v string)`

SetEntitlementId sets EntitlementId field to given value.

### HasEntitlementId

`func (o *Recommendercalculations) HasEntitlementId() bool`

HasEntitlementId returns a boolean if a field has been set.

### GetRecommendation

`func (o *Recommendercalculations) GetRecommendation() string`

GetRecommendation returns the Recommendation field if non-nil, zero value otherwise.

### GetRecommendationOk

`func (o *Recommendercalculations) GetRecommendationOk() (*string, bool)`

GetRecommendationOk returns a tuple with the Recommendation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendation

`func (o *Recommendercalculations) SetRecommendation(v string)`

SetRecommendation sets Recommendation field to given value.

### HasRecommendation

`func (o *Recommendercalculations) HasRecommendation() bool`

HasRecommendation returns a boolean if a field has been set.

### GetOverallWeightedScore

`func (o *Recommendercalculations) GetOverallWeightedScore() float32`

GetOverallWeightedScore returns the OverallWeightedScore field if non-nil, zero value otherwise.

### GetOverallWeightedScoreOk

`func (o *Recommendercalculations) GetOverallWeightedScoreOk() (*float32, bool)`

GetOverallWeightedScoreOk returns a tuple with the OverallWeightedScore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverallWeightedScore

`func (o *Recommendercalculations) SetOverallWeightedScore(v float32)`

SetOverallWeightedScore sets OverallWeightedScore field to given value.

### HasOverallWeightedScore

`func (o *Recommendercalculations) HasOverallWeightedScore() bool`

HasOverallWeightedScore returns a boolean if a field has been set.

### GetFeatureWeightedScores

`func (o *Recommendercalculations) GetFeatureWeightedScores() map[string]float32`

GetFeatureWeightedScores returns the FeatureWeightedScores field if non-nil, zero value otherwise.

### GetFeatureWeightedScoresOk

`func (o *Recommendercalculations) GetFeatureWeightedScoresOk() (*map[string]float32, bool)`

GetFeatureWeightedScoresOk returns a tuple with the FeatureWeightedScores field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatureWeightedScores

`func (o *Recommendercalculations) SetFeatureWeightedScores(v map[string]float32)`

SetFeatureWeightedScores sets FeatureWeightedScores field to given value.

### HasFeatureWeightedScores

`func (o *Recommendercalculations) HasFeatureWeightedScores() bool`

HasFeatureWeightedScores returns a boolean if a field has been set.

### GetThreshold

`func (o *Recommendercalculations) GetThreshold() float32`

GetThreshold returns the Threshold field if non-nil, zero value otherwise.

### GetThresholdOk

`func (o *Recommendercalculations) GetThresholdOk() (*float32, bool)`

GetThresholdOk returns a tuple with the Threshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThreshold

`func (o *Recommendercalculations) SetThreshold(v float32)`

SetThreshold sets Threshold field to given value.

### HasThreshold

`func (o *Recommendercalculations) HasThreshold() bool`

HasThreshold returns a boolean if a field has been set.

### GetIdentityAttributes

`func (o *Recommendercalculations) GetIdentityAttributes() map[string]RecommendercalculationsIdentityAttributesValue`

GetIdentityAttributes returns the IdentityAttributes field if non-nil, zero value otherwise.

### GetIdentityAttributesOk

`func (o *Recommendercalculations) GetIdentityAttributesOk() (*map[string]RecommendercalculationsIdentityAttributesValue, bool)`

GetIdentityAttributesOk returns a tuple with the IdentityAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttributes

`func (o *Recommendercalculations) SetIdentityAttributes(v map[string]RecommendercalculationsIdentityAttributesValue)`

SetIdentityAttributes sets IdentityAttributes field to given value.

### HasIdentityAttributes

`func (o *Recommendercalculations) HasIdentityAttributes() bool`

HasIdentityAttributes returns a boolean if a field has been set.

### GetFeatureValues

`func (o *Recommendercalculations) GetFeatureValues() Featurevaluedto`

GetFeatureValues returns the FeatureValues field if non-nil, zero value otherwise.

### GetFeatureValuesOk

`func (o *Recommendercalculations) GetFeatureValuesOk() (*Featurevaluedto, bool)`

GetFeatureValuesOk returns a tuple with the FeatureValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatureValues

`func (o *Recommendercalculations) SetFeatureValues(v Featurevaluedto)`

SetFeatureValues sets FeatureValues field to given value.

### HasFeatureValues

`func (o *Recommendercalculations) HasFeatureValues() bool`

HasFeatureValues returns a boolean if a field has been set.


