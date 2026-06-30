---
id: v1-recommendationresponse
title: Recommendationresponse
pagination_label: Recommendationresponse
sidebar_label: Recommendationresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Recommendationresponse', 'V1Recommendationresponse'] 
slug: /tools/sdk/go/iairecommendations/models/recommendationresponse
tags: ['SDK', 'Software Development Kit', 'Recommendationresponse', 'V1Recommendationresponse']
---

# Recommendationresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Request** | Pointer to [**Recommendationrequest**](recommendationrequest) |  | [optional] 
**Recommendation** | Pointer to **string** | The recommendation - YES if the access is recommended, NO if not recommended, MAYBE if there is not enough information to make a recommendation, NOT_FOUND if the identity is not found in the system | [optional] 
**Interpretations** | Pointer to **[]string** | The list of interpretations explaining the recommendation. The array is empty if includeInterpretations is false or not present in the request. e.g. - [ \"Not approved in the last 6 months.\" ]. Interpretations will be translated using the client's locale as found in the Accept-Language header. If a translation for the client's locale cannot be found, the US English translation will be returned. | [optional] 
**TranslationMessages** | Pointer to [**[]Translationmessage**](translationmessage) | The list of translation messages, if they have been requested. | [optional] 
**RecommenderCalculations** | Pointer to [**Recommendercalculations**](recommendercalculations) |  | [optional] 

## Methods

### NewRecommendationresponse

`func NewRecommendationresponse() *Recommendationresponse`

NewRecommendationresponse instantiates a new Recommendationresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecommendationresponseWithDefaults

`func NewRecommendationresponseWithDefaults() *Recommendationresponse`

NewRecommendationresponseWithDefaults instantiates a new Recommendationresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequest

`func (o *Recommendationresponse) GetRequest() Recommendationrequest`

GetRequest returns the Request field if non-nil, zero value otherwise.

### GetRequestOk

`func (o *Recommendationresponse) GetRequestOk() (*Recommendationrequest, bool)`

GetRequestOk returns a tuple with the Request field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequest

`func (o *Recommendationresponse) SetRequest(v Recommendationrequest)`

SetRequest sets Request field to given value.

### HasRequest

`func (o *Recommendationresponse) HasRequest() bool`

HasRequest returns a boolean if a field has been set.

### GetRecommendation

`func (o *Recommendationresponse) GetRecommendation() string`

GetRecommendation returns the Recommendation field if non-nil, zero value otherwise.

### GetRecommendationOk

`func (o *Recommendationresponse) GetRecommendationOk() (*string, bool)`

GetRecommendationOk returns a tuple with the Recommendation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendation

`func (o *Recommendationresponse) SetRecommendation(v string)`

SetRecommendation sets Recommendation field to given value.

### HasRecommendation

`func (o *Recommendationresponse) HasRecommendation() bool`

HasRecommendation returns a boolean if a field has been set.

### GetInterpretations

`func (o *Recommendationresponse) GetInterpretations() []string`

GetInterpretations returns the Interpretations field if non-nil, zero value otherwise.

### GetInterpretationsOk

`func (o *Recommendationresponse) GetInterpretationsOk() (*[]string, bool)`

GetInterpretationsOk returns a tuple with the Interpretations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterpretations

`func (o *Recommendationresponse) SetInterpretations(v []string)`

SetInterpretations sets Interpretations field to given value.

### HasInterpretations

`func (o *Recommendationresponse) HasInterpretations() bool`

HasInterpretations returns a boolean if a field has been set.

### GetTranslationMessages

`func (o *Recommendationresponse) GetTranslationMessages() []Translationmessage`

GetTranslationMessages returns the TranslationMessages field if non-nil, zero value otherwise.

### GetTranslationMessagesOk

`func (o *Recommendationresponse) GetTranslationMessagesOk() (*[]Translationmessage, bool)`

GetTranslationMessagesOk returns a tuple with the TranslationMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslationMessages

`func (o *Recommendationresponse) SetTranslationMessages(v []Translationmessage)`

SetTranslationMessages sets TranslationMessages field to given value.

### HasTranslationMessages

`func (o *Recommendationresponse) HasTranslationMessages() bool`

HasTranslationMessages returns a boolean if a field has been set.

### GetRecommenderCalculations

`func (o *Recommendationresponse) GetRecommenderCalculations() Recommendercalculations`

GetRecommenderCalculations returns the RecommenderCalculations field if non-nil, zero value otherwise.

### GetRecommenderCalculationsOk

`func (o *Recommendationresponse) GetRecommenderCalculationsOk() (*Recommendercalculations, bool)`

GetRecommenderCalculationsOk returns a tuple with the RecommenderCalculations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommenderCalculations

`func (o *Recommendationresponse) SetRecommenderCalculations(v Recommendercalculations)`

SetRecommenderCalculations sets RecommenderCalculations field to given value.

### HasRecommenderCalculations

`func (o *Recommendationresponse) HasRecommenderCalculations() bool`

HasRecommenderCalculations returns a boolean if a field has been set.


