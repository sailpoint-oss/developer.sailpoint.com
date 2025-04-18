---
id: kba-question
title: KbaQuestion
pagination_label: KbaQuestion
sidebar_label: KbaQuestion
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'KbaQuestion', 'KbaQuestion'] 
slug: /tools/sdk/go/v3/models/kba-question
tags: ['SDK', 'Software Development Kit', 'KbaQuestion', 'KbaQuestion']
---

# KbaQuestion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | KBA Question Id | 
**Text** | **string** | KBA Question description | 
**HasAnswer** | **bool** | Denotes whether the KBA question has an answer configured for any user in the tenant | 
**NumAnswers** | **int32** | Denotes the number of KBA configurations for this question | 

## Methods

### NewKbaQuestion

`func NewKbaQuestion(id string, text string, hasAnswer bool, numAnswers int32, ) *KbaQuestion`

NewKbaQuestion instantiates a new KbaQuestion object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKbaQuestionWithDefaults

`func NewKbaQuestionWithDefaults() *KbaQuestion`

NewKbaQuestionWithDefaults instantiates a new KbaQuestion object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *KbaQuestion) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *KbaQuestion) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *KbaQuestion) SetId(v string)`

SetId sets Id field to given value.


### GetText

`func (o *KbaQuestion) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *KbaQuestion) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *KbaQuestion) SetText(v string)`

SetText sets Text field to given value.


### GetHasAnswer

`func (o *KbaQuestion) GetHasAnswer() bool`

GetHasAnswer returns the HasAnswer field if non-nil, zero value otherwise.

### GetHasAnswerOk

`func (o *KbaQuestion) GetHasAnswerOk() (*bool, bool)`

GetHasAnswerOk returns a tuple with the HasAnswer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasAnswer

`func (o *KbaQuestion) SetHasAnswer(v bool)`

SetHasAnswer sets HasAnswer field to given value.


### GetNumAnswers

`func (o *KbaQuestion) GetNumAnswers() int32`

GetNumAnswers returns the NumAnswers field if non-nil, zero value otherwise.

### GetNumAnswersOk

`func (o *KbaQuestion) GetNumAnswersOk() (*int32, bool)`

GetNumAnswersOk returns a tuple with the NumAnswers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumAnswers

`func (o *KbaQuestion) SetNumAnswers(v int32)`

SetNumAnswers sets NumAnswers field to given value.



