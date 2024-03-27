---
id: violation-prediction
title: ViolationPrediction
pagination_label: ViolationPrediction
sidebar_label: ViolationPrediction
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ViolationPrediction'] 
slug: /tools/sdk/go/beta/models/violation-prediction
tags: ['SDK', 'Software Development Kit', 'ViolationPrediction']
---

# ViolationPrediction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ViolationContexts** |  Pointer to [**[]ViolationContext**](violation-context) | List of Violation Contexts | [optional] 

## Methods

### NewViolationPrediction

`func NewViolationPrediction() *ViolationPrediction`

NewViolationPrediction instantiates a new ViolationPrediction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewViolationPredictionWithDefaults

`func NewViolationPredictionWithDefaults() *ViolationPrediction`

NewViolationPredictionWithDefaults instantiates a new ViolationPrediction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetViolationContexts

`func (o *ViolationPrediction) GetViolationContexts() []ViolationContext`

GetViolationContexts returns the ViolationContexts field if non-nil, zero value otherwise.

### GetViolationContextsOk

`func (o *ViolationPrediction) GetViolationContextsOk() (*[]ViolationContext, bool)`

GetViolationContextsOk returns a tuple with the ViolationContexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolationContexts

`func (o *ViolationPrediction) SetViolationContexts(v []ViolationContext)`

SetViolationContexts sets ViolationContexts field to given value.

### HasViolationContexts

`func (o *ViolationPrediction) HasViolationContexts() bool`

HasViolationContexts returns a boolean if a field has been set.


[[Back to top]](#) 


