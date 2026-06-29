---
id: v1-kbaanswerresponseitem
title: Kbaanswerresponseitem
pagination_label: Kbaanswerresponseitem
sidebar_label: Kbaanswerresponseitem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Kbaanswerresponseitem', 'V1Kbaanswerresponseitem'] 
slug: /tools/sdk/go/mfaconfiguration/models/kbaanswerresponseitem
tags: ['SDK', 'Software Development Kit', 'Kbaanswerresponseitem', 'V1Kbaanswerresponseitem']
---

# Kbaanswerresponseitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Question Id | 
**Question** | **string** | Question description | 
**HasAnswer** | **bool** | Denotes whether the KBA question has an answer configured for the current user | 

## Methods

### NewKbaanswerresponseitem

`func NewKbaanswerresponseitem(id string, question string, hasAnswer bool, ) *Kbaanswerresponseitem`

NewKbaanswerresponseitem instantiates a new Kbaanswerresponseitem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKbaanswerresponseitemWithDefaults

`func NewKbaanswerresponseitemWithDefaults() *Kbaanswerresponseitem`

NewKbaanswerresponseitemWithDefaults instantiates a new Kbaanswerresponseitem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Kbaanswerresponseitem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Kbaanswerresponseitem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Kbaanswerresponseitem) SetId(v string)`

SetId sets Id field to given value.


### GetQuestion

`func (o *Kbaanswerresponseitem) GetQuestion() string`

GetQuestion returns the Question field if non-nil, zero value otherwise.

### GetQuestionOk

`func (o *Kbaanswerresponseitem) GetQuestionOk() (*string, bool)`

GetQuestionOk returns a tuple with the Question field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuestion

`func (o *Kbaanswerresponseitem) SetQuestion(v string)`

SetQuestion sets Question field to given value.


### GetHasAnswer

`func (o *Kbaanswerresponseitem) GetHasAnswer() bool`

GetHasAnswer returns the HasAnswer field if non-nil, zero value otherwise.

### GetHasAnswerOk

`func (o *Kbaanswerresponseitem) GetHasAnswerOk() (*bool, bool)`

GetHasAnswerOk returns a tuple with the HasAnswer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasAnswer

`func (o *Kbaanswerresponseitem) SetHasAnswer(v bool)`

SetHasAnswer sets HasAnswer field to given value.



