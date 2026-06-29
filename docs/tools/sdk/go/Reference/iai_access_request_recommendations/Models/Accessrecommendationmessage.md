---
id: v1-accessrecommendationmessage
title: Accessrecommendationmessage
pagination_label: Accessrecommendationmessage
sidebar_label: Accessrecommendationmessage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrecommendationmessage', 'V1Accessrecommendationmessage'] 
slug: /tools/sdk/go/iaiaccessrequestrecommendations/models/accessrecommendationmessage
tags: ['SDK', 'Software Development Kit', 'Accessrecommendationmessage', 'V1Accessrecommendationmessage']
---

# Accessrecommendationmessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Interpretation** | Pointer to **string** | Information about why the access item was recommended. | [optional] 

## Methods

### NewAccessrecommendationmessage

`func NewAccessrecommendationmessage() *Accessrecommendationmessage`

NewAccessrecommendationmessage instantiates a new Accessrecommendationmessage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrecommendationmessageWithDefaults

`func NewAccessrecommendationmessageWithDefaults() *Accessrecommendationmessage`

NewAccessrecommendationmessageWithDefaults instantiates a new Accessrecommendationmessage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInterpretation

`func (o *Accessrecommendationmessage) GetInterpretation() string`

GetInterpretation returns the Interpretation field if non-nil, zero value otherwise.

### GetInterpretationOk

`func (o *Accessrecommendationmessage) GetInterpretationOk() (*string, bool)`

GetInterpretationOk returns a tuple with the Interpretation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterpretation

`func (o *Accessrecommendationmessage) SetInterpretation(v string)`

SetInterpretation sets Interpretation field to given value.

### HasInterpretation

`func (o *Accessrecommendationmessage) HasInterpretation() bool`

HasInterpretation returns a boolean if a field has been set.


