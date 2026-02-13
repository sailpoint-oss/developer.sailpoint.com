---
id: beta-sod-violation-context2
title: SodViolationContext2
pagination_label: SodViolationContext2
sidebar_label: SodViolationContext2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodViolationContext2', 'BetaSodViolationContext2'] 
slug: /tools/sdk/go/beta/models/sod-violation-context2
tags: ['SDK', 'Software Development Kit', 'SodViolationContext2', 'BetaSodViolationContext2']
---

# SodViolationContext2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policy** | Pointer to [**SodPolicyDto1**](sod-policy-dto1) |  | [optional] 
**ConflictingAccessCriteria** | Pointer to [**SodViolationContext2ConflictingAccessCriteria**](sod-violation-context2-conflicting-access-criteria) |  | [optional] 

## Methods

### NewSodViolationContext2

`func NewSodViolationContext2() *SodViolationContext2`

NewSodViolationContext2 instantiates a new SodViolationContext2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodViolationContext2WithDefaults

`func NewSodViolationContext2WithDefaults() *SodViolationContext2`

NewSodViolationContext2WithDefaults instantiates a new SodViolationContext2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPolicy

`func (o *SodViolationContext2) GetPolicy() SodPolicyDto1`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *SodViolationContext2) GetPolicyOk() (*SodPolicyDto1, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *SodViolationContext2) SetPolicy(v SodPolicyDto1)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *SodViolationContext2) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetConflictingAccessCriteria

`func (o *SodViolationContext2) GetConflictingAccessCriteria() SodViolationContext2ConflictingAccessCriteria`

GetConflictingAccessCriteria returns the ConflictingAccessCriteria field if non-nil, zero value otherwise.

### GetConflictingAccessCriteriaOk

`func (o *SodViolationContext2) GetConflictingAccessCriteriaOk() (*SodViolationContext2ConflictingAccessCriteria, bool)`

GetConflictingAccessCriteriaOk returns a tuple with the ConflictingAccessCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConflictingAccessCriteria

`func (o *SodViolationContext2) SetConflictingAccessCriteria(v SodViolationContext2ConflictingAccessCriteria)`

SetConflictingAccessCriteria sets ConflictingAccessCriteria field to given value.

### HasConflictingAccessCriteria

`func (o *SodViolationContext2) HasConflictingAccessCriteria() bool`

HasConflictingAccessCriteria returns a boolean if a field has been set.


