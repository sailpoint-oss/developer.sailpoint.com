---
id: beta-recommendation-request-dto
title: RecommendationRequestDto
pagination_label: RecommendationRequestDto
sidebar_label: RecommendationRequestDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RecommendationRequestDto', 'BetaRecommendationRequestDto'] 
slug: /tools/sdk/go/beta/models/recommendation-request-dto
tags: ['SDK', 'Software Development Kit', 'RecommendationRequestDto', 'BetaRecommendationRequestDto']
---

# RecommendationRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Requests** | Pointer to [**[]RecommendationRequest**](recommendation-request) |  | [optional] 
**ExcludeInterpretations** | Pointer to **bool** | Exclude interpretations in the response if \&quot;true\&quot;. Return interpretations in the response if this attribute is not specified. | [optional] [default to false]
**IncludeTranslationMessages** | Pointer to **bool** | When set to true, the calling system uses the translated messages for the specified language | [optional] [default to false]
**IncludeDebugInformation** | Pointer to **bool** | Returns the recommender calculations if set to true | [optional] [default to false]
**PrescribeMode** | Pointer to **bool** | When set to true, uses prescribedRulesRecommenderConfig to get identity attributes and peer group threshold instead of standard config. | [optional] [default to false]

## Methods

### NewRecommendationRequestDto

`func NewRecommendationRequestDto() *RecommendationRequestDto`

NewRecommendationRequestDto instantiates a new RecommendationRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecommendationRequestDtoWithDefaults

`func NewRecommendationRequestDtoWithDefaults() *RecommendationRequestDto`

NewRecommendationRequestDtoWithDefaults instantiates a new RecommendationRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequests

`func (o *RecommendationRequestDto) GetRequests() []RecommendationRequest`

GetRequests returns the Requests field if non-nil, zero value otherwise.

### GetRequestsOk

`func (o *RecommendationRequestDto) GetRequestsOk() (*[]RecommendationRequest, bool)`

GetRequestsOk returns a tuple with the Requests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequests

`func (o *RecommendationRequestDto) SetRequests(v []RecommendationRequest)`

SetRequests sets Requests field to given value.

### HasRequests

`func (o *RecommendationRequestDto) HasRequests() bool`

HasRequests returns a boolean if a field has been set.

### GetExcludeInterpretations

`func (o *RecommendationRequestDto) GetExcludeInterpretations() bool`

GetExcludeInterpretations returns the ExcludeInterpretations field if non-nil, zero value otherwise.

### GetExcludeInterpretationsOk

`func (o *RecommendationRequestDto) GetExcludeInterpretationsOk() (*bool, bool)`

GetExcludeInterpretationsOk returns a tuple with the ExcludeInterpretations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeInterpretations

`func (o *RecommendationRequestDto) SetExcludeInterpretations(v bool)`

SetExcludeInterpretations sets ExcludeInterpretations field to given value.

### HasExcludeInterpretations

`func (o *RecommendationRequestDto) HasExcludeInterpretations() bool`

HasExcludeInterpretations returns a boolean if a field has been set.

### GetIncludeTranslationMessages

`func (o *RecommendationRequestDto) GetIncludeTranslationMessages() bool`

GetIncludeTranslationMessages returns the IncludeTranslationMessages field if non-nil, zero value otherwise.

### GetIncludeTranslationMessagesOk

`func (o *RecommendationRequestDto) GetIncludeTranslationMessagesOk() (*bool, bool)`

GetIncludeTranslationMessagesOk returns a tuple with the IncludeTranslationMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeTranslationMessages

`func (o *RecommendationRequestDto) SetIncludeTranslationMessages(v bool)`

SetIncludeTranslationMessages sets IncludeTranslationMessages field to given value.

### HasIncludeTranslationMessages

`func (o *RecommendationRequestDto) HasIncludeTranslationMessages() bool`

HasIncludeTranslationMessages returns a boolean if a field has been set.

### GetIncludeDebugInformation

`func (o *RecommendationRequestDto) GetIncludeDebugInformation() bool`

GetIncludeDebugInformation returns the IncludeDebugInformation field if non-nil, zero value otherwise.

### GetIncludeDebugInformationOk

`func (o *RecommendationRequestDto) GetIncludeDebugInformationOk() (*bool, bool)`

GetIncludeDebugInformationOk returns a tuple with the IncludeDebugInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeDebugInformation

`func (o *RecommendationRequestDto) SetIncludeDebugInformation(v bool)`

SetIncludeDebugInformation sets IncludeDebugInformation field to given value.

### HasIncludeDebugInformation

`func (o *RecommendationRequestDto) HasIncludeDebugInformation() bool`

HasIncludeDebugInformation returns a boolean if a field has been set.

### GetPrescribeMode

`func (o *RecommendationRequestDto) GetPrescribeMode() bool`

GetPrescribeMode returns the PrescribeMode field if non-nil, zero value otherwise.

### GetPrescribeModeOk

`func (o *RecommendationRequestDto) GetPrescribeModeOk() (*bool, bool)`

GetPrescribeModeOk returns a tuple with the PrescribeMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescribeMode

`func (o *RecommendationRequestDto) SetPrescribeMode(v bool)`

SetPrescribeMode sets PrescribeMode field to given value.

### HasPrescribeMode

`func (o *RecommendationRequestDto) HasPrescribeMode() bool`

HasPrescribeMode returns a boolean if a field has been set.


