---
id: v1-sodviolationcontext
title: Sodviolationcontext
pagination_label: Sodviolationcontext
sidebar_label: Sodviolationcontext
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sodviolationcontext', 'V1Sodviolationcontext'] 
slug: /tools/sdk/go/accessrequestapprovals/models/sodviolationcontext
tags: ['SDK', 'Software Development Kit', 'Sodviolationcontext', 'V1Sodviolationcontext']
---

# Sodviolationcontext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policy** | Pointer to [**Sodpolicydto**](sodpolicydto) |  | [optional] 
**ConflictingAccessCriteria** | Pointer to [**SodviolationcontextConflictingAccessCriteria**](sodviolationcontext-conflicting-access-criteria) |  | [optional] 

## Methods

### NewSodviolationcontext

`func NewSodviolationcontext() *Sodviolationcontext`

NewSodviolationcontext instantiates a new Sodviolationcontext object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodviolationcontextWithDefaults

`func NewSodviolationcontextWithDefaults() *Sodviolationcontext`

NewSodviolationcontextWithDefaults instantiates a new Sodviolationcontext object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPolicy

`func (o *Sodviolationcontext) GetPolicy() Sodpolicydto`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *Sodviolationcontext) GetPolicyOk() (*Sodpolicydto, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *Sodviolationcontext) SetPolicy(v Sodpolicydto)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *Sodviolationcontext) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetConflictingAccessCriteria

`func (o *Sodviolationcontext) GetConflictingAccessCriteria() SodviolationcontextConflictingAccessCriteria`

GetConflictingAccessCriteria returns the ConflictingAccessCriteria field if non-nil, zero value otherwise.

### GetConflictingAccessCriteriaOk

`func (o *Sodviolationcontext) GetConflictingAccessCriteriaOk() (*SodviolationcontextConflictingAccessCriteria, bool)`

GetConflictingAccessCriteriaOk returns a tuple with the ConflictingAccessCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConflictingAccessCriteria

`func (o *Sodviolationcontext) SetConflictingAccessCriteria(v SodviolationcontextConflictingAccessCriteria)`

SetConflictingAccessCriteria sets ConflictingAccessCriteria field to given value.

### HasConflictingAccessCriteria

`func (o *Sodviolationcontext) HasConflictingAccessCriteria() bool`

HasConflictingAccessCriteria returns a boolean if a field has been set.


