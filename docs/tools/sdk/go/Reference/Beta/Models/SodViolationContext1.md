---
id: beta-sod-violation-context1
title: SodViolationContext1
pagination_label: SodViolationContext1
sidebar_label: SodViolationContext1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodViolationContext1', 'BetaSodViolationContext1'] 
slug: /tools/sdk/go/beta/models/sod-violation-context1
tags: ['SDK', 'Software Development Kit', 'SodViolationContext1', 'BetaSodViolationContext1']
---

# SodViolationContext1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policy** | Pointer to [**SodPolicyDto**](sod-policy-dto) |  | [optional] 
**ConflictingAccessCriteria** | Pointer to [**SodViolationContext1ConflictingAccessCriteria**](sod-violation-context1-conflicting-access-criteria) |  | [optional] 

## Methods

### NewSodViolationContext1

`func NewSodViolationContext1() *SodViolationContext1`

NewSodViolationContext1 instantiates a new SodViolationContext1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodViolationContext1WithDefaults

`func NewSodViolationContext1WithDefaults() *SodViolationContext1`

NewSodViolationContext1WithDefaults instantiates a new SodViolationContext1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPolicy

`func (o *SodViolationContext1) GetPolicy() SodPolicyDto`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *SodViolationContext1) GetPolicyOk() (*SodPolicyDto, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *SodViolationContext1) SetPolicy(v SodPolicyDto)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *SodViolationContext1) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetConflictingAccessCriteria

`func (o *SodViolationContext1) GetConflictingAccessCriteria() SodViolationContext1ConflictingAccessCriteria`

GetConflictingAccessCriteria returns the ConflictingAccessCriteria field if non-nil, zero value otherwise.

### GetConflictingAccessCriteriaOk

`func (o *SodViolationContext1) GetConflictingAccessCriteriaOk() (*SodViolationContext1ConflictingAccessCriteria, bool)`

GetConflictingAccessCriteriaOk returns a tuple with the ConflictingAccessCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConflictingAccessCriteria

`func (o *SodViolationContext1) SetConflictingAccessCriteria(v SodViolationContext1ConflictingAccessCriteria)`

SetConflictingAccessCriteria sets ConflictingAccessCriteria field to given value.

### HasConflictingAccessCriteria

`func (o *SodViolationContext1) HasConflictingAccessCriteria() bool`

HasConflictingAccessCriteria returns a boolean if a field has been set.


