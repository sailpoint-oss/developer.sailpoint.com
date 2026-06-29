---
id: v1-recommendationrequestdto
title: Recommendationrequestdto
pagination_label: Recommendationrequestdto
sidebar_label: Recommendationrequestdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Recommendationrequestdto', 'V1Recommendationrequestdto'] 
slug: /tools/sdk/go/iairecommendations/models/recommendationrequestdto
tags: ['SDK', 'Software Development Kit', 'Recommendationrequestdto', 'V1Recommendationrequestdto']
---

# Recommendationrequestdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Requests** | Pointer to [**[]Recommendationrequest**](recommendationrequest) |  | [optional] 
**ExcludeInterpretations** | Pointer to **bool** | Exclude interpretations in the response if \"true\". Return interpretations in the response if this attribute is not specified. | [optional] [default to false]
**IncludeTranslationMessages** | Pointer to **bool** | When set to true, the calling system uses the translated messages for the specified language | [optional] [default to false]
**IncludeDebugInformation** | Pointer to **bool** | Returns the recommender calculations if set to true | [optional] [default to false]
**PrescribeMode** | Pointer to **bool** | When set to true, uses prescribedRulesRecommenderConfig to get identity attributes and peer group threshold instead of standard config. | [optional] [default to false]

## Methods

### NewRecommendationrequestdto

`func NewRecommendationrequestdto() *Recommendationrequestdto`

NewRecommendationrequestdto instantiates a new Recommendationrequestdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecommendationrequestdtoWithDefaults

`func NewRecommendationrequestdtoWithDefaults() *Recommendationrequestdto`

NewRecommendationrequestdtoWithDefaults instantiates a new Recommendationrequestdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequests

`func (o *Recommendationrequestdto) GetRequests() []Recommendationrequest`

GetRequests returns the Requests field if non-nil, zero value otherwise.

### GetRequestsOk

`func (o *Recommendationrequestdto) GetRequestsOk() (*[]Recommendationrequest, bool)`

GetRequestsOk returns a tuple with the Requests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequests

`func (o *Recommendationrequestdto) SetRequests(v []Recommendationrequest)`

SetRequests sets Requests field to given value.

### HasRequests

`func (o *Recommendationrequestdto) HasRequests() bool`

HasRequests returns a boolean if a field has been set.

### GetExcludeInterpretations

`func (o *Recommendationrequestdto) GetExcludeInterpretations() bool`

GetExcludeInterpretations returns the ExcludeInterpretations field if non-nil, zero value otherwise.

### GetExcludeInterpretationsOk

`func (o *Recommendationrequestdto) GetExcludeInterpretationsOk() (*bool, bool)`

GetExcludeInterpretationsOk returns a tuple with the ExcludeInterpretations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeInterpretations

`func (o *Recommendationrequestdto) SetExcludeInterpretations(v bool)`

SetExcludeInterpretations sets ExcludeInterpretations field to given value.

### HasExcludeInterpretations

`func (o *Recommendationrequestdto) HasExcludeInterpretations() bool`

HasExcludeInterpretations returns a boolean if a field has been set.

### GetIncludeTranslationMessages

`func (o *Recommendationrequestdto) GetIncludeTranslationMessages() bool`

GetIncludeTranslationMessages returns the IncludeTranslationMessages field if non-nil, zero value otherwise.

### GetIncludeTranslationMessagesOk

`func (o *Recommendationrequestdto) GetIncludeTranslationMessagesOk() (*bool, bool)`

GetIncludeTranslationMessagesOk returns a tuple with the IncludeTranslationMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeTranslationMessages

`func (o *Recommendationrequestdto) SetIncludeTranslationMessages(v bool)`

SetIncludeTranslationMessages sets IncludeTranslationMessages field to given value.

### HasIncludeTranslationMessages

`func (o *Recommendationrequestdto) HasIncludeTranslationMessages() bool`

HasIncludeTranslationMessages returns a boolean if a field has been set.

### GetIncludeDebugInformation

`func (o *Recommendationrequestdto) GetIncludeDebugInformation() bool`

GetIncludeDebugInformation returns the IncludeDebugInformation field if non-nil, zero value otherwise.

### GetIncludeDebugInformationOk

`func (o *Recommendationrequestdto) GetIncludeDebugInformationOk() (*bool, bool)`

GetIncludeDebugInformationOk returns a tuple with the IncludeDebugInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeDebugInformation

`func (o *Recommendationrequestdto) SetIncludeDebugInformation(v bool)`

SetIncludeDebugInformation sets IncludeDebugInformation field to given value.

### HasIncludeDebugInformation

`func (o *Recommendationrequestdto) HasIncludeDebugInformation() bool`

HasIncludeDebugInformation returns a boolean if a field has been set.

### GetPrescribeMode

`func (o *Recommendationrequestdto) GetPrescribeMode() bool`

GetPrescribeMode returns the PrescribeMode field if non-nil, zero value otherwise.

### GetPrescribeModeOk

`func (o *Recommendationrequestdto) GetPrescribeModeOk() (*bool, bool)`

GetPrescribeModeOk returns a tuple with the PrescribeMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescribeMode

`func (o *Recommendationrequestdto) SetPrescribeMode(v bool)`

SetPrescribeMode sets PrescribeMode field to given value.

### HasPrescribeMode

`func (o *Recommendationrequestdto) HasPrescribeMode() bool`

HasPrescribeMode returns a boolean if a field has been set.


