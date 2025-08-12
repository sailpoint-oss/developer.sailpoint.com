---
id: beta-exception-criteria
title: ExceptionCriteria
pagination_label: ExceptionCriteria
sidebar_label: ExceptionCriteria
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ExceptionCriteria', 'BetaExceptionCriteria'] 
slug: /tools/sdk/go/beta/models/exception-criteria
tags: ['SDK', 'Software Development Kit', 'ExceptionCriteria', 'BetaExceptionCriteria']
---

# ExceptionCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CriteriaList** | Pointer to [**[]ExceptionCriteriaCriteriaListInner**](exception-criteria-criteria-list-inner) | List of exception criteria. There is a min of 1 and max of 50 items in the list. | [optional] 

## Methods

### NewExceptionCriteria

`func NewExceptionCriteria() *ExceptionCriteria`

NewExceptionCriteria instantiates a new ExceptionCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExceptionCriteriaWithDefaults

`func NewExceptionCriteriaWithDefaults() *ExceptionCriteria`

NewExceptionCriteriaWithDefaults instantiates a new ExceptionCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteriaList

`func (o *ExceptionCriteria) GetCriteriaList() []ExceptionCriteriaCriteriaListInner`

GetCriteriaList returns the CriteriaList field if non-nil, zero value otherwise.

### GetCriteriaListOk

`func (o *ExceptionCriteria) GetCriteriaListOk() (*[]ExceptionCriteriaCriteriaListInner, bool)`

GetCriteriaListOk returns a tuple with the CriteriaList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteriaList

`func (o *ExceptionCriteria) SetCriteriaList(v []ExceptionCriteriaCriteriaListInner)`

SetCriteriaList sets CriteriaList field to given value.

### HasCriteriaList

`func (o *ExceptionCriteria) HasCriteriaList() bool`

HasCriteriaList returns a boolean if a field has been set.


