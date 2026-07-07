---
id: v1-reviewrecommendation
title: Reviewrecommendation
pagination_label: Reviewrecommendation
sidebar_label: Reviewrecommendation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Reviewrecommendation', 'V1Reviewrecommendation'] 
slug: /tools/sdk/go/certifications/models/reviewrecommendation
tags: ['SDK', 'Software Development Kit', 'Reviewrecommendation', 'V1Reviewrecommendation']
---

# Reviewrecommendation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Recommendation** | Pointer to **NullableString** | The recommendation from IAI at the time of the decision. This field will be null if no recommendation was made. | [optional] 
**Reasons** | Pointer to **[]string** | A list of reasons for the recommendation. | [optional] 
**Timestamp** | Pointer to **SailPointTime** | The time at which the recommendation was recorded. | [optional] 

## Methods

### NewReviewrecommendation

`func NewReviewrecommendation() *Reviewrecommendation`

NewReviewrecommendation instantiates a new Reviewrecommendation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewrecommendationWithDefaults

`func NewReviewrecommendationWithDefaults() *Reviewrecommendation`

NewReviewrecommendationWithDefaults instantiates a new Reviewrecommendation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRecommendation

`func (o *Reviewrecommendation) GetRecommendation() string`

GetRecommendation returns the Recommendation field if non-nil, zero value otherwise.

### GetRecommendationOk

`func (o *Reviewrecommendation) GetRecommendationOk() (*string, bool)`

GetRecommendationOk returns a tuple with the Recommendation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendation

`func (o *Reviewrecommendation) SetRecommendation(v string)`

SetRecommendation sets Recommendation field to given value.

### HasRecommendation

`func (o *Reviewrecommendation) HasRecommendation() bool`

HasRecommendation returns a boolean if a field has been set.

### SetRecommendationNil

`func (o *Reviewrecommendation) SetRecommendationNil(b bool)`

 SetRecommendationNil sets the value for Recommendation to be an explicit nil

### UnsetRecommendation
`func (o *Reviewrecommendation) UnsetRecommendation()`

UnsetRecommendation ensures that no value is present for Recommendation, not even an explicit nil
### GetReasons

`func (o *Reviewrecommendation) GetReasons() []string`

GetReasons returns the Reasons field if non-nil, zero value otherwise.

### GetReasonsOk

`func (o *Reviewrecommendation) GetReasonsOk() (*[]string, bool)`

GetReasonsOk returns a tuple with the Reasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReasons

`func (o *Reviewrecommendation) SetReasons(v []string)`

SetReasons sets Reasons field to given value.

### HasReasons

`func (o *Reviewrecommendation) HasReasons() bool`

HasReasons returns a boolean if a field has been set.

### GetTimestamp

`func (o *Reviewrecommendation) GetTimestamp() SailPointTime`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *Reviewrecommendation) GetTimestampOk() (*SailPointTime, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *Reviewrecommendation) SetTimestamp(v SailPointTime)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *Reviewrecommendation) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.


