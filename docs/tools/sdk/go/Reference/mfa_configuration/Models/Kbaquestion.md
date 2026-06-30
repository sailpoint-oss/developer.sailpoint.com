---
id: v1-kbaquestion
title: Kbaquestion
pagination_label: Kbaquestion
sidebar_label: Kbaquestion
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Kbaquestion', 'V1Kbaquestion'] 
slug: /tools/sdk/go/mfaconfiguration/models/kbaquestion
tags: ['SDK', 'Software Development Kit', 'Kbaquestion', 'V1Kbaquestion']
---

# Kbaquestion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | KBA Question Id | 
**Text** | **string** | KBA Question description | 
**HasAnswer** | **bool** | Denotes whether the KBA question has an answer configured for any user in the tenant | 
**NumAnswers** | **int32** | Denotes the number of KBA configurations for this question | 

## Methods

### NewKbaquestion

`func NewKbaquestion(id string, text string, hasAnswer bool, numAnswers int32, ) *Kbaquestion`

NewKbaquestion instantiates a new Kbaquestion object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKbaquestionWithDefaults

`func NewKbaquestionWithDefaults() *Kbaquestion`

NewKbaquestionWithDefaults instantiates a new Kbaquestion object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Kbaquestion) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Kbaquestion) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Kbaquestion) SetId(v string)`

SetId sets Id field to given value.


### GetText

`func (o *Kbaquestion) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *Kbaquestion) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *Kbaquestion) SetText(v string)`

SetText sets Text field to given value.


### GetHasAnswer

`func (o *Kbaquestion) GetHasAnswer() bool`

GetHasAnswer returns the HasAnswer field if non-nil, zero value otherwise.

### GetHasAnswerOk

`func (o *Kbaquestion) GetHasAnswerOk() (*bool, bool)`

GetHasAnswerOk returns a tuple with the HasAnswer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasAnswer

`func (o *Kbaquestion) SetHasAnswer(v bool)`

SetHasAnswer sets HasAnswer field to given value.


### GetNumAnswers

`func (o *Kbaquestion) GetNumAnswers() int32`

GetNumAnswers returns the NumAnswers field if non-nil, zero value otherwise.

### GetNumAnswersOk

`func (o *Kbaquestion) GetNumAnswersOk() (*int32, bool)`

GetNumAnswersOk returns a tuple with the NumAnswers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumAnswers

`func (o *Kbaquestion) SetNumAnswers(v int32)`

SetNumAnswers sets NumAnswers field to given value.



