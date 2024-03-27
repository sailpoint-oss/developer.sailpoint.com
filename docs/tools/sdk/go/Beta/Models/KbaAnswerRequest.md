---
id: kba-answer-request
title: KbaAnswerRequest
pagination_label: KbaAnswerRequest
sidebar_label: KbaAnswerRequest
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'KbaAnswerRequest'] 
slug: /tools/sdk/go/beta/models/kba-answer-request
tags: ['SDK', 'Software Development Kit', 'KbaAnswerRequest']
---

# KbaAnswerRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Answers** |  [**[]KbaAnswerRequestItem**](kba-answer-request-item) | Kba answers | 

## Methods

### NewKbaAnswerRequest

`func NewKbaAnswerRequest(answers []KbaAnswerRequestItem, ) *KbaAnswerRequest`

NewKbaAnswerRequest instantiates a new KbaAnswerRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKbaAnswerRequestWithDefaults

`func NewKbaAnswerRequestWithDefaults() *KbaAnswerRequest`

NewKbaAnswerRequestWithDefaults instantiates a new KbaAnswerRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAnswers

`func (o *KbaAnswerRequest) GetAnswers() []KbaAnswerRequestItem`

GetAnswers returns the Answers field if non-nil, zero value otherwise.

### GetAnswersOk

`func (o *KbaAnswerRequest) GetAnswersOk() (*[]KbaAnswerRequestItem, bool)`

GetAnswersOk returns a tuple with the Answers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnswers

`func (o *KbaAnswerRequest) SetAnswers(v []KbaAnswerRequestItem)`

SetAnswers sets Answers field to given value.



[[Back to top]](#) 


