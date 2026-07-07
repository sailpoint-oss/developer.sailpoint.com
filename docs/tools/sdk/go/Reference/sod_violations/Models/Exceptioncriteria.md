---
id: v1-exceptioncriteria
title: Exceptioncriteria
pagination_label: Exceptioncriteria
sidebar_label: Exceptioncriteria
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Exceptioncriteria', 'V1Exceptioncriteria'] 
slug: /tools/sdk/go/sodviolations/models/exceptioncriteria
tags: ['SDK', 'Software Development Kit', 'Exceptioncriteria', 'V1Exceptioncriteria']
---

# Exceptioncriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CriteriaList** | Pointer to [**[]ExceptioncriteriaCriteriaListInner**](exceptioncriteria-criteria-list-inner) | List of exception criteria. There is a min of 1 and max of 50 items in the list. | [optional] 

## Methods

### NewExceptioncriteria

`func NewExceptioncriteria() *Exceptioncriteria`

NewExceptioncriteria instantiates a new Exceptioncriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExceptioncriteriaWithDefaults

`func NewExceptioncriteriaWithDefaults() *Exceptioncriteria`

NewExceptioncriteriaWithDefaults instantiates a new Exceptioncriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteriaList

`func (o *Exceptioncriteria) GetCriteriaList() []ExceptioncriteriaCriteriaListInner`

GetCriteriaList returns the CriteriaList field if non-nil, zero value otherwise.

### GetCriteriaListOk

`func (o *Exceptioncriteria) GetCriteriaListOk() (*[]ExceptioncriteriaCriteriaListInner, bool)`

GetCriteriaListOk returns a tuple with the CriteriaList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteriaList

`func (o *Exceptioncriteria) SetCriteriaList(v []ExceptioncriteriaCriteriaListInner)`

SetCriteriaList sets CriteriaList field to given value.

### HasCriteriaList

`func (o *Exceptioncriteria) HasCriteriaList() bool`

HasCriteriaList returns a boolean if a field has been set.


