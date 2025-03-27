---
id: v2024-review-recommendation
title: ReviewRecommendation
pagination_label: ReviewRecommendation
sidebar_label: ReviewRecommendation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ReviewRecommendation', 'V2024ReviewRecommendation'] 
slug: /tools/sdk/go/v2024/models/review-recommendation
tags: ['SDK', 'Software Development Kit', 'ReviewRecommendation', 'V2024ReviewRecommendation']
---

# ReviewRecommendation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Recommendation** | Pointer to **NullableString** | The recommendation from IAI at the time of the decision. This field will be null if no recommendation was made. | [optional] 
**Reasons** | Pointer to **[]string** | A list of reasons for the recommendation. | [optional] 
**Timestamp** | Pointer to **time.Time** | The time at which the recommendation was recorded. | [optional] 

## Methods

### NewReviewRecommendation

`func NewReviewRecommendation() *ReviewRecommendation`

NewReviewRecommendation instantiates a new ReviewRecommendation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewRecommendationWithDefaults

`func NewReviewRecommendationWithDefaults() *ReviewRecommendation`

NewReviewRecommendationWithDefaults instantiates a new ReviewRecommendation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRecommendation

`func (o *ReviewRecommendation) GetRecommendation() string`

GetRecommendation returns the Recommendation field if non-nil, zero value otherwise.

### GetRecommendationOk

`func (o *ReviewRecommendation) GetRecommendationOk() (*string, bool)`

GetRecommendationOk returns a tuple with the Recommendation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendation

`func (o *ReviewRecommendation) SetRecommendation(v string)`

SetRecommendation sets Recommendation field to given value.

### HasRecommendation

`func (o *ReviewRecommendation) HasRecommendation() bool`

HasRecommendation returns a boolean if a field has been set.

### SetRecommendationNil

`func (o *ReviewRecommendation) SetRecommendationNil(b bool)`

 SetRecommendationNil sets the value for Recommendation to be an explicit nil

### UnsetRecommendation
`func (o *ReviewRecommendation) UnsetRecommendation()`

UnsetRecommendation ensures that no value is present for Recommendation, not even an explicit nil
### GetReasons

`func (o *ReviewRecommendation) GetReasons() []string`

GetReasons returns the Reasons field if non-nil, zero value otherwise.

### GetReasonsOk

`func (o *ReviewRecommendation) GetReasonsOk() (*[]string, bool)`

GetReasonsOk returns a tuple with the Reasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReasons

`func (o *ReviewRecommendation) SetReasons(v []string)`

SetReasons sets Reasons field to given value.

### HasReasons

`func (o *ReviewRecommendation) HasReasons() bool`

HasReasons returns a boolean if a field has been set.

### GetTimestamp

`func (o *ReviewRecommendation) GetTimestamp() time.Time`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *ReviewRecommendation) GetTimestampOk() (*time.Time, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *ReviewRecommendation) SetTimestamp(v time.Time)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *ReviewRecommendation) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.


