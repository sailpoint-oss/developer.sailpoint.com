---
id: exception-access-criteria
title: ExceptionAccessCriteria
pagination_label: ExceptionAccessCriteria
sidebar_label: ExceptionAccessCriteria
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ExceptionAccessCriteria', 'ExceptionAccessCriteria'] 
slug: /tools/sdk/go/v3/models/exception-access-criteria
tags: ['SDK', 'Software Development Kit', 'ExceptionAccessCriteria', 'ExceptionAccessCriteria']
---

# ExceptionAccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** | Pointer to [**ExceptionCriteria**](exception-criteria) |  | [optional] 
**RightCriteria** | Pointer to [**ExceptionCriteria**](exception-criteria) |  | [optional] 

## Methods

### NewExceptionAccessCriteria

`func NewExceptionAccessCriteria() *ExceptionAccessCriteria`

NewExceptionAccessCriteria instantiates a new ExceptionAccessCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExceptionAccessCriteriaWithDefaults

`func NewExceptionAccessCriteriaWithDefaults() *ExceptionAccessCriteria`

NewExceptionAccessCriteriaWithDefaults instantiates a new ExceptionAccessCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLeftCriteria

`func (o *ExceptionAccessCriteria) GetLeftCriteria() ExceptionCriteria`

GetLeftCriteria returns the LeftCriteria field if non-nil, zero value otherwise.

### GetLeftCriteriaOk

`func (o *ExceptionAccessCriteria) GetLeftCriteriaOk() (*ExceptionCriteria, bool)`

GetLeftCriteriaOk returns a tuple with the LeftCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeftCriteria

`func (o *ExceptionAccessCriteria) SetLeftCriteria(v ExceptionCriteria)`

SetLeftCriteria sets LeftCriteria field to given value.

### HasLeftCriteria

`func (o *ExceptionAccessCriteria) HasLeftCriteria() bool`

HasLeftCriteria returns a boolean if a field has been set.

### GetRightCriteria

`func (o *ExceptionAccessCriteria) GetRightCriteria() ExceptionCriteria`

GetRightCriteria returns the RightCriteria field if non-nil, zero value otherwise.

### GetRightCriteriaOk

`func (o *ExceptionAccessCriteria) GetRightCriteriaOk() (*ExceptionCriteria, bool)`

GetRightCriteriaOk returns a tuple with the RightCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRightCriteria

`func (o *ExceptionAccessCriteria) SetRightCriteria(v ExceptionCriteria)`

SetRightCriteria sets RightCriteria field to given value.

### HasRightCriteria

`func (o *ExceptionAccessCriteria) HasRightCriteria() bool`

HasRightCriteria returns a boolean if a field has been set.


