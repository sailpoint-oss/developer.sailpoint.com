---
id: v2024-violation-context
title: ViolationContext
pagination_label: ViolationContext
sidebar_label: ViolationContext
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ViolationContext', 'V2024ViolationContext'] 
slug: /tools/sdk/go/v2024/models/violation-context
tags: ['SDK', 'Software Development Kit', 'ViolationContext', 'V2024ViolationContext']
---

# ViolationContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policy** | Pointer to [**ViolationContextPolicy**](violation-context-policy) |  | [optional] 
**ConflictingAccessCriteria** | Pointer to [**ExceptionAccessCriteria**](exception-access-criteria) |  | [optional] 

## Methods

### NewViolationContext

`func NewViolationContext() *ViolationContext`

NewViolationContext instantiates a new ViolationContext object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewViolationContextWithDefaults

`func NewViolationContextWithDefaults() *ViolationContext`

NewViolationContextWithDefaults instantiates a new ViolationContext object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPolicy

`func (o *ViolationContext) GetPolicy() ViolationContextPolicy`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *ViolationContext) GetPolicyOk() (*ViolationContextPolicy, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *ViolationContext) SetPolicy(v ViolationContextPolicy)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *ViolationContext) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetConflictingAccessCriteria

`func (o *ViolationContext) GetConflictingAccessCriteria() ExceptionAccessCriteria`

GetConflictingAccessCriteria returns the ConflictingAccessCriteria field if non-nil, zero value otherwise.

### GetConflictingAccessCriteriaOk

`func (o *ViolationContext) GetConflictingAccessCriteriaOk() (*ExceptionAccessCriteria, bool)`

GetConflictingAccessCriteriaOk returns a tuple with the ConflictingAccessCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConflictingAccessCriteria

`func (o *ViolationContext) SetConflictingAccessCriteria(v ExceptionAccessCriteria)`

SetConflictingAccessCriteria sets ConflictingAccessCriteria field to given value.

### HasConflictingAccessCriteria

`func (o *ViolationContext) HasConflictingAccessCriteria() bool`

HasConflictingAccessCriteria returns a boolean if a field has been set.


