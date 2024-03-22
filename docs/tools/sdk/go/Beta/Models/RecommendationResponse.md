---
id: recommendation-response
title: RecommendationResponse
pagination_label: RecommendationResponse
sidebar_label: RecommendationResponse
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'RecommendationResponse'] 
slug: /tools/sdk/go/beta/models/recommendation-response
tags: ['SDK', 'Software Development Kit', 'RecommendationResponse']
---

# RecommendationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Request** |  Pointer to [**RecommendationRequest**](recommendation-request) |  | [optional] 
**Recommendation** |  Pointer to **string** | The recommendation - YES if the access is recommended, NO if not recommended, MAYBE if there is not enough information to make a recommendation, NOT_FOUND if the identity is not found in the system | [optional] 
**Interpretations** |  Pointer to **[]string** | The list of interpretations explaining the recommendation. The array is empty if includeInterpretations is false or not present in the request. e.g. - [ \&quot;Not approved in the last 6 months.\&quot; ]. Interpretations will be translated using the client&#39;s locale as found in the Accept-Language header. If a translation for the client&#39;s locale cannot be found, the US English translation will be returned. | [optional] 
**TranslationMessages** |  Pointer to [**[]TranslationMessage**](translation-message) | The list of translation messages, if they have been requested. | [optional] 
**RecommenderCalculations** |  Pointer to [**RecommenderCalculations**](recommender-calculations) |  | [optional] 

## Methods

### NewRecommendationResponse

`func NewRecommendationResponse() *RecommendationResponse`

NewRecommendationResponse instantiates a new RecommendationResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecommendationResponseWithDefaults

`func NewRecommendationResponseWithDefaults() *RecommendationResponse`

NewRecommendationResponseWithDefaults instantiates a new RecommendationResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequest

`func (o *RecommendationResponse) GetRequest() RecommendationRequest`

GetRequest returns the Request field if non-nil, zero value otherwise.

### GetRequestOk

`func (o *RecommendationResponse) GetRequestOk() (*RecommendationRequest, bool)`

GetRequestOk returns a tuple with the Request field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequest

`func (o *RecommendationResponse) SetRequest(v RecommendationRequest)`

SetRequest sets Request field to given value.

### HasRequest

`func (o *RecommendationResponse) HasRequest() bool`

HasRequest returns a boolean if a field has been set.

### GetRecommendation

`func (o *RecommendationResponse) GetRecommendation() string`

GetRecommendation returns the Recommendation field if non-nil, zero value otherwise.

### GetRecommendationOk

`func (o *RecommendationResponse) GetRecommendationOk() (*string, bool)`

GetRecommendationOk returns a tuple with the Recommendation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendation

`func (o *RecommendationResponse) SetRecommendation(v string)`

SetRecommendation sets Recommendation field to given value.

### HasRecommendation

`func (o *RecommendationResponse) HasRecommendation() bool`

HasRecommendation returns a boolean if a field has been set.

### GetInterpretations

`func (o *RecommendationResponse) GetInterpretations() []string`

GetInterpretations returns the Interpretations field if non-nil, zero value otherwise.

### GetInterpretationsOk

`func (o *RecommendationResponse) GetInterpretationsOk() (*[]string, bool)`

GetInterpretationsOk returns a tuple with the Interpretations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterpretations

`func (o *RecommendationResponse) SetInterpretations(v []string)`

SetInterpretations sets Interpretations field to given value.

### HasInterpretations

`func (o *RecommendationResponse) HasInterpretations() bool`

HasInterpretations returns a boolean if a field has been set.

### GetTranslationMessages

`func (o *RecommendationResponse) GetTranslationMessages() []TranslationMessage`

GetTranslationMessages returns the TranslationMessages field if non-nil, zero value otherwise.

### GetTranslationMessagesOk

`func (o *RecommendationResponse) GetTranslationMessagesOk() (*[]TranslationMessage, bool)`

GetTranslationMessagesOk returns a tuple with the TranslationMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslationMessages

`func (o *RecommendationResponse) SetTranslationMessages(v []TranslationMessage)`

SetTranslationMessages sets TranslationMessages field to given value.

### HasTranslationMessages

`func (o *RecommendationResponse) HasTranslationMessages() bool`

HasTranslationMessages returns a boolean if a field has been set.

### GetRecommenderCalculations

`func (o *RecommendationResponse) GetRecommenderCalculations() RecommenderCalculations`

GetRecommenderCalculations returns the RecommenderCalculations field if non-nil, zero value otherwise.

### GetRecommenderCalculationsOk

`func (o *RecommendationResponse) GetRecommenderCalculationsOk() (*RecommenderCalculations, bool)`

GetRecommenderCalculationsOk returns a tuple with the RecommenderCalculations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommenderCalculations

`func (o *RecommendationResponse) SetRecommenderCalculations(v RecommenderCalculations)`

SetRecommenderCalculations sets RecommenderCalculations field to given value.

### HasRecommenderCalculations

`func (o *RecommendationResponse) HasRecommenderCalculations() bool`

HasRecommenderCalculations returns a boolean if a field has been set.


[[Back to top]](#) 


