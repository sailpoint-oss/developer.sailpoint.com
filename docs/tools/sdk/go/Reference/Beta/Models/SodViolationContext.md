---
id: beta-sod-violation-context
title: SodViolationContext
pagination_label: SodViolationContext
sidebar_label: SodViolationContext
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodViolationContext', 'BetaSodViolationContext'] 
slug: /tools/sdk/go/beta/models/sod-violation-context
tags: ['SDK', 'Software Development Kit', 'SodViolationContext', 'BetaSodViolationContext']
---

# SodViolationContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policy** | Pointer to [**SodPolicyDto1**](sod-policy-dto1) |  | [optional] 
**ConflictingAccessCriteria** | Pointer to [**SodViolationContextConflictingAccessCriteria**](sod-violation-context-conflicting-access-criteria) |  | [optional] 

## Methods

### NewSodViolationContext

`func NewSodViolationContext() *SodViolationContext`

NewSodViolationContext instantiates a new SodViolationContext object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodViolationContextWithDefaults

`func NewSodViolationContextWithDefaults() *SodViolationContext`

NewSodViolationContextWithDefaults instantiates a new SodViolationContext object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPolicy

`func (o *SodViolationContext) GetPolicy() SodPolicyDto1`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *SodViolationContext) GetPolicyOk() (*SodPolicyDto1, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *SodViolationContext) SetPolicy(v SodPolicyDto1)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *SodViolationContext) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetConflictingAccessCriteria

`func (o *SodViolationContext) GetConflictingAccessCriteria() SodViolationContextConflictingAccessCriteria`

GetConflictingAccessCriteria returns the ConflictingAccessCriteria field if non-nil, zero value otherwise.

### GetConflictingAccessCriteriaOk

`func (o *SodViolationContext) GetConflictingAccessCriteriaOk() (*SodViolationContextConflictingAccessCriteria, bool)`

GetConflictingAccessCriteriaOk returns a tuple with the ConflictingAccessCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConflictingAccessCriteria

`func (o *SodViolationContext) SetConflictingAccessCriteria(v SodViolationContextConflictingAccessCriteria)`

SetConflictingAccessCriteria sets ConflictingAccessCriteria field to given value.

### HasConflictingAccessCriteria

`func (o *SodViolationContext) HasConflictingAccessCriteria() bool`

HasConflictingAccessCriteria returns a boolean if a field has been set.


