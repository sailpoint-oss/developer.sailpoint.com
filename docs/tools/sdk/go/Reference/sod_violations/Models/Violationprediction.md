---
id: v1-violationprediction
title: Violationprediction
pagination_label: Violationprediction
sidebar_label: Violationprediction
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Violationprediction', 'V1Violationprediction'] 
slug: /tools/sdk/go/sodviolations/models/violationprediction
tags: ['SDK', 'Software Development Kit', 'Violationprediction', 'V1Violationprediction']
---

# Violationprediction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ViolationContexts** | Pointer to [**[]Violationcontext**](violationcontext) | List of Violation Contexts | [optional] 

## Methods

### NewViolationprediction

`func NewViolationprediction() *Violationprediction`

NewViolationprediction instantiates a new Violationprediction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewViolationpredictionWithDefaults

`func NewViolationpredictionWithDefaults() *Violationprediction`

NewViolationpredictionWithDefaults instantiates a new Violationprediction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetViolationContexts

`func (o *Violationprediction) GetViolationContexts() []Violationcontext`

GetViolationContexts returns the ViolationContexts field if non-nil, zero value otherwise.

### GetViolationContextsOk

`func (o *Violationprediction) GetViolationContextsOk() (*[]Violationcontext, bool)`

GetViolationContextsOk returns a tuple with the ViolationContexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolationContexts

`func (o *Violationprediction) SetViolationContexts(v []Violationcontext)`

SetViolationContexts sets ViolationContexts field to given value.

### HasViolationContexts

`func (o *Violationprediction) HasViolationContexts() bool`

HasViolationContexts returns a boolean if a field has been set.


