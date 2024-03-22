---
id: kba-answer-request-item
title: KbaAnswerRequestItem
pagination_label: KbaAnswerRequestItem
sidebar_label: KbaAnswerRequestItem
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'KbaAnswerRequestItem'] 
slug: /tools/sdk/go/beta/models/kba-answer-request-item
tags: ['SDK', 'Software Development Kit', 'KbaAnswerRequestItem']
---

# KbaAnswerRequestItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QuestionId** |  **string** | Question Id | 
**Answer** |  **string** | An answer for the KBA question | 

## Methods

### NewKbaAnswerRequestItem

`func NewKbaAnswerRequestItem(questionId string, answer string, ) *KbaAnswerRequestItem`

NewKbaAnswerRequestItem instantiates a new KbaAnswerRequestItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKbaAnswerRequestItemWithDefaults

`func NewKbaAnswerRequestItemWithDefaults() *KbaAnswerRequestItem`

NewKbaAnswerRequestItemWithDefaults instantiates a new KbaAnswerRequestItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuestionId

`func (o *KbaAnswerRequestItem) GetQuestionId() string`

GetQuestionId returns the QuestionId field if non-nil, zero value otherwise.

### GetQuestionIdOk

`func (o *KbaAnswerRequestItem) GetQuestionIdOk() (*string, bool)`

GetQuestionIdOk returns a tuple with the QuestionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuestionId

`func (o *KbaAnswerRequestItem) SetQuestionId(v string)`

SetQuestionId sets QuestionId field to given value.


### GetAnswer

`func (o *KbaAnswerRequestItem) GetAnswer() string`

GetAnswer returns the Answer field if non-nil, zero value otherwise.

### GetAnswerOk

`func (o *KbaAnswerRequestItem) GetAnswerOk() (*string, bool)`

GetAnswerOk returns a tuple with the Answer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnswer

`func (o *KbaAnswerRequestItem) SetAnswer(v string)`

SetAnswer sets Answer field to given value.



[[Back to top]](#) 


