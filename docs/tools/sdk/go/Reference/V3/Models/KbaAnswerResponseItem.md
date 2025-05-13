---
id: kba-answer-response-item
title: KbaAnswerResponseItem
pagination_label: KbaAnswerResponseItem
sidebar_label: KbaAnswerResponseItem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'KbaAnswerResponseItem', 'KbaAnswerResponseItem'] 
slug: /tools/sdk/go/v3/models/kba-answer-response-item
tags: ['SDK', 'Software Development Kit', 'KbaAnswerResponseItem', 'KbaAnswerResponseItem']
---

# KbaAnswerResponseItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Question Id | 
**Question** | **string** | Question description | 
**HasAnswer** | **bool** | Denotes whether the KBA question has an answer configured for the current user | 

## Methods

### NewKbaAnswerResponseItem

`func NewKbaAnswerResponseItem(id string, question string, hasAnswer bool, ) *KbaAnswerResponseItem`

NewKbaAnswerResponseItem instantiates a new KbaAnswerResponseItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKbaAnswerResponseItemWithDefaults

`func NewKbaAnswerResponseItemWithDefaults() *KbaAnswerResponseItem`

NewKbaAnswerResponseItemWithDefaults instantiates a new KbaAnswerResponseItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *KbaAnswerResponseItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *KbaAnswerResponseItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *KbaAnswerResponseItem) SetId(v string)`

SetId sets Id field to given value.


### GetQuestion

`func (o *KbaAnswerResponseItem) GetQuestion() string`

GetQuestion returns the Question field if non-nil, zero value otherwise.

### GetQuestionOk

`func (o *KbaAnswerResponseItem) GetQuestionOk() (*string, bool)`

GetQuestionOk returns a tuple with the Question field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuestion

`func (o *KbaAnswerResponseItem) SetQuestion(v string)`

SetQuestion sets Question field to given value.


### GetHasAnswer

`func (o *KbaAnswerResponseItem) GetHasAnswer() bool`

GetHasAnswer returns the HasAnswer field if non-nil, zero value otherwise.

### GetHasAnswerOk

`func (o *KbaAnswerResponseItem) GetHasAnswerOk() (*bool, bool)`

GetHasAnswerOk returns a tuple with the HasAnswer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasAnswer

`func (o *KbaAnswerResponseItem) SetHasAnswer(v bool)`

SetHasAnswer sets HasAnswer field to given value.



