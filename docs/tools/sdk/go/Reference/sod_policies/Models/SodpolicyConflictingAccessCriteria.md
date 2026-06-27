---
id: v1-sodpolicy-conflicting-access-criteria
title: SodpolicyConflictingAccessCriteria
pagination_label: SodpolicyConflictingAccessCriteria
sidebar_label: SodpolicyConflictingAccessCriteria
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodpolicyConflictingAccessCriteria', 'V1SodpolicyConflictingAccessCriteria'] 
slug: /tools/sdk/go/sodpolicies/models/sodpolicy-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodpolicyConflictingAccessCriteria', 'V1SodpolicyConflictingAccessCriteria']
---

# SodpolicyConflictingAccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** | Pointer to [**Accesscriteria**](accesscriteria) |  | [optional] 
**RightCriteria** | Pointer to [**Accesscriteria**](accesscriteria) |  | [optional] 

## Methods

### NewSodpolicyConflictingAccessCriteria

`func NewSodpolicyConflictingAccessCriteria() *SodpolicyConflictingAccessCriteria`

NewSodpolicyConflictingAccessCriteria instantiates a new SodpolicyConflictingAccessCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodpolicyConflictingAccessCriteriaWithDefaults

`func NewSodpolicyConflictingAccessCriteriaWithDefaults() *SodpolicyConflictingAccessCriteria`

NewSodpolicyConflictingAccessCriteriaWithDefaults instantiates a new SodpolicyConflictingAccessCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLeftCriteria

`func (o *SodpolicyConflictingAccessCriteria) GetLeftCriteria() Accesscriteria`

GetLeftCriteria returns the LeftCriteria field if non-nil, zero value otherwise.

### GetLeftCriteriaOk

`func (o *SodpolicyConflictingAccessCriteria) GetLeftCriteriaOk() (*Accesscriteria, bool)`

GetLeftCriteriaOk returns a tuple with the LeftCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeftCriteria

`func (o *SodpolicyConflictingAccessCriteria) SetLeftCriteria(v Accesscriteria)`

SetLeftCriteria sets LeftCriteria field to given value.

### HasLeftCriteria

`func (o *SodpolicyConflictingAccessCriteria) HasLeftCriteria() bool`

HasLeftCriteria returns a boolean if a field has been set.

### GetRightCriteria

`func (o *SodpolicyConflictingAccessCriteria) GetRightCriteria() Accesscriteria`

GetRightCriteria returns the RightCriteria field if non-nil, zero value otherwise.

### GetRightCriteriaOk

`func (o *SodpolicyConflictingAccessCriteria) GetRightCriteriaOk() (*Accesscriteria, bool)`

GetRightCriteriaOk returns a tuple with the RightCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRightCriteria

`func (o *SodpolicyConflictingAccessCriteria) SetRightCriteria(v Accesscriteria)`

SetRightCriteria sets RightCriteria field to given value.

### HasRightCriteria

`func (o *SodpolicyConflictingAccessCriteria) HasRightCriteria() bool`

HasRightCriteria returns a boolean if a field has been set.


