---
id: v1-violationcontext
title: Violationcontext
pagination_label: Violationcontext
sidebar_label: Violationcontext
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Violationcontext', 'V1Violationcontext'] 
slug: /tools/sdk/go/sodviolations/models/violationcontext
tags: ['SDK', 'Software Development Kit', 'Violationcontext', 'V1Violationcontext']
---

# Violationcontext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policy** | Pointer to [**ViolationcontextPolicy**](violationcontext-policy) |  | [optional] 
**ConflictingAccessCriteria** | Pointer to [**Exceptionaccesscriteria**](exceptionaccesscriteria) |  | [optional] 

## Methods

### NewViolationcontext

`func NewViolationcontext() *Violationcontext`

NewViolationcontext instantiates a new Violationcontext object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewViolationcontextWithDefaults

`func NewViolationcontextWithDefaults() *Violationcontext`

NewViolationcontextWithDefaults instantiates a new Violationcontext object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPolicy

`func (o *Violationcontext) GetPolicy() ViolationcontextPolicy`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *Violationcontext) GetPolicyOk() (*ViolationcontextPolicy, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *Violationcontext) SetPolicy(v ViolationcontextPolicy)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *Violationcontext) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetConflictingAccessCriteria

`func (o *Violationcontext) GetConflictingAccessCriteria() Exceptionaccesscriteria`

GetConflictingAccessCriteria returns the ConflictingAccessCriteria field if non-nil, zero value otherwise.

### GetConflictingAccessCriteriaOk

`func (o *Violationcontext) GetConflictingAccessCriteriaOk() (*Exceptionaccesscriteria, bool)`

GetConflictingAccessCriteriaOk returns a tuple with the ConflictingAccessCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConflictingAccessCriteria

`func (o *Violationcontext) SetConflictingAccessCriteria(v Exceptionaccesscriteria)`

SetConflictingAccessCriteria sets ConflictingAccessCriteria field to given value.

### HasConflictingAccessCriteria

`func (o *Violationcontext) HasConflictingAccessCriteria() bool`

HasConflictingAccessCriteria returns a boolean if a field has been set.


