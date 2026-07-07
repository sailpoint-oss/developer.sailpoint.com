---
id: v1-conflictingaccesscriteria
title: Conflictingaccesscriteria
pagination_label: Conflictingaccesscriteria
sidebar_label: Conflictingaccesscriteria
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Conflictingaccesscriteria', 'V1Conflictingaccesscriteria'] 
slug: /tools/sdk/go/sodpolicies/models/conflictingaccesscriteria
tags: ['SDK', 'Software Development Kit', 'Conflictingaccesscriteria', 'V1Conflictingaccesscriteria']
---

# Conflictingaccesscriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** | Pointer to [**Accesscriteria**](accesscriteria) |  | [optional] 
**RightCriteria** | Pointer to [**Accesscriteria**](accesscriteria) |  | [optional] 

## Methods

### NewConflictingaccesscriteria

`func NewConflictingaccesscriteria() *Conflictingaccesscriteria`

NewConflictingaccesscriteria instantiates a new Conflictingaccesscriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConflictingaccesscriteriaWithDefaults

`func NewConflictingaccesscriteriaWithDefaults() *Conflictingaccesscriteria`

NewConflictingaccesscriteriaWithDefaults instantiates a new Conflictingaccesscriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLeftCriteria

`func (o *Conflictingaccesscriteria) GetLeftCriteria() Accesscriteria`

GetLeftCriteria returns the LeftCriteria field if non-nil, zero value otherwise.

### GetLeftCriteriaOk

`func (o *Conflictingaccesscriteria) GetLeftCriteriaOk() (*Accesscriteria, bool)`

GetLeftCriteriaOk returns a tuple with the LeftCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeftCriteria

`func (o *Conflictingaccesscriteria) SetLeftCriteria(v Accesscriteria)`

SetLeftCriteria sets LeftCriteria field to given value.

### HasLeftCriteria

`func (o *Conflictingaccesscriteria) HasLeftCriteria() bool`

HasLeftCriteria returns a boolean if a field has been set.

### GetRightCriteria

`func (o *Conflictingaccesscriteria) GetRightCriteria() Accesscriteria`

GetRightCriteria returns the RightCriteria field if non-nil, zero value otherwise.

### GetRightCriteriaOk

`func (o *Conflictingaccesscriteria) GetRightCriteriaOk() (*Accesscriteria, bool)`

GetRightCriteriaOk returns a tuple with the RightCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRightCriteria

`func (o *Conflictingaccesscriteria) SetRightCriteria(v Accesscriteria)`

SetRightCriteria sets RightCriteria field to given value.

### HasRightCriteria

`func (o *Conflictingaccesscriteria) HasRightCriteria() bool`

HasRightCriteria returns a boolean if a field has been set.


