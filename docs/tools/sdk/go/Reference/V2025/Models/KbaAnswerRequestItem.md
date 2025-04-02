---
id: kba-answer-request-item
title: KbaAnswerRequestItem
pagination_label: KbaAnswerRequestItem
sidebar_label: KbaAnswerRequestItem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'KbaAnswerRequestItem', 'KbaAnswerRequestItem'] 
slug: /tools/sdk/go//models/kba-answer-request-item
tags: ['SDK', 'Software Development Kit', 'KbaAnswerRequestItem', 'KbaAnswerRequestItem']
---

# KbaAnswerRequestItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Question Id | 
**Answer** | **string** | An answer for the KBA question | 

## Methods

### NewKbaAnswerRequestItem

`func NewKbaAnswerRequestItem(id string, answer string, ) *KbaAnswerRequestItem`

NewKbaAnswerRequestItem instantiates a new KbaAnswerRequestItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKbaAnswerRequestItemWithDefaults

`func NewKbaAnswerRequestItemWithDefaults() *KbaAnswerRequestItem`

NewKbaAnswerRequestItemWithDefaults instantiates a new KbaAnswerRequestItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *KbaAnswerRequestItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *KbaAnswerRequestItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *KbaAnswerRequestItem) SetId(v string)`

SetId sets Id field to given value.


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



