---
id: v2025-access-recommendation-message
title: AccessRecommendationMessage
pagination_label: AccessRecommendationMessage
sidebar_label: AccessRecommendationMessage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRecommendationMessage', 'V2025AccessRecommendationMessage'] 
slug: /tools/sdk/go/v2025/models/access-recommendation-message
tags: ['SDK', 'Software Development Kit', 'AccessRecommendationMessage', 'V2025AccessRecommendationMessage']
---

# AccessRecommendationMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Interpretation** | Pointer to **string** | Information about why the access item was recommended. | [optional] 

## Methods

### NewAccessRecommendationMessage

`func NewAccessRecommendationMessage() *AccessRecommendationMessage`

NewAccessRecommendationMessage instantiates a new AccessRecommendationMessage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRecommendationMessageWithDefaults

`func NewAccessRecommendationMessageWithDefaults() *AccessRecommendationMessage`

NewAccessRecommendationMessageWithDefaults instantiates a new AccessRecommendationMessage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInterpretation

`func (o *AccessRecommendationMessage) GetInterpretation() string`

GetInterpretation returns the Interpretation field if non-nil, zero value otherwise.

### GetInterpretationOk

`func (o *AccessRecommendationMessage) GetInterpretationOk() (*string, bool)`

GetInterpretationOk returns a tuple with the Interpretation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterpretation

`func (o *AccessRecommendationMessage) SetInterpretation(v string)`

SetInterpretation sets Interpretation field to given value.

### HasInterpretation

`func (o *AccessRecommendationMessage) HasInterpretation() bool`

HasInterpretation returns a boolean if a field has been set.


